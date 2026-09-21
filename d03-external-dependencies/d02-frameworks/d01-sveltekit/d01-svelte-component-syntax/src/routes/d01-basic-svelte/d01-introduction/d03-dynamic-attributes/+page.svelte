<script lang="ts">
  let src: string = "/king_and_queen.png";
  let alt: string = "A king and a queen";
</script>

<!-- Method 1: Manually adding the attributes -->
<img src="/king_and_queen.png" alt="A king and a queen">

<!-- Method 2: Dynamically adding the values of the attributes -->
<img src={src} alt={alt}>

<!-- 
  Method 3: The shorthand syntax 

  If the name of the attribute and the value are the same,
  you can use the shorthand syntax
-->
<img {src} {alt}>
