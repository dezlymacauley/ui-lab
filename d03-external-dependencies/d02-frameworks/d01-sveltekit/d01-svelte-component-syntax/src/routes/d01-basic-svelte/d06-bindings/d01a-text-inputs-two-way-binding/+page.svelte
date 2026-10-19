<!--
  ABOUT: Two-Way Binding 

  You can create a two-way binding by changing
  `value={userName}` to `bind:value={userName}`

  Now this becomes a two-way binding.
  1. Updating the value of `userName` in the program will update the DOM
  2. Updating the value of `userName` in the DOM via the input box,
  will update the value of `userName` in the program.
-->

<script lang="ts">
 let userName: string = $state("world");
</script>

<input type="text" bind:value={userName}>

<p>Hello {userName}!</p>
