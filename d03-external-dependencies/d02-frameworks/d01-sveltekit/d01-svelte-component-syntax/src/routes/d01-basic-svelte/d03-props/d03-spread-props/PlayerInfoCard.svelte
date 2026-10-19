<script lang="ts">
  import type { PlayerInfoCardProps } from "./player_info_card_types";
  let { displayName, userName, highScore }: PlayerInfoCardProps = $props();
</script>

<ul>
  <li>{displayName}</li>
  <li>{userName}</li>
  <li>{highScore}</li>
</ul>
