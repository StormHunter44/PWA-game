<template>
    <div class="games">
        <h1 class="header-text">Crack the safe</h1>
        
        <div class="row center safe_panel">
            
            <div class="safe_crack">
                 
                <div class="safe_password_text center">PASSWORD:</div>
                
                <div class="safe_password center">    
                    <div class="safe_tile tile_disabled" v-bind:class="{ pass_invisible: isActive_0, pass_wrong: isActive_1 }" >{{ a }}</div>
                    <div class="safe_tile tile_disabled" v-bind:class="{ pass_invisible: isActive_0, pass_wrong: isActive_1 }" >{{ b }}</div>
                    <div class="safe_tile tile_disabled" v-bind:class="{ pass_invisible: isActive_0, pass_wrong: isActive_1 }" >{{ c }}</div>
                    <div class="safe_tile tile_disabled" v-bind:class="{ pass_invisible: isActive_0, pass_wrong: isActive_1 }" >{{ d }}</div>
                </div>

            </div>

            <div class="safe_console">
                <div class="safe_terminal" style="white-space:pre-wrap;">Console: <div class="rupa"></div>{{ console_text }}</div>
            </div>
            
            <div class="safe_game">
                <div class="safe_numbers center">
                    <div class="safe_tile" @click = "number = 1, keypad(number)">1</div>
                    <div class="safe_tile" @click = "number = 2, keypad(number)">2</div>
                    <div class="safe_tile" @click = "number = 3, keypad(number)">3</div>
                    <div class="safe_tile" @click = "number = 4, keypad(number)">4</div>
                    <div class="safe_tile" @click = "number = 5, keypad(number)">5</div>
                    <div class="safe_tile" @click = "number = 6, keypad(number)">6</div>
                    <div class="safe_tile" @click = "number = 7, keypad(number)">7</div>
                    <div class="safe_tile" @click = "number = 8, keypad(number)">8</div>
                    <div class="safe_tile" @click = "number = 9, keypad(number)">9</div>
                    <div class="safe_tile" @click = keypad_del()>&#10007;</div>
                    <div class="safe_tile" @click = "number = 0, keypad(number)">0</div>
                    <div class="safe_tile" @click = enter()>&#10003;</div>
                </div>
            </div>
        </div>  

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
  name: "ReactionTime",
  created() {
     console.log("Page loaded!");
     this.passwordGenerate();
     
  },
  data() {
    return {
      isActive: false,
      work_once: false,
      number: 0,
      current_digit: 1,
      isActive_0: false,
      isActive_1: false,     
      console_text: "",
      correct_digits: 0,
      correct_slots: 0,

      pass_1: null,
      pass_2: null,
      pass_3: null,
      pass_4: null,

      a: null,
      b: null,
      c: null,
      d: null,

      guessed_digit_1: 20,
      guessed_digit_2: 30,
      guessed_digit_3: 40,
      guessed_digit_4: 50,

      numbersList: [
          { num0: 0 },
          { num1: 1 },
          { num2: 2 },
          { num3: 3 },
          { num4: 4 },
          { num5: 5 },
          { num6: 6 },
          { num7: 7 },
          { num8: 8 },
          { num9: 9 }
      ]
    };
  },
  methods: {
      /* eslint-disable no-unused-vars */
      passwordGenerate() {
        do {
            this.pass_1 = Math.floor(Math.random() * this.numbersList.length);
            this.pass_2 = Math.floor(Math.random() * this.numbersList.length);
            this.pass_3 = Math.floor(Math.random() * this.numbersList.length);
            this.pass_4 = Math.floor(Math.random() * this.numbersList.length);
            console.log(this.pass_1, this.pass_2, this.pass_3, this.pass_4);
        } while (this.pass_1 == this.pass_2 || this.pass_1 == this.pass_3 || this.pass_1 == this.pass_4 || this.pass_2 == this.pass_3 || this.pass_2 == this.pass_4 || this.pass_3 == this.pass_4);
        console.log("Final password: ",this.pass_1, this.pass_2, this.pass_3, this.pass_4);
      },
      keypad(number) {
        /*console.log(this.number);*/
        this.work_once = true;
        if (this.current_digit == 1 && this.work_once == true) {
            this.a = this.number;
            this.current_digit += 1;
            this.work_once = false;
        }
        if (this.current_digit == 2 && this.work_once == true) {
            this.b = this.number;
            this.current_digit += 1;
            this.work_once = false;
        }
        if (this.current_digit == 3 && this.work_once == true) {
            this.c = this.number;
            this.current_digit += 1;
            this.work_once = false;
        }
        if (this.current_digit == 4 && this.work_once == true) {
            this.d = this.number;
            this.current_digit += 1;
            this.work_once = false;
        }
      },
      keypad_del() {
        this.work_once = true;
        if (this.current_digit == 2 && this.work_once == true) {
            this.a = null;
            this.current_digit -= 1;
            this.work_once = false;
        }
        if (this.current_digit == 3 && this.work_once == true) {
            this.b = null;
            this.current_digit -= 1;
            this.work_once = false;
        }
        if (this.current_digit == 4 && this.work_once == true) {
            this.c = null;
            this.current_digit -= 1;
            this.work_once = false;
        }
        if (this.current_digit == 5 && this.work_once == true) {
            this.d = null;
            this.current_digit -= 1;
            this.work_once = false;
        }
      },
      enter() {
        if (this.current_digit == 5) {
          console.log(this.a, this.b, this.c, this.d);
          
          if (this.a == this.pass_1 || this.a == this.pass_2 || this.a == this.pass_3 || this.a == this.pass_4) {
            this.guessed_digit_1 = this.a;
            
            console.log("correct digit: " + this.guessed_digit_1);

            console.log("guessed_digit_1 = " + this.guessed_digit_1);
            console.log("guessed_digit_2 = " + this.guessed_digit_2);
            console.log("guessed_digit_3 = " + this.guessed_digit_3);
            console.log("guessed_digit_4 = " + this.guessed_digit_4);
            
            if (!((this.guessed_digit_2 == this.guessed_digit_1) || (this.guessed_digit_3 == this.guessed_digit_1) || (this.guessed_digit_4 == this.guessed_digit_1))) {
            this.correct_digits++;
            
            console.log("correct digit added! " + this.guessed_digit_1);
            
            }
            if (this.a == this.pass_1) {
                this.correct_slots++;
            }
          }

          if (this.b == this.pass_1 || this.b == this.pass_2 || this.b == this.pass_3 || this.b == this.pass_4) {
            this.guessed_digit_2 = this.b;
            
            console.log("correct digit: " + this.guessed_digit_2);

            console.log("guessed_digit_1 = " + this.guessed_digit_1);
            console.log("guessed_digit_2 = " + this.guessed_digit_2);
            console.log("guessed_digit_3 = " + this.guessed_digit_3);
            console.log("guessed_digit_4 = " + this.guessed_digit_4);

            if (!((this.guessed_digit_1 == this.guessed_digit_2) || (this.guessed_digit_3 == this.guessed_digit_2) || (this.guessed_digit_4 == this.guessed_digit_2))) {
            this.correct_digits++;

            console.log("correct digit added! " + this.guessed_digit_2);

            }
            if (this.b == this.pass_2) {
                this.correct_slots++;
            }
          }

          if (this.c == this.pass_1 || this.c == this.pass_2 || this.c == this.pass_3 || this.c == this.pass_4) {
            this.guessed_digit_3 = this.c;
            
            console.log("correct digit: " + this.guessed_digit_3);

            console.log("guessed_digit_1 = " + this.guessed_digit_1);
            console.log("guessed_digit_2 = " + this.guessed_digit_2);
            console.log("guessed_digit_3 = " + this.guessed_digit_3);
            console.log("guessed_digit_4 = " + this.guessed_digit_4);
            
            if (!((this.guessed_digit_1 == this.guessed_digit_3) || (this.guessed_digit_2 == this.guessed_digit_3) || (this.guessed_digit_4 == this.guessed_digit_3))) {
            this.correct_digits++;

            console.log("correct digit added! " + this.guessed_digit_3);

            }
            if (this.c == this.pass_3) {
                this.correct_slots++;
            }
          }

          if (this.d == this.pass_1 || this.d == this.pass_2 || this.d == this.pass_3 || this.d == this.pass_4) {
            this.guessed_digit_4 = this.d;
            
            console.log("correct digit: " + this.guessed_digit_4);

            console.log("guessed_digit_1 = " + this.guessed_digit_1);
            console.log("guessed_digit_2 = " + this.guessed_digit_2);
            console.log("guessed_digit_3 = " + this.guessed_digit_3);
            console.log("guessed_digit_4 = " + this.guessed_digit_4);
            
            if (!((this.guessed_digit_1 == this.guessed_digit_4) || (this.guessed_digit_2 == this.guessed_digit_4) || (this.guessed_digit_3 == this.guessed_digit_4))) {
            this.correct_digits++;
            
            console.log("correct digit added! " + this.guessed_digit_4);
            
            }
            if (this.d == this.pass_4) {
                this.correct_slots++;
            }
          }

          /*if (this.a == this.pass_1) {
              this.correct_digits++;
              this.correct_slots++;
          } else {
              if (this.a == this.pass_2 || this.a == this.pass_3 || this.a == this.pass_4) {
              this.correct_digits++;
            }
          }
          
          if (this.b == this.pass_2) {
              this.correct_digits++;
              this.correct_slots++;
          } else {
              if (this.b == this.pass_1 || this.b == this.pass_3 || this.b == this.pass_4) {
              this.correct_digits++;
             }
          }
          
          if (this.c == this.pass_3) {
              this.correct_digits++;
              this.correct_slots++;
          } else {
              if (this.c == this.pass_1 || this.b == this.pass_2 || this.b == this.pass_4) {
              this.correct_digits++;
            }
          }
          
          if (this.d == this.pass_4) {
              this.correct_digits++;
              this.correct_slots++;
          } else {
              if (this.d == this.pass_1 || this.b == this.pass_2 || this.b == this.pass_3) {
              this.correct_digits++;
            }
          }*/

          console.log(this.correct_digits, this.correct_slots);
          this.updateConsole();
          this.isActive_1 = true;
          this.isActive_0 = true;
          setTimeout(() => { this.isActive_0 = false; }, 200);
          setTimeout(() => { this.isActive_0 = true; }, 400);
          setTimeout(() => { this.isActive_0 = false; }, 600);
          setTimeout(() => { 
              this.isActive_1 = false; 
              this.isActive_0 = false; 
              this.current_digit = 1;
              this.a = null;
              this.b = null;
              this.c = null;
              this.d = null;
              this.correct_digits = 0;
              this.correct_slots = 0;
              this.guessed_digit_1 = 10;
              this.guessed_digit_2 = 20;
              this.guessed_digit_3 = 30;
              this.guessed_digit_4 = 40;
              }, 2000);  
        }
      },
      updateConsole() {
          this.console_text = this.console_text  + '\n' + ">> " + this.a + this.b + this.c + this.d + " - There are " + this.correct_digits + " correct digits in " + this.correct_slots + " correct slots.";
      }
      /* eslint-enable no-unused-vars */
  }
};
</script>