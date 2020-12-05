<template>
    <div class="games">
        <h1 class="header-text">Tic tac toe</h1>

        <div class="row center">
            <div id="tic-tac-toe">
                <div class="tic-game">
                <div class="header_tictac">
                    <div class="header__turn">FILL DATA</div>
                    <div class="header__status">FILL DATA</div>
                    <button type="button" class="header__restart">
                        <i class="material-icons">New game</i>
                    </button>
                </div>
                <div class="board">
                    <div class="board__tile" data-index="0" v-on:click=click()>{{ field }}</div>
                    <div class="board__tile" data-index="1"></div>
                    <div class="board__tile" data-index="2"></div>
                    <div class="board__tile" data-index="3"></div>
                    <div class="board__tile" data-index="4"></div>
                    <div class="board__tile" data-index="5"></div>
                    <div class="board__tile" data-index="6"></div>
                    <div class="board__tile" data-index="7"></div>
                    <div class="board__tile" data-index="8"></div>
                </div>
            </div>
            </div>
        </div>
        <!--class="game-panel current-game-button"-->

        <div class="row center">
            <router-link to="/" class="return"><button class="return">Home</button></router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "Grid",
    data () {
    return {
    field: "",
    }
  },
  watch: {
      click() {
          this.field = "X";
      }

  }
  
}
</script>

