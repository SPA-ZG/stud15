<template>
  <h1 class="h">404</h1>
  <br>
  <h3 class="s">Not Found</h3>
  <br>
  <h4 class="r">The requested URL /{{ $route.params.catchAll }} was not found on this server.</h4>
</template>
  
  <style>
  @media (min-width: 1024px) {
    h {
      font-size: 100px;
      margin-left: 30vw;
      margin-top: -20vh;
    }

    s {
      font-size: 32px;
      margin-left: 29vw;
      width: 10vw;
    }

    r {
      margin-left: 18vw;
      font-size: 22px;
      margin-top: 5.5vh;
      width: 38vw;
    }
  }
  </style>
  