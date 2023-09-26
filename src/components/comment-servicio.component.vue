<script setup>
import { ref } from "vue";
const comments = ref([]);
const commentText = ref("");

const addComment = () => {
  if (commentText.value) {
    comments.value.push({
      name: "Maria Becerra",
      text: commentText.value,
      date: new Date(),
    });
    commentText.value = "";
  }
};
</script>

<template>
  <div class="input-btn">
    <pv-inputText
        type="text"
        v-model="commentText"
        class="comment"
        placeholder="Comparte tu experiencia.."
        @keyup.enter="addComment"
    />
    <pv-button icon="pi pi-send" @click="addComment"/>
  </div>
  <div class="user-comment" v-for="(comment, index) in comments" :key="index">
    <div class="header flex align-items-center">
      <div>
        <pv-avatar icon="pi pi-user" class="mr-2" size="large" shape="circle"/>
      </div>
      <div>
        <p class="name">{{ comment.name }}</p>
        <p class="date">{{ comment.date }}</p>
      </div>
    </div>
    <p class="text">{{ comment.text }}</p>
  </div>
</template>

<style scoped>
.input-btn {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  & button {
    background-color: var(--primary-color);
    color: white;
    border-radius: 20px;
    padding: 0.8rem 2em;
    border: none;
    font-size: 0.8em;
    &:hover {
      background-color: var(--font-color-bg-light);
      color: white;
    }
  }
}
.comment {
  border-radius: 20px;
  width: 100%;
}
.user-comment {
  margin-top: 1.5rem;
  .header {
    .name {
      font-weight: bold;
      font-size: 1rem;
    }
    .date {
      font-size: 0.8rem;
    }
  }
  .text {
    padding-top: 1rem;
  }
}
</style>