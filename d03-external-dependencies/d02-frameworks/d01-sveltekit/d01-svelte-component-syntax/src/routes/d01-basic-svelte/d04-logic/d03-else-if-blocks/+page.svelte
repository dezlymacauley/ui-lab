<script lang="ts">
	let count: number = $state(0);

	function increment() {
		count += 1;
	}
</script>

<button onclick={increment}>
	Times Clicked: {count}
</button>

{#if count > 10}
	<p>{count} is greater than 10</p>
{:else}
  <p>{count} is less than 10</p>
{/if}
