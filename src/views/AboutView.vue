<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
</script>
<template>
  <div class="header2">
    <WelcomeItem />
  </div>
  <div class="opis">
    <h1>Sažetak</h1>
    <h3>Našavši se usred noćne more, preplašena i zbunjena luta bostonskim ulicama u krvlju natopljenoj haljini
      i s 10.000 dolara u džepu. Njezin je život postao zrakoprazan prostor, a njezina prošlost je iščezla… ili je ukradena.
      Jedino preostalo su uznemirujući stranac koji tvrdi da je njezin suprug, šapatom izgovorene glasine o mrtvom djetetu 
      kojeg se ne sjeća… i užasan predosjećaj da će joj se uskoro dogoditi nešto strašno…</h3>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .header2 {
    width: 100vw;
    margin-left: -14.5vw;
  }

  .opis {
    min-height: 80vh;
    margin-left: -100vw;
    text-align: center;
    margin-top: 20vh;
  }

  h3 {
    margin-top: 8vh;
    text-align: center;
    width: 50vw;
    margin-left: 25vw;
    font-size: 20px;
  }
}
</style>
