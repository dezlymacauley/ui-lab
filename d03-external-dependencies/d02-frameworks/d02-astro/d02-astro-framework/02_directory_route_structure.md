# Directory-based route structure
_______________________________________________________________________________

Create a directory in `src/pages` and add an `index` file that
end with `.astro` or `.md`

```
├── src
│   └── pages
│       ├── about
│       │   └── index.astro
│       ├── index.astro
│       └── trending-posts
│           └── index.md
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

This is `src/pages/trending-posts/index.md` (http://localhost:4321/trending-posts)
```markdown
# Trending Posts
```
_______________________________________________________________________________
