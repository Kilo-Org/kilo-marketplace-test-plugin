# kilo-marketplace-test-plugin

A minimal test fixture plugin for Kilo.

## What it does

The package exposes two plugin entrypoints that match the Kilo plugin contract:

- `./server` (`server.js`): default-exports an object with `id` and an async `server()` function. When loaded it appends an ISO timestamp to `loaded.log` next to the module.
- `./tui` (`tui.js`): default-exports an object with `id` and an async `tui()` function. When loaded it appends an ISO timestamp to `tui-loaded.log` next to the module.

The marker files make runtime loading verifiable without changing any other state.

## Installing through the Kilo Marketplace

Install this repository through the Kilo Marketplace as a git-source plugin. The catalog
entry uses the spec `git:github.com/Kilo-Org/kilo-marketplace-test-plugin`. The Marketplace
clones the repository, reads `package.json`, and registers the `./server` and `./tui`
entrypoints declared in `exports`. A local install can also reference the directory
directly with a `file://` URL.

## Test fixture

This package is a test fixture for verifying git-source plugin installation. It is not
published to npm and is not meant for production use. It exists only to confirm that
plugin resolution, configuration, and loading work end to end.

