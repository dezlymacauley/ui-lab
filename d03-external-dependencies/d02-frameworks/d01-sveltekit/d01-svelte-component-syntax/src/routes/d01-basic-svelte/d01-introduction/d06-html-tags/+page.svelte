<script lang="ts">
  let htmlContent: string = `
    <h2>Welcome to my website!</h2>
    <p>This is a <strong>simple example</strong> of HTML inside a string.</p>
  `;
</script>

<!--
  Only use `@html` to render internal content that is secure.
  Do not use it to render content submitted by the user,
  or content from an external source.
-->
<p>{@html htmlContent}</p>
