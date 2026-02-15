import os
import re
import json
from datetime import datetime

# Configuration
SOURCE_DIR = "."
OUTPUT_FILE = "src/data/blogs.ts"
IMAGE_DIR = "/images/blog"

def clean_text(text):
    # Remove **
    text = text.replace("**", "")
    # Remove em-dashes (—) and replace with -
    text = text.replace("—", " - ")
    # Fix explicit image markdown if we are handling it separately
    text = re.sub(r'!\[.*?\]\(.*?\)', '', text)
    return text.strip()

def parse_blog(filename, index):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Frontmatter parsing
    frontmatter = {}
    body_content = content
    
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            raw_frontmatter = parts[1]
            body_content = parts[2].strip()
            
            # Simple YAML parser
            for line in raw_frontmatter.strip().split('\n'):
                if ':' in line:
                    key, value = line.split(':', 1)
                    key = key.strip()
                    value = value.strip().strip('"').strip("'")
                    if key == 'tags':
                        # Handle list format [tag1, tag2]
                        value = value.strip('[]')
                        frontmatter[key] = [t.strip().strip('"').strip("'") for t in value.split(',')]
                    else:
                        frontmatter[key] = value

    lines = body_content.split('\n')
    
    # Title strategy: Frontmatter > First line
    title = frontmatter.get('title')
    if not title:
        title = lines[0].strip() if lines else f"Blog Post {index}"

    # Extract tags (Frontmatter > "Tagged:" line in body)
    tags = frontmatter.get('tags', [])
    
    content_lines = []
    faqs = []
    toc = []
    
    # Flags and buffers
    in_faq = False
    in_refs = False
    
    # Helper to check for headers
    def is_header(line):
        return line.strip().startswith('#') or (len(line.strip()) > 0 and line.strip()[0].isupper() and len(line.strip()) < 100 and not line.strip().endswith('.'))

    # First pass: identify sections
    body_lines = []
    faq_lines = []
    ref_lines = []
    
    for i, line in enumerate(lines):
        s_line = line.strip()
        # If we didn't have frontmatter, skip the first line as it was used for title
        if not frontmatter and i == 0: continue 
        
        # Check for start of FAQ section
        if "FAQ" in s_line and (len(s_line) < 60 or "Micro-FAQs" in s_line or s_line == "FAQs"):
            in_faq = True
            in_refs = False
            continue
            
        # Check for start of References section
        if "Reference" in s_line and (len(s_line) < 40):
            in_refs = True
            in_faq = False
            continue
            
        if in_faq:
            if s_line: faq_lines.append(s_line)
        elif in_refs:
            if s_line: ref_lines.append(s_line)
        else:
            # Main content
            if s_line.startswith("Tagged") and not tags:
                tag_text = s_line.replace("Tagged", "").strip()
                tags = [t.strip().rstrip('.') for t in tag_text.split(',')]
            else:
                body_lines.append(line)
        
    full_content = "\n".join(body_lines).strip()
    cleaned_content = clean_text(full_content)
    cleaned_title = clean_text(title)
    
    # Process FAQs
    # ... (existing FAQ processing) ...
    
    # Process References
    references = []
    for line in ref_lines:
        # Check for [Title](url)
        match = re.search(r'\[(.*?)\]\((.*?)\)', line)
        if match:
            references.append({"title": match.group(1), "url": match.group(2)})
        else:
            # Fallback for plain text if needed
            url_match = re.search(r'(https?://\S+)', line)
            if url_match:
                ref_title = line.replace(url_match.group(1), "").strip().strip('-').strip() or "Reference"
                references.append({"title": ref_title, "url": url_match.group(1)})
    
    # Process FAQs (Enhanced Logic)
    current_q = None
    current_a = []
    
    for line in faq_lines:
        s_line = line.strip()
        if not s_line:
            continue
            
        # Check if line is a question (starts with Q1, Q:, or ends with ?)
        is_question = '?' in s_line or s_line.startswith('Q') and (':' in s_line or '.' in s_line)
        
        if is_question:
            # Save previous Q&A if exists
            if current_q:
                faqs.append({"question": clean_text(current_q), "answer": clean_text(" ".join(current_a))})
            
            # Start new question
            if '?' in s_line and len(s_line.split('?')[1].strip()) > 5:
                 parts = s_line.split('?', 1)
                 current_q = parts[0].strip() + '?'
                 current_a = [parts[1].strip()]
            else:
                 current_q = s_line
                 current_a = []
        else:
            # It's an answer line
            if current_q:
                current_a.append(s_line)
                
    # Append last FAQ
    if current_q and current_a:
         faqs.append({"question": clean_text(current_q), "answer": clean_text(" ".join(current_a))})
    
    # Process TOC
    for line in body_lines:
        s_line = line.strip()
        if not s_line: continue
        # Heuristic for TOC items: Short, Title Case, not a sentence (no dot at end)
        # Also include explicit headers starting with #
        if s_line.startswith('#') or (len(s_line) < 80 and s_line[0].isupper() and not s_line.endswith('.')):
             # Exclude image markdowns and tags
            if "![" not in s_line and "Tagged" not in s_line:
                clean_header = s_line.lstrip('#').strip()
                id_slug = re.sub(r'[^a-z0-9]+', '-', clean_header.lower()).strip('-')
                toc.append({"title": clean_text(clean_header), "id": id_slug})

    # Generate slug from title
    slug = re.sub(r'[^a-z0-9]+', '-', cleaned_title.lower()).strip('-')
    
    # Extract excerpt
    excerpt = frontmatter.get('excerpt', "")
    if not excerpt:
        for line in body_lines:
            if line.strip():
                excerpt = clean_text(line)
                break
            
    # Assign Image
    image_path = frontmatter.get('image', f"{IMAGE_DIR}/blog{index}.png")
    
    return {
        "id": str(index),
        "slug": slug,
        "title": cleaned_title,
        "excerpt": excerpt[:150] + "..." if len(excerpt) > 150 else excerpt,
        "content": cleaned_content,
        "date": frontmatter.get('date', datetime.now().strftime("%Y-%m-%d")),
        "author": frontmatter.get('author', "MediMan Team"),
        "image": image_path,
        "category": frontmatter.get('category', "Health & Wellness"),
        "tags": tags,
        "faqs": faqs,
        "toc": toc,
        "references": references
    }

def generate_ts():
    blogs = []
    blogs_dir = 'content/blogs'
    
    # Ensure directory exists
    if not os.path.exists(blogs_dir):
        print(f"Directory {blogs_dir} does not exist.")
        return

    # Get all .md files and sort them (optional, e.g. by name or you can add date parsing to sort)
    files = sorted([f for f in os.listdir(blogs_dir) if f.endswith('.md')])
    
    for i, filename in enumerate(files, 1):
        file_path = os.path.join(blogs_dir, filename)
        if os.path.exists(file_path):
            blogs.append(parse_blog(file_path, i))
    
    ts_content = f"""export interface FAQ {{
  question: string;
  answer: string;
}}

export interface TOCItem {{
  title: string;
  id: string;
}}

export interface Reference {{
  title: string;
  url: string;
}}

export interface BlogPost {{
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
  faqs: FAQ[];
  toc: TOCItem[];
  references: Reference[];
}}

export const BLOGS: BlogPost[] = {json.dumps(blogs, indent=2)};
"""
    
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"Generated {len(blogs)} blogs to {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_ts()
