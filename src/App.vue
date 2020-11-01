<template>
    <div id="app">
        <h1 class="header-text">Welcome to minigames browser!</h1>

        <div class="games">
          <div class="row center">
            <div>
              <button class="game-panel"><img alt="Tic tac toe"
              class="game-picture" src="./assets/Tictac.png"></button>
            </div>
            <div>
              <button class="game-panel">Snake</button>
            </div>
            <div>
              <button class="game-panel">Ice hockey</button>
            </div>
            <!--<div class="column">
              <b-button class="game-panel">12345</b-button>
            </div>-->
            <div>
              <button class="game-panel">*placeholder*</button>
            </div>
            <div>
              <button class="game-panel">*placeholder*</button>
            </div>
            <div>
              <button class="game-panel">*placeholder*</button>
            </div>
            <div>
              <button class="game-panel">*placeholder*</button>
            </div>
            <div>
              <button class="game-panel">*placeholder*</button>
            </div>
            <div>
              <button class="game-panel">*placeholder*</button>
            </div>
          </div>
          
          <footer class="footer-bg">
            <div class="footer-text">
              <p1>© 2020 StormHunter44. All Rights Reserved.</p1>
            </div>
          </footer>
        </div>


    </div>
</template>

<script>

</script>

<style>
* {
	margin:0;
	padding:0;
}

h1 {
  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;
}

#app {
  font-family: Agency FB, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  font-size: 64px;

  background-image: url("./assets/bg-3-2.png");
}

.games {
  margin-top: 30px;
  width: 100%;
}

.game-panel {
  background-color: #FFFFFF;
  border-width: 3px;
  border-color:#000000;
  border-radius: 5px;
  color: black;
  width: 240px;
  height: 245px;  
  text-align: center;
  display: inline-block;
  font-size: 16px;
  flex:1;
  margin-left:10px;
  margin-right:10px;
  margin-bottom:20px;
}

.row {
  width: 80%;
  max-width: 1000px;
  justify-content: center;
  display:flex;
  flex-wrap:wrap;
  flex-direction: row;
  align-content: flex-start;
  flex-grow:initial;

  /*border-width: 5px;
  border-color:#ffff00;
  border-style: solid;*/
}

.center {
  margin: auto;
}

.game-picture {
  width: 200px;
  height: 200px;
  border-style: solid;
  border-width: 3px;
  border-radius: 5px;
  border-color:#858585;
}

.footer-bg {
  font-size:22px;
  margin-top: 25px;
  background-color:#5a5a5a;
  width:100%;
  height: 150px;
  position:relative;
  
  /*border-width: 5px;
  border-color:#ff0000;
  border-style: solid;*/
}

.footer-text {
  position: relative;
  top: 40%;
  vertical-align: baseline;
}

.header-text {
  line-height:65px;
  padding-top: 20px;
} 

.banner-left {
  background-image: url("./assets/bg-3.png");
  height: 300px;
  width: 20%;
  position:absolute;

}
</style>
