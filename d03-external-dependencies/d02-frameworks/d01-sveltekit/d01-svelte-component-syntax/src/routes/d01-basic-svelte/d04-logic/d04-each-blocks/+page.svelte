<script lang="ts">

  const colors: Array<string> = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  let selectedColor = $state(colors[0]);
</script>

<h1 style="color: {selectedColor}">Pick a colour</h1>

<div>
  <!-- 
    This will create a button for each element in the `colors` list

    NOTE: Use this only when you have a fixed list of element 
    that does not change, during the runtime of the program

  -->
  {#each colors as element}
    <button
      style="background: {element}"
      aria-label={element}
      aria-current={selectedColor === element}
      onclick={() => (selectedColor = element)}
    ></button>
  {/each}
</div>

<style>
  h1 {
    font-size: 2rem;
    font-weight: 700;
    transition: color 0.5s;
  }

  div {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    max-width: 400px;
  }

  button {
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--color, #fff);
    transform: translate(-2px, -2px);
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
    transition: all 0.1s;
    color: black;
    font-weight: 700;
    font-size: 2rem;
  }

  button[aria-current="true"] {
    transform: none;
    filter: none;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
  }
</style>
