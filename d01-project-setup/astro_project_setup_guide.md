# Astro Project Setup Guide
_______________________________________________________________________________

Create the project directory and enter it
```bash
mkdir astro-project && cd astro-project
```
_______________________________________________________________________________

Initialize the project
```bash
bun create astro .
```
_______________________________________________________________________________

Select `use minimal (empty) template`
```
  tmpl   How would you like to start your new project?
         ○ A basic, helpful starter project
         ○ Use blog template
         ○ Use docs (Starlight) template
         ● Use minimal (empty) template
```
_______________________________________________________________________________

Select `No`
```
  deps   Install dependencies? (recommended)
         ○ Yes  ● No
```

#### Note:
- I selected `No` because when using Bun, sometimes this fails.
_______________________________________________________________________________

Select `No`
```
   git   Initialize a new git repository? (optional)
         ○ Yes  ● No
```
_______________________________________________________________________________

Now the project has been Initialized, install the dependencies with `bun`
```bash
bun install
```
_______________________________________________________________________________

For formatting: Add prettier, and the prettier plugin for Astro
```bash
bun install -d prettier
bun install -d prettier-plugin-astro
```
_______________________________________________________________________________

Create a `.prettierrc` file
```bash
touch .prettierrc
```
_______________________________________________________________________________

Add this to the `.prettierrc` file
```json
{
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": false,
  "trailingComma": "none",
  "printWidth": 80,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": { "parser": "astro" }
    }
  ]
}
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

Check that the project can be built
```bash
bun run build
```
_______________________________________________________________________________

Open a seperate terminal and run this command to view the website
```bash
bun run dev
```
_______________________________________________________________________________
