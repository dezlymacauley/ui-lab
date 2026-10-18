# Bun TypeScript Frontend Project Setup Guide
_______________________________________________________________________________

Create the project directory
```bash
mkdir bun-typescript-frontend-project
```
_______________________________________________________________________________

Enter the project directory
```bash
cd bun-typescript-frontend-project 
```
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

Initialize the project
```bash
bun init -m -y
```
_______________________________________________________________________________

Create the rest of the project structure
```bash
touch .gitignore bunfig.toml

mkdir src
touch src/index.html 
touch src/styles.css
touch src/index.ts
```
_______________________________________________________________________________

Add this to the `.gitignore` file
```gitignore
# Project Dependencies
node_modules

# Build Output
dist
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

Replace the contents of `package.json` file with this
```json
{
  "scripts": {
    "build": "bun build ./src/index.html --outdir dist",
    "clean": "rm -rf dist node_modules",
    "dev": "bun src/index.html",
    "format": "bun fmt",
    "setup": "bun run clean && bun install"
  },
  "devDependencies": {
    "@types/bun": "latest"
  }
}
```
_______________________________________________________________________________

Replace the contents of `tsconfig.json` with this
```json
{
  "compilerOptions": {
    // Environment setup & latest features
    "lib": ["ESNext", "DOM"],
    "target": "ESNext",
    "module": "Preserve",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,
    "types": ["bun"],

    // Bundler mode
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    // Best practices
    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    // Some stricter flags (disabled by default)
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noPropertyAccessFromIndexSignature": true
  }
}
```
_______________________________________________________________________________

Update the `mise.toml` file to look like this
```toml
[tools]
bun = "latest"
eza = "latest"
#______________________________________________________________________________

[tasks.build]
description = "📦 bun run build | alias = build"
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

Replace the contents of the `src/index.html` file with this
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bun TypeScript Frontend Project</title>
    <link rel="stylesheet" href="./styles.css" />
    <script type="module" src="./index.ts"></script>
  </head>
  <body>
    <main>
      <h1>Bun TypeScript Frontend Project</h1>
      <p id="message"></p>
    </main>
  </body>
</html>
```
_______________________________________________________________________________

Replace the contents of the `src/styles.css` file with this
```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: system-ui, sans-serif;
  background: #111;
  color: #eee;
}

main {
  text-align: center;
}
```
_______________________________________________________________________________

Replace the contents of the `src/index.ts` file with this
```typescript
const message = document.querySelector<HTMLParagraphElement>("#message");

if (!message) {
  throw new Error("Missing #message element");
}

message.textContent = "Running on Bun 🍞";
```
_______________________________________________________________________________

To check that the project can be built
```bash
build
```
_______________________________________________________________________________

To run the project, open a new terminal an run this command.
```bash
dev
```
_______________________________________________________________________________
