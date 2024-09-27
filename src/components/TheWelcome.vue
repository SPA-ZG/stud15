<template>
  <div>
    <div class="book-details">
      <img alt="logo" class="logo" src="@/assets/52c530a6-8d2a-4907-93db-af6a140ca479.jpg" />
      <div class="book-info">
        <h2>Informacije o knjizi:</h2>
        <ul>
          <li>Autor: {{ book.author }}</li>
          <li>Godina izdanja: {{ book.publishedYear }}</li>
          <li>Cijena knjige: {{ book.price }} €</li>
          <li>Nova cijena s popustom: {{ discountedPrice.toFixed(2) }} € ({{ discount }}% popusta)</li>
          <li>Opis: {{ book.description }}</li>
        </ul>
        <RouterLink to="/opis">Pogledajte detaljniji opis</RouterLink>
      </div>
    </div>

    <div class="user-input">
      <h3>Promijeni informacije:</h3>
      <label for="bookPublishedYear">Godina izdanja:</label>
      <input type="number" id="bookPublishedYear" v-model="book.publishedYear">
      <br>
      <label for="bookTitle">Cijena knjige:</label>
      <input type="text" id="bookTitle" v-model="book.price">
      <br>
      <label for="discount">Popust (%):</label>
      <input type="number" id="discount" v-model="discount">
      <br>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { RouterLink } from 'vue-router';

const book = ref({
  author: 'Joy Fielding',
  publishedYear: 1991,
  price: 6.62,
  description: 'Bez sjećanja, s novcem u džepu, preplašena žena u Bostonskim ulicama suočena je s misterioznim događajima.',
});

const discount = ref(0);
const initialBook = ref({ ...book.value });

const discountedPrice = computed(() => {
  const discountAmount = book.value.price * (discount.value / 100);
  return book.value.price - discountAmount;
});

watch(book, (newBook) => {
  initialBook.value = { ...newBook };
});
</script>

<style scoped>
input {
  width: 5vw;
  margin-left: 2vw;
}
.logo {
  margin-top: 4.5vh;
  margin-left: 5vw;
}

.book-details {
  display: flex;
}

.user-input {
  margin-left: 5vw;
  margin-top: 2vh;
  font-size: 18px;
}

.book-info {
  padding-left: 4vw;
  margin-top: 14.5vh;
  font-size: 20px;
}

.book-info h2 {
  margin-bottom: 10px;
}

.book-info ul {
  list-style-type: none;
  padding: 0;
}

.book-info li {
  margin-bottom: 5px;
}
</style>
