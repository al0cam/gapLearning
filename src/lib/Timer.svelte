<script lang="ts">
  import { timerStore } from "../Stores/TimerStore";

  timerStore;

  $: displayTime = $timerStore.getFormattedTime();
  let start = false;
  function startStopTimer() {
    start ? timerStore.stop() : timerStore.start();
    start = !start;
  }
</script>

<div>
  <h1 class="text-9xl">{displayTime}</h1>
  <button class="btn btn-primary w-full" on:click={() => startStopTimer()}
    >{start ? "Stop" : "Start"}</button
  >
</div>
