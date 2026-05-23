import type { APIRoute } from "astro";
import team from "../data/team.json";

const origin = "https://mjfarooq.github.io";
const base = "/mjfarooq.github.io-cyren";
const routes = ["", "research", "publications", "news", "team"];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split("T")[0];
  const slugs = team.members.filter((m) => m.slug).map((m) => "team/" + m.slug);
  const all = [...routes, ...slugs];
  const urls = all.map((r) => {
    const loc = `${origin}${base}/${r ? r + "/" : ""}`;
    const priority = r === "" ? "1.0" : "0.7";
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
