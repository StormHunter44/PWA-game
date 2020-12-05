<template>
  <li class="card" :style="{ order: Math.floor(Math.random() * 100) + 1 }">
    <img v-bind:src="require('../../assets/pers-card-' + cardID + '.png')">
  </li>
</template>

<style>
.card {
  display: block;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #133e8d;
  transition: 300ms;
  cursor: pointer;
  overflow: hidden;
  background-image: url("../../assets/pers-card-back.png");
  background-size: 100% 100%;
  height: 300px;
}

.card:hover {
  background-color: rgb(193, 185, 206);
}

.card img {
  transition: 300ms;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.card.is-Clicked {
  pointer-events: none;
  transform: scale(1.1) rotate(3deg);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

.card.is-Clicked:nth-child(odd) {
  transform: scale(1.1) rotate(-3deg);
}

.card.is-Clicked img {
  opacity: 1;
}

.card.is-Revealed {
  transform: none !important;
  box-shadow: none;
  pointer-events: none;
}

.card.is-Revealed img {
  opacity: 1;
}
</style>


<script>
export default {
  props: ["n"],
  computed: {
    cardID() {
      if (this.n % 2 === 0) {
        return this.n - 1;
      } else {
        return this.n;
      }
    }
  }
};
</script>

