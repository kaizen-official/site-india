export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://www.digitalsolution360.in/sitemap.xml",
    host: "https://www.digitalsolution360.in",
  };
}
