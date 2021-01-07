<template>
    <div class="games">
        <h1 class="header-text">Tic tac toe</h1>

        <div class="row center">
            <div id="tic-tac-toe">
                <div class="tic-game">
                <div class="header_tictac">
                    <div class="header__turn">{{ turn }}</div>
                    <div class="header__status">{{ status }}</div>
                </div>
                <div class="board">
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_0  }" data-index="0" @click = pass_turn_0()>{{ data_index_0 }}</div>
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_1  }" data-index="1" @click = pass_turn_1()>{{ data_index_1 }}</div>
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_2  }" data-index="2" @click = pass_turn_2()>{{ data_index_2 }}</div>
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_3  }" data-index="3" @click = pass_turn_3()>{{ data_index_3 }}</div>
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_4  }" data-index="4" @click = pass_turn_4()>{{ data_index_4 }}</div>
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_5  }" data-index="5" @click = pass_turn_5()>{{ data_index_5 }}</div>
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_6  }" data-index="6" @click = pass_turn_6()>{{ data_index_6 }}</div>
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_7  }" data-index="7" @click = pass_turn_7()>{{ data_index_7 }}</div>
                    <div class="board__tile" v-bind:class="{ board__tile__winner: isActive_8  }" data-index="8" @click = pass_turn_8()>{{ data_index_8 }}</div>
                </div>
            </div>
            </div>
        </div>
        <!--class="game-panel current-game-button"-->
        <!--AKO IGRAC POBJEDI NA ZADNJEM KORAKU PISE ITS A TIE !! BUG! (fixed)-->

        <div class = "bottom-menu" style="height: 100px;">
          <div class = "center-attempt">
            <button type="button" class="memory_new-game return" @click = reset()>New game</button>
            <router-link to="/" class="router-link-broken"><button class="memory_new-game return">Home</button></router-link>
          </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "TicTacToe",
  components: {

  },
  data() {
    return {
      turn: "X's turn",
      status: "In progress",
      is_finished: false,
      current_turn: "X",
      winner: "",
      turn_count: 0,
      data_index_0: "",
      data_index_1: "",
      data_index_2: "",
      data_index_3: "",
      data_index_4: "",
      data_index_5: "",
      data_index_6: "",
      data_index_7: "",
      data_index_8: "",
      isActive_0: false,
      isActive_1: false,
      isActive_2: false,
      isActive_3: false,
      isActive_4: false,
      isActive_5: false,
      isActive_6: false,
      isActive_7: false,
      isActive_8: false,
    };
  },
  methods: {
      turn_swap() {
          if (this.current_turn == "X") {
              this.current_turn = "O";
          } else {
              this.current_turn = "X";
          }
      },
      tie() {
          if (this.turn_count == 9 && this.winner == "") {
              this.status = "It's a tie!";
              this.turn = "Finished!";   
          }
      },
      finished() {
          this.status = this.winner + " is the winner!";
          this.turn = "Finished!";
      },
      status_update() {
        if (this.turn == "X's turn") {
            this.turn = "O's turn";
        } else {
            this.turn = "X's turn";
        }
      },
      reset() {
          this.turn = "X's turn";
          this.status = "In progress";
          this.is_finished = false;
          this.current_turn = "X";
          this.winner = "";
          this.turn_count = 0;
          this.data_index_0 = "";
          this.data_index_1 = "";
          this.data_index_2 = "";
          this.data_index_3 = "";
          this.data_index_4 = "";
          this.data_index_5 = "";
          this.data_index_6 = "";
          this.data_index_7 = "";
          this.data_index_8 = "";
      },
      checkfor_winning_combo() {

       if (this.data_index_0 == "X" || this.data_index_0 == "O") {
           if (this.is_finished == false) {
               if (this.data_index_0 == this.data_index_1 && this.data_index_0 == this.data_index_2 && this.data_index_1 == this.data_index_2) {
               this.winner = this.data_index_0;
               this.is_finished = true;
               this.finished();
               this.isActive_0 = true;
               this.isActive_1 = true;
               this.isActive_2 = true;
               //(FIX THIS?) this.board_update();
               console.log(this.winner);
               }
           }
       }

       if (this.data_index_3 == "X" || this.data_index_3 == "O") {
           if (this.is_finished == false) {
               if (this.data_index_3 == this.data_index_4 && this.data_index_3 == this.data_index_5 && this.data_index_4 == this.data_index_5) {
               this.winner = this.data_index_3;
               this.is_finished = true;
               this.finished();
               this.isActive_3 = true;
               this.isActive_4 = true;
               this.isActive_5 = true;
               console.log(this.winner);
               }
           }
       }

       if (this.data_index_6 == "X" || this.data_index_6 == "O") {
           if (this.is_finished == false) {
               if (this.data_index_6 == this.data_index_7 && this.data_index_6 == this.data_index_8 && this.data_index_7 == this.data_index_8) {
               this.winner = this.data_index_6;
               this.is_finished = true;
               this.finished();
               this.isActive_6 = true;
               this.isActive_7 = true;
               this.isActive_8 = true;
               console.log(this.winner);
               }
           }
       }

       if (this.data_index_0 == "X" || this.data_index_0 == "O") {
           if (this.is_finished == false) {
               if (this.data_index_0 == this.data_index_3 && this.data_index_0 == this.data_index_6 && this.data_index_3 == this.data_index_6) {
               this.winner = this.data_index_0;
               this.is_finished = true;
               this.finished();
               this.isActive_0 = true;
               this.isActive_3 = true;
               this.isActive_6 = true;
               console.log(this.winner);
               }
           }
       }

       if (this.data_index_1 == "X" || this.data_index_1 == "O") {
           if (this.is_finished == false) {
               if (this.data_index_1 == this.data_index_4 && this.data_index_1 == this.data_index_7 && this.data_index_4 == this.data_index_7) {
               this.winner = this.data_index_1;
               this.is_finished = true;
               this.finished();
               this.isActive_1 = true;
               this.isActive_4 = true;
               this.isActive_7 = true;
               console.log(this.winner);
               }
           }
       }

       if (this.data_index_2 == "X" || this.data_index_2 == "O") {
           if (this.is_finished == false) {
               if (this.data_index_2 == this.data_index_5 && this.data_index_2 == this.data_index_8 && this.data_index_5 == this.data_index_8) {
               this.winner = this.data_index_2;
               this.is_finished = true;
               this.finished();
               this.isActive_2 = true;
               this.isActive_5 = true;
               this.isActive_8 = true;
               console.log(this.winner);
               }
           }
       }

       if (this.data_index_0 == "X" || this.data_index_0 == "O") {
           if (this.is_finished == false) {
               if (this.data_index_0 == this.data_index_4 && this.data_index_0 == this.data_index_8 && this.data_index_4 == this.data_index_8) {
               this.winner = this.data_index_0;
               this.is_finished = true;
               this.finished();
               this.isActive_0 = true;
               this.isActive_4 = true;
               this.isActive_8 = true;
               console.log(this.winner);
               }
           }
       }

       if (this.data_index_2 == "X" || this.data_index_2 == "O") {
           if (this.is_finished == false) {
               if (this.data_index_2 == this.data_index_4 && this.data_index_2 == this.data_index_6 && this.data_index_4 == this.data_index_6) {
               this.winner = this.data_index_2;
               this.is_finished = true;
               this.finished();
               this.isActive_2 = true;
               this.isActive_4 = true;
               this.isActive_6 = true;
               console.log(this.winner);
               }
           }
       }

      },


      pass_turn_0() {
          if (this.is_finished == false) {
              if (!(this.data_index_0 == "X" || this.data_index_0 == "O")) {
              this.data_index_0 = this.current_turn;
              this.turn_count += 1;
              this.turn_swap();
              this.status_update();
              this.checkfor_winning_combo();
              this.tie();
              }
          }
      },
      pass_turn_1() {
          if (this.is_finished == false) {
          if (!(this.data_index_1 == "X" || this.data_index_1 == "O")) {
          this.data_index_1 = this.current_turn;
          this.turn_count += 1;
          this.turn_swap();
          this.status_update();
          this.checkfor_winning_combo();
          this.tie();
          }
          }
      },
      pass_turn_2() {
          if (this.is_finished == false) {
          if (!(this.data_index_2 == "X" || this.data_index_2 == "O")) {
          this.data_index_2 = this.current_turn;
          this.turn_count += 1;
          this.turn_swap();
          this.status_update();
          this.checkfor_winning_combo();
          this.tie();
          }
          }
      },
      pass_turn_3() {
          if (this.is_finished == false) {
          if (!(this.data_index_3 == "X" || this.data_index_3 == "O")) {
          this.data_index_3 = this.current_turn;
          this.turn_count += 1;
          this.turn_swap();
          this.status_update();
          this.checkfor_winning_combo();
          this.tie();
          }
          }
      },
      pass_turn_4() {
          if (this.is_finished == false) {
          if (!(this.data_index_4 == "X" || this.data_index_4 == "O")) {
          this.data_index_4 = this.current_turn;
          this.turn_count += 1;
          this.turn_swap();
          this.status_update();
          this.checkfor_winning_combo();
          this.tie();
          }
          }
      },
      pass_turn_5() {
          if (this.is_finished == false) {
          if (!(this.data_index_5 == "X" || this.data_index_5 == "O")) {
          this.data_index_5 = this.current_turn;
          this.turn_count += 1;
          this.turn_swap();
          this.status_update();
          this.checkfor_winning_combo();
          this.tie();
          }
          }
      },
      pass_turn_6() {
          if (this.is_finished == false) {
          if (!(this.data_index_6 == "X" || this.data_index_6 == "O")) {
          this.data_index_6 = this.current_turn;
          this.turn_count += 1;
          this.turn_swap();
          this.status_update();
          this.checkfor_winning_combo();
          this.tie();
          }
          }
      },
      pass_turn_7() {
          if (this.is_finished == false) {
          if (!(this.data_index_7 == "X" || this.data_index_7 == "O")) {
          this.data_index_7 = this.current_turn;
          this.turn_count += 1;
          this.turn_swap();
          this.status_update();
          this.checkfor_winning_combo();
          this.tie();
          }
          }
      },
      pass_turn_8() {
          if (this.is_finished == false) {
          if (!(this.data_index_8== "X" || this.data_index_8 == "O")) {
          this.data_index_8 = this.current_turn;
          this.turn_count += 1;
          this.turn_swap();
          this.status_update();
          this.checkfor_winning_combo();
          this.tie();
          }
          }
      },
    },

  computed: {

    }
};
</script>