<script lang="ts">
  let elapsed: number = $state(0);
  let interval: number = $state(1000);

  function doubleInterval() {
    // This is a shorthand for:
    // interval = interval * 2
    interval *= 2;
  }

  function halveInterval() {
    // This is a shorthand for:
    // interval = interval / 2
    interval /= 2;
  }

  $effect(() => {
    const id = setInterval(() => {
      elapsed += 1;
    }, interval);

    return () => {
      clearInterval(id);
    };

  });
</script>

<button onclick={halveInterval}>speed up</button>
<button onclick={doubleInterval}>slow down</button>

<p>elapsed: {elapsed} milliseconds</p>
<p>interval: {interval} milliseconds</p>
