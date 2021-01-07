<template>
  <div id="app">
    <h1 class="header-text">Memory game</h1>
    
    <ul class="stats">
      <li>No. of clicks: {{ clicks }}</li>
      <li>Matched pairs: {{ pairs }}</li>
      <li>First click: {{ first }}</li>
      <li>Second click: {{ second }}</li>
    </ul>

    <ul class="cards" :class="[{ 'is-Waiting': !clickable }, { 'is-Inactive': win }]" :key="game">
      <Card
        v-for="n in 16"
        :key="n"
        :n="n"
        @click.native="checkCard(n)"
        :class="[{ 'is-Clicked': clicked.includes(n) }, { 'is-Revealed': pairs.includes(n) || pairs.includes(n-1) }]"
      />
    </ul>

    <transition name="fade">
      <div class="won" v-if="win">
        <h2>Congratulations!</h2>
        <p>Game finished in {{ clicks }} clicks.</p>
        <button @click="resetGame">New game</button>
      </div>
    </transition>

    <div class = "bottom-menu">
      <div class = "center-attempt">
        <button class="memory_new-game return" @click="resetGame">New game</button>
        <router-link to="/" class="router-link-broken"><button class="memory_new-game return">Home</button></router-link>
      </div>
    </div>

  </div>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "Memory",
  components: {
    Card
  },
  data() {
    return {
      clicks: 0,
      pairs: [],
      first: null,
      second: null,
      clickable: true,
      clicked: [],
      game: 0
    };
  },
  methods: {
    checkCard(n) {
      this.clicks++; // increment clicks each time we reveal a card
      this.clicked.push(n); // check which cards are being clicked in current session

      if (n % 2 === 0) {
        // decrease index number for even cards to create pairs
        n = n - 1;
      }

      if (this.clicks % 2 === 0) {
        // check for every second click
        this.second = n; // define second clicked card in our current session

        if (this.first === this.second) {
          // if pairs match, add them to our array called pairs
          this.pairs.push(this.first);
        } else {
          // if pairs don't match reset stuff
          this.clickable = false; // disable clicks if two pairs are being shown that don't match

          setTimeout(() => {
            // set a timer to hide both cards that didn't match in our current session
            this.clickable = true;
            this.second = null;
            this.clicked = [];
          }, 1000);
        }
      } else {
        // this basically starts a new "click" session, meaning that we specify our first card and remove the second card from our previous session
        this.first = n;
        this.second = null;
      }
    },
    resetGame() {
      // self-explanatory. Resets all rules
      this.pairs = [];
      this.clicks = 0;
      this.first = this.second = null;
      this.clickable = true;
      this.clicked = [];
      this.game++; // increment the :key value to re-order all cards for a new game
    }
  },
  computed: {
    win() {
      // if all pairs have been revealed set winning conditions to true
      if (this.pairs.length === 8) return true;
      return false;
    }
  }
};
</script>

<style>


</style>
