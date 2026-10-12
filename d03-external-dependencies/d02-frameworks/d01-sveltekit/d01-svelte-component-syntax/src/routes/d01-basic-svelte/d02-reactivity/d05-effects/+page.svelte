<script lang="ts">
  let list_of_numbers: Array<number> = $state([1, 2, 3, 4]);
  let total: number = $derived(list_of_numbers.reduce((t, n) => t + n, 0));

  function addNumber() {
    const newNumber = list_of_numbers.length + 1;
    list_of_numbers.push(newNumber);

    //_________________________________________________________________________

    // EXAMPLE: 1 => $state.snapshot()

    // Use `$state.snapshot()` when you want to check the state of a variable
    // that is wrapped in a `$derived()` rune.
    // console.log($state.snapshot(list_of_numbers));

    //_________________________________________________________________________
  }

  // EXAMPLE: 2 => $inspect().with()

  // This will add a label so that it is easier to see in dev tools:
  // $inspect(list_of_numbers).with((type, value) => {
  //   console.log("list_of_numbers:", type, value);
  // });

  // EXAMPLE: 3 => $inspect() 
  
  // This will show a `stack trace` so that you can see what 
  // caused the variable to update.
  $inspect(list_of_numbers);

</script>

fffs

<p>{list_of_numbers.join(" + ")} = {total}</p>

<button onclick={addNumber}>Click Me</button>
