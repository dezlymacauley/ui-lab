# Flat route structure
_______________________________________________________________________________

- The home page of your website is `src/pages/index.astro`

- To add a new page, create a `.astro`, or `.html`, or `.md` file 
to the `src/pages` directory
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

This is `src/pages/news.html` (http://localhost:4321/news)
```html
<h1>News</h1>
```

##### Note:
- HTML files don't get hot reloading
- I'd avoid using them since `.astro` files support html anyways.
_______________________________________________________________________________
