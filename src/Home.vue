<template>
    <div id="app">
        <h1 class="header-text">Welcome to minigames browser!</h1>
    
    

    <div class="games">
          <div class="row center">
            <div>
              <router-link to="tic-tac-toe"><button class="game-panel"><img class="game-picture" src="../assets/Tictac.png"></button></router-link>
            </div>
            <div>
              <router-link to="memory"><button class="game-panel"><img class="game-picture" src="../assets/Memory.png"></button></router-link>
            </div>
            <div>
              <router-link to="reaction-time"><button class="game-panel">Reaction time</button></router-link>
            </div>
            <!--<div class="column">
              <b-button class="game-panel">12345</b-button>
            </div>-->
            <div>
              <router-link to="crack-the-safe"><button class="game-panel">Crack the safe</button></router-link>
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
          
          
        </div>
    
    </div>
</template>