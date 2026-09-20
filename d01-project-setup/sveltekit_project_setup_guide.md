# SvelteKit Project Setup Guide
_______________________________________________________________________________

Create the project directory and enter it
```bash
mkdir sveltekit-project && cd sveltekit-project
```
_______________________________________________________________________________

Initialize the project
```bash
bunx sv create .
```
_______________________________________________________________________________

Select `SvelteKit minimal`
```
◆  Which template would you like?
│  ● SvelteKit minimal (barebones scaffolding for your new app)
│  ○ SvelteKit demo
│  ○ Svelte library
└
```
_______________________________________________________________________________

Select `Add type checking with TypeScript`
```
◆  Add type checking with TypeScript?
│  ● Yes, using TypeScript syntax
│  ○ Yes, using JavaScript with JSDoc comments
│  ○ No
└
```
_______________________________________________________________________________

Select `prettier`
```
◆  What would you like to add to your project? (use arrow keys / space bar)
│  ◼ prettier (formatter - https://prettier.io)
│  ◻ eslint
│  ◻ vitest
│  ◻ playwright
│  ◻ tailwindcss
│  ◻ sveltekit-adapter
│  ◻ drizzle
│  ◻ better-auth
│  ◻ mdsvex
│  ◻ paraglide
│  ◻ storybook
│  ◻ ai-tools
│  ◻ experimental
└
```
_______________________________________________________________________________

Select `bun`
```
◆  Detected package managers. Which one should we use to install dependencies?
│  ○ None
│  ○ npm
│  ● bun
└
```
_______________________________________________________________________________

This is the initial structure
```
.svelte-kit/
.vscode/
node_modules/
src/
static/
.gitignore
.npmrc
.prettierignore
README.md
bun.lock
package.json
prettier.config.js
tsconfig.json
vite.config.ts
```
_______________________________________________________________________________

Use `mise` to ensure that the project is using the latest version of Bun
```bash
mise use bun@latest
```
_______________________________________________________________________________

Use `mise` to ensure that the project is using the latest version of eza
```bash
mise use eza@latest
```
_______________________________________________________________________________

After this, you should have a `mise.toml` file that looks like this
```toml
[tools]
bun = "latest"
eza = "latest"
```
_______________________________________________________________________________

Update the `mise.toml` file to look like this
```toml
[env]
BROWSER = "chromium"

[tools]
bun = "latest"
eza = "latest"

[tasks.tree]
description = "🌲 Display a tree diagram overview of the project structure"
quiet = true
run = """
eza --tree --git-ignore
"""
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
```
_______________________________________________________________________________

I use Neovim, so I don't need the `.vscode` directory
```bash
rm -rf .vscode
```
_______________________________________________________________________________

I'll be using Bun exclusively as my package manager so I'm going to delete 
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

Replace the contents of the `.prettierignore` file with this
```bash
# Package Manager Lock File
bun.lock

# README File
README.md
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
		"dev": "vite dev --open --port 6969",
		"build": "vite build",
		"preview": "vite preview --open --port 6969",
		"prepare": "svelte-kit sync || echo ''",
		"check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
		"lint": "prettier --check .",
		"format": "prettier --write .",
		"clean": "rm -rf .svelte-kit node_modules",
		"setup": "bun run clean && bun install && bun run build"
	},
```
_______________________________________________________________________________

Replace the contents of the `prettier.config.js` with this
```javascript
/** @type {import("prettier").Config} */
const config = {
	useTabs: false,
    tabWidth: 2,
	singleQuote: false,
	trailingComma: "none",
	printWidth: 80,
	plugins: ["prettier-plugin-svelte"],
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }]
};

export default config;
```

#### Note: 
- Don't remove the `/** @type {import("prettier").Config} */` 
comment at the top of the file.
_______________________________________________________________________________

Remove the comments at the bottom of the `tsconfig.json` file.
```json
{
    "extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"rewriteRelativeImportExtensions": true,
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"moduleResolution": "bundler"
	}
}
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
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true
      },
      adapter: adapter()
    })
  ]
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
<h1>SvelteKit Project</h1>
```
_______________________________________________________________________________

Run this command to ensure that you project can be built successfully.
```bash
bun run build
```
_______________________________________________________________________________

### Starting the development server

To run the project, open a separate terminal and run this command.

```bash
bun run dev
```
_______________________________________________________________________________
