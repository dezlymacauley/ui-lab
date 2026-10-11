<script lang="ts">
  let count: number = $state(0);

  function increaseCount() {
    count++;
  }
</script>

<p>count is set to {count}</p>

<button onclick={increaseCount}>Click Me</button>
