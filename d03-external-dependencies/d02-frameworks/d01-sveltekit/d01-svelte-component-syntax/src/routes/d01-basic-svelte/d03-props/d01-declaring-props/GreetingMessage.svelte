<script lang="ts">

  // This is a `string union type`.
  // enums are not supported inside of Svelte
  type ValidColor = "red" | "blue" | "purple";

  interface Props {
    userName: string;
    messageColor: ValidColor;
  }

  let { userName, messageColor}: Props = $props();
</script>

<p style="color: {messageColor};">Greetings {userName}</p>
