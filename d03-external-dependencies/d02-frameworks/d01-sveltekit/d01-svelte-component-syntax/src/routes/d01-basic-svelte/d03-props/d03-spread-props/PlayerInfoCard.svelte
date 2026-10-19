<script lang="ts">
  interface Props {
    displayName: string;
    userName: string;
    highScore: string;
  }

  let { displayName, userName, highScore }: Props = $props();
</script>

<ul>
  <li>{displayName}</li>
  <li>{userName}</li>
  <li>{highScore}</li>
</ul>
