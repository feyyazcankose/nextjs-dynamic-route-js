import { defaultLang } from "../language";
import { routers } from "./router";

export function urlParamsToObject(url) {
  if (!url.length) return null;
  const params = url.split("&");
  const result = {};

  for (const param of params) {
    const [key, value] = param.split("=");
    result[key] = value;
  }

  return result;
}

export const findRoute = (url) => {
  let bestMatch = null;
  const urlSegments = url.split("?")[0].split("/") ?? "";
  const queries = url.split("?")[1] ?? "";

  if (urlSegments[1] === defaultLang) {
    urlSegments.splice(1, 1);
  }
  for (const route of routers) {
    const routeSegments = route.path.split("/");
    if (routeSegments.length === urlSegments.length) {
      const params = {};
      let isMatch = true;
      for (let i = 0; i < routeSegments.length; i++) {
        if (
          routeSegments[i] === urlSegments[i] ||
          routeSegments[i].startsWith(":")
        ) {
          if (routeSegments[i].startsWith(":")) {
            const paramName = routeSegments[i].substring(1);
            params[paramName] = urlSegments[i];
          }
        } else {
          isMatch = false;
          break;
        }
      }

      if (isMatch) {
        if (
          !bestMatch ||
          routeSegments.length > bestMatch.route.path.split("/").length
        ) {
          bestMatch = { route, params, query: urlParamsToObject(queries) };
        }
      }
    }
  }

  return bestMatch;
};
