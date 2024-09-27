<template>
  <header>
    <div class="header-content">
      <BookTitle :naslov=title />

      <p class="current-date">Današnji datum je: &nbsp {{ currentDate }}</p>
    </div>
  </header>
</template>

<script>
import BookTitle from '@/components/HelloWorld.vue';

export default {
  components: {
    BookTitle,
  },
  data() {
    return {
      currentDate: '',
      title: "Na rubu ludila"
    };
  },
  mounted() {
    this.updateCurrentDate();
  },
  methods: {
    updateCurrentDate() {
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      this.currentDate = today.toLocaleDateString('hr-HR', options);
    },
  },
};
</script>

<style scoped>
header {
  background-color: #3498db;
  color: #fff;
  padding: 0;
  text-align: right;
  width: 100%;
  margin-left: -20vw;
  margin-top: -10vw;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.current-date {
  font-size: 17px;
  margin-right: 1vw;
}
</style>
