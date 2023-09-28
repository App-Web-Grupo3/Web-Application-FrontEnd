<script>
export default {
  name: "FooterComponent"
}
</script>

<template>
  <footer class="footer">
    <p class="footer__paragraph">&copy; 2023 Unique Trip App</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #222;
  text-align: center;
  padding: 20px;
  width: 100%;
  margin-top: 5em;
}

.footer__paragraph {
  color: white;
}
</style>