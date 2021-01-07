<template>
<div id="tests">
  <p>Name</p>
  <button @click="test1">Choose!</button>
  <div>{{ console_text }}</div>
</div>
</template>

<style>

</style>

<script>
export default {
  name: "ReactionTime",
  data() {
    return {
      isActive: false,
      work_once: false,
      number: 1,
      current_digit: 1,
      digit_1: 10,
      digit_2: 30,
      digit_3: 69,
      i: 1,
      console_text: "what is where is \n there \n and i am here while not",
    };
  },
  methods: {
      /* eslint-disable no-unused-vars */
      test1() {
        console.log(this.digit_[this.i]);
      }
      /* eslint-enable no-unused-vars */
    }
};
</script>