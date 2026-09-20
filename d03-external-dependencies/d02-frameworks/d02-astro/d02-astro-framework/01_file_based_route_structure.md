# File-base route structure
_______________________________________________________________________________

- The home page of your website is `src/pages/index.astro`

- To add a new page, create a `.astro`, or `.html`, or `.md` file 
to the `src/pages` directory

```
├── src
│   └── pages
│       ├── about.astro
│       ├── index.astro
│       └── trending-posts.md
```
_______________________________________________________________________________

This is `src/pages/index.astro` (http://localhost:4321/)
```astro
---

---
<h1>Home</h1>
```
_______________________________________________________________________________

This is `src/pages/about.astro` (http://localhost:4321/about)
```astro
---

---
<h1>About</h1>
```
_______________________________________________________________________________

This is `src/pages/trending-posts.md` (http://localhost:4321/trending-posts)
```markdown
# Trending Posts
```
_______________________________________________________________________________
