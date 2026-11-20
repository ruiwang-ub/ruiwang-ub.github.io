import routes from "../config/routes.json";

export const visibleRoutes = routes.filter((route) => !route.hidden);

const visibleKeys = new Set(visibleRoutes.map((route) => route.key));

export function isVisible(key) {
  return visibleKeys.has(key);
}
