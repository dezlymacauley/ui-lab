// Use the file extension `.svelte.ts` when you want 
// to use the `$state()` rune in a TypeScript file

interface Counter {
  count: number;
}

export const counter: Counter = $state({
  count: 0,
});
