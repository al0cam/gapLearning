<script lang="ts">
  import { timerStore } from "../Stores/TimerStore";

  // TODO: Fix the stop not being reset to start when the timer hits finish
  $: displayTime = $timerStore.getFormattedTime();
  let start = false;
  function startStopTimer() {
    start ? timerStore.stop() : timerStore.start();
    start = !start;
  }
</script>

<div class="flex flex-col items-center">
  <h1 class="text-9xl text-gray-400">{displayTime}</h1>
  <button
    class="btn btn-primary text-lg w-3/5"
    on:click={() => startStopTimer()}>{start ? "Stop" : "Start"}</button
  >
</div>
