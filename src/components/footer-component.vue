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
  bottom: 0;
  text-align: center;
  padding: 20px;
  width: 100%;
  margin-top: 5em;
}
@media (max-width: 768px) {
  footer {
    position: static;
  }
}
.footer__paragraph {
  color: white;
}
</style>