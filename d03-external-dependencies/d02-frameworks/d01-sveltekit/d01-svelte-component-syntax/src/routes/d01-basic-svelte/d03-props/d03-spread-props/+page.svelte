<script lang="ts">
  import PlayerInfoCard from "./PlayerInfoCard.svelte";
  import type { PlayerInfoCardProps } from "./player_info_card_types";

  const playerInfo: PlayerInfoCardProps = {
    displayName: "Dezly Macauley",
    userName: "dezlymacauley",
    highScore: 38232,
  };
</script>

<PlayerInfoCard {...playerInfo} />
