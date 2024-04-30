export default async function sitemap() {
    const routearray = ['https://abhirupkumar.vercel.app', 'https://abhirupkumar.vercel.app/projects', 'https://abhirupkumar.vercel.app/contact']

    const routes = routearray.map((prod) => ({
        url: `${prod}`,
        lastModified: new Date().toISOString(),
    }));


    return [...routes];
}