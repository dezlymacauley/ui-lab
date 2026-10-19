<!--
  ABOUT: One-Way Binding 

  The default behavior for data flow in Svelte, is a one-way binding.

  In simple terms, this means that data only flows in one direction:
  From the variables in the Svelte file, to the HTML elements the DOM.

  A one-way binding means that the variables in a Svelte file 
  can update the value of elements the the browser, 
  but changing the value of elements in the browser, 
  will not update the variables in a Svelte file.
-->

<script lang="ts">
 let name: string = $state("world");
</script>

<input type="text" value={name}>

<p>Hello {name}!</p>
