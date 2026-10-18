# Bun SvelteKit Project Setup Guide
_______________________________________________________________________________

Create the project directory
```bash
mkdir bun-sveltekit-project
```
_______________________________________________________________________________

Enter the project directory
```bash
cd bun-sveltekit-project
```
_______________________________________________________________________________

Initialize the project
```bash
bunx sv create .
```
_______________________________________________________________________________

Select the following options:

- Which template would you like? `SvelteKit minimal`

- Add type checking with TypeScript? `Yes, using TypeScript syntax`

- What would you like to add to your project? `none`

- Detected package managers. 
Which one should we use to install dependencies? `bun`
_______________________________________________________________________________

Use `mise` to ensure that the project is using the latest version of bun
```bash
mise use bun@latest
```
_______________________________________________________________________________

Upgrade to canary to use `Bun 1.4.4` which has the `bun fmt` command
```bash
bun upgrade --canary
```
_______________________________________________________________________________

Use `mise` to ensure that the project is using the latest version of eza
```bash
mise use eza@latest
```
_______________________________________________________________________________

Update the `mise.toml` file to look like this
```toml
[tools]
bun = "latest"
eza = "latest"
#______________________________________________________________________________

[tasks.build]
description = "🔨 bun run build | alias = build"
quiet = true
run = """
bun run build
"""

[tasks.clean]
description = "🧼 bun run clean | alias = clean"
quiet = true
run = """
bun run clean
"""

[tasks.dev]
description = "🍞 bun run dev | alias = dev"
quiet = true
run = """
bun run dev
"""

[tasks.format]
description = "📜 bun run format | alias = format"
quiet = true
run = """
bun run format
"""

[tasks.setup]
description = "🚀 bun run setup | alias = setup"
quiet = true
run = """
bun run setup
"""

[tasks.structure]
description = "🌲 View the project structure"
quiet = true
run = """
eza --tree --git-ignore
"""
#______________________________________________________________________________

[shell_alias]
build = "mise run build"
clean = "mise run clean"
dev = "mise run dev"
format = "mise run format"
setup = "mise run setup"
structure = "mise run structure"
```
_______________________________________________________________________________

Create a `bunfig.toml` file
```bash
touch bunfig.toml
```
_______________________________________________________________________________

Add this to the `bunfig.toml` file
```toml
[run]
bun = true      
silent = true   

[fmt]
printWidth = 80
tabWidth = 2
useTabs	= false	
semi = true
singleQuote	= false	
trailingComma = "all"
```
_______________________________________________________________________________

Remove the `.vscode` directory
```bash
rm -rf .vscode
```
_______________________________________________________________________________

Remove the `.npmrc` file
the `.npmrc` file
```bash
rm -rf .npmrc
```
_______________________________________________________________________________

Replace the contents of the `.gitignore` file with this
```gitignore
# Build Output
.svelte-kit

# Project Dependencies
node_modules
```
_______________________________________________________________________________

Clear the contents of the `README.md` file
```bash
truncate -s 0 README.md
```
_______________________________________________________________________________

Replace the `scripts` section of your `package.json` with this
```json
	"scripts": {
		"dev": "vite dev",
		"build": "vite build",
		"preview": "vite preview",
		"prepare": "svelte-kit sync || echo ''",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
		"format": "bun fmt",
		"clean": "rm -rf .svelte-kit node_modules",
		"setup": "bun run clean && bun install && bun run build"
	},
```
_______________________________________________________________________________

Remove the comments from the  `vite.config.ts`
```typescript
import adapter from "@sveltejs/adapter-auto";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit({
      compilerOptions: {
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
      },
      adapter: adapter(),
    }),
  ],
});
```
_______________________________________________________________________________

Clear out the contents of the `src/lib/index.ts` file
```bash
truncate -s 0 src/lib/index.ts
```
_______________________________________________________________________________

Replace the contents of the `src/routes/+page.svelte` file with this
```svelte
<h1>Bun SvelteKit Project</h1>
```
_______________________________________________________________________________

Run this command to ensure that you project can be built successfully.
```bash
build
```
_______________________________________________________________________________
