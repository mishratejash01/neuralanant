import { MetadataRoute } from 'next'
// Import your Supabase client if you want to generate dynamic career URLs
// import { createClient } from '@/utils/supabase/server' 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yourdomain.com' // Replace with your actual domain

  // Define your static routes
  const staticRoutes = [
    '',
    '/about',
    '/technology',
    '/careers',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  /* // OPTIONAL: Fetch dynamic routes from Supabase (e.g., job postings)
  const supabase = createClient()
  const { data: jobs } = await supabase.from('jobs').select('id')
  
  const dynamicRoutes = (jobs || []).map((job) => ({
    url: `${baseUrl}/careers/${job.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  */

  return [
    ...staticRoutes,
    // ...dynamicRoutes
  ]
}
