<script lang="ts">
  import { timerStore } from "./Stores/TimerStore";
  import Navbar from "./lib/Navbar.svelte";
  import Settings from "./lib/Settings.svelte";
  import Timer from "./lib/Timer.svelte";

  timerStore;
</script>

<div class="bg-base-200 min-w-screen min-h-screen">
  <div
    class="m-0 mx-auto flex flex-col gap-3 p-3 lg:w-5/12 w-full min-h-screen fixed top-0 inset-x-0 bg-base-100 text-black"
  >
    <header>
      <Navbar />
    </header>
    <div class="divider" />

    <main class="flex flex-col gap-3 items-center w-full">
      <Timer />

      <div>
        <Settings />
      </div>
    </main>

    <footer />
  </div>
</div>
