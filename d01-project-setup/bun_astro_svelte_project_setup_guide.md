# Bun Astro Svelte Project Setup Guide
_______________________________________________________________________________

Create the project directory
```bash
mkdir bun-astro-svelte-project
```
_______________________________________________________________________________

Enter the project directory
```bash
cd bun-astro-svelte-project
```
_______________________________________________________________________________

Initialize the project
```bash
bun create astro .
```
_______________________________________________________________________________

Select the following options:

- How would you like to start your new project? `Use minimal (empty) template`
- Install dependencies? (recommended) `No`
- Initialize a new git repository? `No`

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

Now the project has been Initialized, install the dependencies with `bun`
```bash
bun install
```
_______________________________________________________________________________

Add Svelte to the project
```bash
bun run astro add svelte --yes
```
_______________________________________________________________________________

Delete the `.vscode` directory
```bash
rm -rf .vscode
```
_______________________________________________________________________________

Delete the `AGENTS.md` file
```bash
rm AGENTS.md
```
_______________________________________________________________________________

Create a `bunfig.toml` file.
```bash
touch bunfig.toml
```
_______________________________________________________________________________

Replace the content of the `.gitignore` with this
```gitignore
# Build Output
.astro/
dist/

# Project Dependencies
node_modules/
```
_______________________________________________________________________________

Clear the contents of the `README.md` file
```bash
truncate -s 0 README.md
```
_______________________________________________________________________________

Add this to the `bunfig.toml` file
```bash
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

Open the `package.json` file, and replace the `scripts` section with this
```json
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
	"format": "bun fmt",
	"clean": "rm -rf .astro .dist node_modules",
	"setup": "bun run clean && bun install && bun run build"
	},
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

Replace the contents of `src/pages/index.astro` with this
```astro
---
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<link rel="icon" href="/favicon.ico" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<title>Home</title>
	</head>
	<body>
    <h1>Bun Astro Svelte Project</h1>
	</body>
</html>
```
_______________________________________________________________________________

Create a directory for Svelte components
```bash
mkdir -p src/svelte-components
```
_______________________________________________________________________________

Create a Svelte component
```bash
touch src/svelte-components/Counter.svelte
```

Add this to the `src/svelte-components/Counter.svelte` file
```svelte
<script lang="ts">
  let counter: number = $state(0);

  function increaseCounter() {
    counter++;
  }

</script>

<p>Times Clicked: {counter}</p>

<button onclick={increaseCounter}>Click Me</button>
```
_______________________________________________________________________________

Create another astro route
```bash
touch src/pages/svelte-example.astro
```

Add this to the `src/pages/svelte-example.astro` file to use the Svelte component
```svelte
---
import Counter from "../svelte-components/Counter.svelte";
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<title>Svelte Example</title>
	</head>
	<body>
    <h1>Svelte Example</h1> 
    <Counter client:load />
	</body>
</html>
```
_______________________________________________________________________________

Check that the project can be built successfully, run this command
```bash
build
```
_______________________________________________________________________________

To run the project, open a separate terminal and run this command
```bash
dev
```
_______________________________________________________________________________
