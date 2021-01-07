<template>
    <div class="games">
        <h1 class="header-text">Reaction time!</h1>

        <div class="row center">
            <div id="reaction-time">
                <div class="tic-game">
                <div class="reaction_header">
                    <div class="reaction_timer">{{ minutes }}:{{ seconds }}:{{ elapsedTime }}</div>
                    <div class="reaction_status">{{ status }}</div>
                </div>
                <div class="reaction_board">
                    <div class="reaction_board_tile" v-bind:class="{ board_tile_react: isActive }" data-index="0" @click = gamePlay()><p>{{ countdown }}</p></div>
                </div>
                </div>
            </div>
        </div>

        <div class = "bottom-menu" style="height: 100px;">
          <div class = "center-attempt">
            <button type="button" class="memory_new-game return" @click = newGame()>New game</button>
            <router-link to="/" class="router-link-broken"><button class="memory_new-game return">Home</button></router-link>
          </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "ReactionTime",
  data() {
    return {
      status: "Click to start the game!",
      is_finished: false,
      started: false,
      countdown: "",
      interval_minimal: 4000,
      interval_pause: 0,
      elapsedTime: 0,
      timer: undefined,
      seconds: 0,
      minutes: 0,
      isActive: false,
      work_once: false
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.elapsedTime += 10;
        if (this.elapsedTime > 990) {
            this.elapsedTime -= 990;
            this.seconds += 1;
        }
      }, 10);
    },
    gamePlay() {
      this.work_once = true;
      if (this.started == false && this.work_once == true) {
        this.started = true;
        this.work_once = false;
        this.countdown = 3;
        setTimeout(() => { this.countdown = 2; }, 1000);
        setTimeout(() => { this.countdown = 1; }, 2000);
        setTimeout(() => { this.countdown = "Start!"; }, 3000);
        setTimeout(() => { this.countdown = ""; this.begin(); this.status = "Wait for the color to change green!" }, 4000);
      }

      if (this.started == true && this.work_once == true) {
        this.work_once = false;
        clearInterval(this.timer);
        this.status = "Faster next time!";
      }
    },
    begin() {
      this.interval_pause = this.interval_minimal + (Math.random() * 6000);

      console.log (this.interval_pause);

      setTimeout(() => { this.isActive = true; this.startTimer(); this.status = "Click!" }, this.interval_pause);
    },
    newGame() {
      clearInterval(this.timer);
      this.status = "Click to start the game!";
      this.is_finished = false;
      this.started = false;
      this.countdown = "";
      this.interval_minimal = 2000;
      this.interval_pause = 0;
      this.elapsedTime = 0;
      this.timer = undefined;
      this.seconds = 0;
      this.minutes = 0;
      this.isActive = false;
      this.work_once = false;
    }
  }
};
</script>