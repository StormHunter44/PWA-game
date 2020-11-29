<template>
    <div id="app">
        <h1 class="header-text">Welcome to minigames browser!</h1>
    
    <div class="games">
          <div class="row center">
            <div>
              <router-link to="game"><button class="game-panel"><img alt="Tic tac toe" class="game-picture" src="../assets/Tictac.png"></button></router-link>
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
          
          
        </div>
    
    </div>
</template>