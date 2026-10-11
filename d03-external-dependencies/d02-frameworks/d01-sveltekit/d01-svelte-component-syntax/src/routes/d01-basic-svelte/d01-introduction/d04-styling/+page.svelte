<script lang="ts">
  const custom_orange: string = "#FF3E00";
  const custom_purple: string = "#954EB6";
  const custom_yellow: string = "#B99859";
</script>
<!---->
<!-- <h1 style="--color: {custom_pink}">This is an h1</h1> -->

<!--
  Svelte shorthand
-->
<!-- <h2 style:--color={custom_pink}>This is an h2</h2> -->

<!--
  EXAMPLE: 1 => Styling an HTML element with a CSS rule from a style block. 
-->
<p class="paragraph-a">This is a paragraph A</p>


<!--
  EXAMPLE: 2 => Inline styling with a dynamic value.
-->
<p style="color: {custom_orange};">This is a paragraph B</p>

<!--
  EXAMPLE: 3 => Inline styling with a dynamic value. (Svelte shorthand)
-->
<p style:color={custom_purple}>This is a paragraph C</p>

<!--
  EXAMPLE: 4 => Dynamic value in a style block
-->
<p class="paragraph-d" style="--custom_color: {custom_yellow}">
    This is a paragraph D
</p>


<style>
  p {
    font-size: 1.5rem;
  }

  .paragraph-a {
    color: blue;
  }

  .paragraph-d {
    color: var(--custom_color);
  }
</style>
