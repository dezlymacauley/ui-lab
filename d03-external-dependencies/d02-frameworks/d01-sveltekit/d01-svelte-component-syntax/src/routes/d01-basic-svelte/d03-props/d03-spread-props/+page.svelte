<script lang="ts">

  // This allows you to get the data types of the props declared
  // in a component.
  import type { ComponentProps } from "svelte";
  import PlayerInfoCard from "./PlayerInfoCard.svelte";

  const playerInfoData: ComponentProps<typeof PlayerInfoCard> = {
    displayName: "Dezly Macauley",
    userName: "dezlymacauley",
    highScore: 38232
  }

</script>

<!--
  This `...` is the spread operator.
  It is a shorthand that lets you fill in prop fields of a component,
  by passing in an object where each of the fields matches the values.
-->
<PlayerInfoCard {...playerInfoData} />
