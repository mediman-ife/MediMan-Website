import { MetadataRoute } from 'next';
// In a real app, fetch dynamic doctor IDs here

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mediman.life';

  // Static routes
  const routes = ['', '/about', '/doctors', '/contact', '/faq'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add dynamic doctor routes here in future
  // const doctors = await getDoctors();
  // const doctorRoutes = doctors.map(...)

  return [...routes];
}
