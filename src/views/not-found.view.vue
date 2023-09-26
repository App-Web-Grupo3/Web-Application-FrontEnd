<script>
export default {
  name: "NotFoundComponent"
}
</script>

<template>
  <div class="not-found">
    <h2 class="not-found__title">Sorry, this page isn't available.</h2>
    <p class="not-found__paragraph">The link you followed may be broken, or the page may have been removed. Go back to
      UNIQUETRIP</p>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
}

.not-found__title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.not-found__paragraph {
  font-size: 1.2rem;
  color: #777;
}
</style>