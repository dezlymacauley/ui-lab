<script lang="ts">
  let list_of_numbers: Array<number> = $state([1, 2, 3, 4]);

  function addNumber() {
    const newNumber = list_of_numbers.length + 1;
    list_of_numbers.push(newNumber);
  }

</script>

<p>{list_of_numbers.join(" + ")} = ...</p>

<button onclick={addNumber}>Click Me</button>
