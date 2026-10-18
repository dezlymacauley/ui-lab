<script lang="ts">
  let counter: number = $state(0);

  function increaseCounter() {
    counter++;
  }

</script>

<p>Times Clicked: {counter}</p>

<button onclick={increaseCounter}>Click Me</button>
