<script lang="ts">

  interface PlayerInfoCardProps {
    displayName: string;
    userName: string;
    highScore: number;
  }

  let { displayName, userName, highScore }: PlayerInfoCardProps = $props();
</script>

<ul>
  <li>{displayName}</li>
  <li>{userName}</li>
  <li>{highScore}</li>
</ul>
