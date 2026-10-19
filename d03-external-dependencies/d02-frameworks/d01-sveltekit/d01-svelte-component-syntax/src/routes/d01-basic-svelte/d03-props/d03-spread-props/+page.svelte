<script lang="ts">
  import PlayerInfoCard from "./PlayerInfoCard.svelte";

  const playerInfo = {
    displayName: "Dezly Macauley",
    userName: "dezlymacauley",
    highScore: 38232,
  };
</script>

<PlayerInfoCard {...playerInfo} />
