export default function sitemap() {
  const baseUrl = "https://www.lnfleague.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fees-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fixtures-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/format`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
  ];
}
