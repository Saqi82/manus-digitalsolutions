# Wasmer deployment configuration

## What caused the original failure

Wasmer’s generated Anybuild plan copied `pnpm-lock.yaml` and then invoked `pnpm install --frozen-lockfile` before copying `package.json`. pnpm correctly stopped with `ERR_PNPM_NO_PKG_MANIFEST`. This is a generated-plan problem rather than an application build error.

## What this project now provides

The root-level `Anybuild` manifest explicitly configures the project as a **Vite static site**. It pins the build path to `dist/public`, uses Node 22 and pnpm, and sets `node_install_requires_all_files = True`. That causes Anybuild to stage the complete source tree—including `package.json`—before dependency installation.

The manifest is based on Wasmer’s documented Node-static Vite manifest structure. It intentionally does not use the project’s Express deployment scaffold because Wasmer should publish the generated static frontend, not run the development server.

## Wasmer Git deployment settings

Connect the `main` branch of `Saqi82/manus-digitalsolutions` to the Wasmer app. Once this commit is present, trigger a new deployment. Wasmer should detect the repository `Anybuild` file and use it rather than generating the faulty inferred plan.

| Setting | Expected value |
|---|---|
| Project type | Vite static site / Node static |
| Node runtime | 22 |
| Package manager | pnpm |
| Build command | `pnpm run build` |
| Static output | `dist/public` |

## Important route note

The current website uses client-side routing. Verify direct loads of a nested route such as `/comparisons/xero-vs-quickbooks-uk/` after deployment. If Wasmer returns a 404 on direct nested URLs, configure its static web server with an `index.html` fallback in the app’s serving settings or deploy through a host configuration that supports SPA rewrites. The Anybuild `_redirects` conversion supports only HTTP 301 and 302 redirects, not a 200-status SPA rewrite.

## References

1. [Wasmer React Static Site guide](https://docs.wasmer.io/edge/guides/react-static-site/)
2. [Wasmer Git deployment guide](https://docs.wasmer.io/edge/git/)
3. [Wasmer Anybuild Vite React manifest example](https://github.com/wasmerio/anybuild/tree/main/examples/nodestatic-vite-react)
