# Wasmer Deployment Diagnosis

## Root cause from the supplied deployment log

Wasmer’s automatic static Node.js detection identified the project as Vite with an Express server and pnpm. Its generated build recipe copied only `pnpm-lock.yaml` before running `pnpm install --frozen-lockfile`. Because `package.json` was not copied until a later Docker step, pnpm stopped with `ERR_PNPM_NO_PKG_MANIFEST`.

The failure happens **before** the project’s own build script runs. It is therefore an auto-generated build-recipe issue, not a React, Vite, TypeScript or application-code compilation error.

## Official Wasmer React guide

Wasmer’s React static-site guide states that a React project should use a build output directory other than `public`, and that the configured static public directory must match the Vite build output. The current project builds to `dist/public` in `vite.config.ts`, so a Wasmer static configuration must target that same directory.

Source: [Wasmer React Static Site guide](https://docs.wasmer.io/edge/guides/react-static-site/), accessed 24 August 2026.

## Proposed direction

Add an explicit Wasmer static-site configuration so the platform uses a declared static output instead of relying on the broken inferred Anybuild recipe. The configuration will keep the existing `pnpm build` command and `dist/public` output unchanged.

## Selected implementation

The project now contains a root `Anybuild` manifest using Anybuild’s documented `node-static` provider. The key safeguard is `node_install_requires_all_files = True`: Anybuild’s own Node provider source shows that this switches installation from lockfile-only staging to source staging before `pnpm install`. The manifest also explicitly sets Vite, pnpm, Node 22 and `dist/public`.

Wasmer’s `_redirects` conversion accepts only 301 and 302 rules, so a Netlify-style `200` SPA rewrite would be rejected. Direct nested-route behaviour should therefore be tested on Wasmer after deployment and configured in serving settings if needed.
