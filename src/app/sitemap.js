import fs from "fs";
import path from "path";

/**
 * Recursively read routes from app directory
 */
function getRoutes(dir, baseRoute = "") {
  let routes = [];

  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.name.startsWith("_")) continue;
    if (file.name === "api") continue;
    if (file.name === "components") continue;

    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      routes = routes.concat(
        getRoutes(fullPath, `${baseRoute}/${file.name}`)
      );
    }

    if (file.name === "page.js") {
      routes.push(baseRoute || "/");
    }
  }

  return routes;
}

export default function sitemap() {
  const appDir = path.join(process.cwd(), "src/app");

  const routes = getRoutes(appDir);

  const baseUrl = "https://www.lnfleague.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
  }));
}
