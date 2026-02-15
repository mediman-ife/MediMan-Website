
import os
import re
from datetime import datetime

SOURCE_DIR = "newblogs"
DEST_DIR = "content/blogs"
IMAGE_DIR = "/images/blog"
FALLBACK_IMAGES = [
    "/images/care-family.png",
    "/images/blog/blog1.png",
    "/images/blog/blog2.png",
    "/images/blog/blog3.png",
    "/images/blog/blog4.png",
    "/images/blog/blog5.png"
]

def clean_title(title):
    return title.replace("**", "").replace("##", "").strip()

def extract_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    title = "Untitled Blog Post"
    excerpt = ""
    body_lines = []
    
    # Simple parsing logic
    for i, line in enumerate(lines):
        line = line.strip()
        if not line: continue
        
        # First non-empty line is title if it starts with #
        if title == "Untitled Blog Post" and line.startswith("#"):
            title = clean_title(line)
            continue
        
        # First paragraph is excerpt
        if not excerpt and len(line) > 50 and not line.startswith("#") and not line.startswith("*"):
            excerpt = line.replace("**", "")
            
        body_lines.append(lines[i]) # Keep original line with newlines

    return title, excerpt, "".join(body_lines).strip()

def main():
    if not os.path.exists(DEST_DIR):
        os.makedirs(DEST_DIR)

    # Get start index
    existing_blogs = [f for f in os.listdir(DEST_DIR) if f.endswith(".md")]
    start_index = len(existing_blogs) + 1 # Start after existing. 
    # Current existing: blog1..blog6. So len is 6. Next is 7.
    
    # But files in newblogs are Blogs(1)..Blogs(8).
    # We want blog7..blog14.
    
    new_files = sorted([f for f in os.listdir(SOURCE_DIR) if f.endswith(".md")])
    
    print(f"Found {len(new_files)} new blogs to import.")
    
    for i, filename in enumerate(new_files):
        source_path = os.path.join(SOURCE_DIR, filename)
        dest_index = start_index + i
        dest_filename = f"blog{dest_index}.md"
        dest_path = os.path.join(DEST_DIR, dest_filename)
        
        title, excerpt, content = extract_content(source_path)
        
        # Assign image cyclically
        image = FALLBACK_IMAGES[i % len(FALLBACK_IMAGES)]
        
        # Identify tags/category simply
        category = "Health & Wellness"
        tags = ["Telehealth", "Healthcare", "MediMan"]
        if "Chronic" in title: tags.append("Chronic Care")
        if "Kids" in title or "Children" in title: tags.append("Pediatrics")
        if "Mental" in title: tags.append("Mental Health")
        if "Women" in title: tags.append("Women's Health")
        if "Elderly" in title: tags.append("Elderly Care")
        
        date = datetime.now().strftime("%Y-%m-%d")
        
        frontmatter = f"""---
title: "{title}"
date: "{date}"
author: "MediMan Team"
image: "{image}"
excerpt: "{excerpt[:200]}..."
category: "{category}"
tags: {tags}
---

"""
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(frontmatter + content)
            
        print(f"Created {dest_path}")

if __name__ == "__main__":
    main()
