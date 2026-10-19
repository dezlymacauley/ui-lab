<script lang="ts">
  type ValidColor = "red" | "blue" | "purple";

  interface Props {
    // STEP: 1 => Add a question mark after the name of each field
    // to indicate that it is custom.

    userName?: string;
    messageColor?: ValidColor;
  }

  // STEP: 2 => Set the default values

  let { userName = "Stranger", messageColor = "blue" }: Props = $props();
</script>

<p style="color: {messageColor};">Greetings {userName}</p>
