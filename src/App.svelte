<script lang="ts">
  import { timerStore } from "./Stores/TimerStore";
  import Timer from "./lib/Timer.svelte";

  timerStore;
</script>

<div class="bg-base-300 min-w-screen min-h-screen">
  <div
    class="m-0 mx-auto flex flex-col gap-3 p-3 md:w-5/12 w-full min-h-screen fixed top-0 inset-x-0 bg-rose-200 text-black"
  >
    <header>
      <h1 class="text-7xl">Gap Learning</h1>
    </header>
    <div class="divider" />

    <main class="flex flex-col gap-3 items-center w-full">
      <Timer />
    </main>

    <footer />
  </div>
</div>
