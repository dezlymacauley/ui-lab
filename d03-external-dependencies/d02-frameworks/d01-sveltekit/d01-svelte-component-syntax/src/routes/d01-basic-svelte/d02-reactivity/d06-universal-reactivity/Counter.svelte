<script lang="ts">
  import { counter } from "./shared.svelte";

  function increaseCount() {
    counter.count += 1;
  }
</script>

<button onclick={increaseCount}>counter.count: {counter.count}</button>
