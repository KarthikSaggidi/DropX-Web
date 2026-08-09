/**
 * Resolves a file in Vite's public directory using the deployment base path.
 *
 * This keeps public assets working when the site is hosted under a path such
 * as https://example.com/dropxcorp/ instead of directly at the domain root.
 */
export function assetPath(path) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\/+/, '')}`;
}
