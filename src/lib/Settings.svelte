<script lang="ts">
  import { settingsStore } from "../Stores/SettingsStore";
  import { timerStore } from "../Stores/TimerStore";
  import { languageStore } from "../Stores/LanguageStore";
  import CancelIcon from "../assets/CancelIcon.svg";

  let modal: HTMLDialogElement;
  let selectedLanguage: string = languageStore.getDefaultLanguage();

  function selectLanguage() {
    console.log("OK");
    languageStore.setLanguage(selectedLanguage);
  }

  $: if (modal instanceof HTMLDialogElement) modal.showModal();
</script>

<!-- TODO: i dont like the fact that the modal is in the center of the page at the moment
for some reason i feel like the settings should start from the top and go to the end -->

<!-- dialog base (background) -->
<dialog
  bind:this={modal}
  class="rounded-lg mx-auto md:w-2/5 w-full flex flex-col gap-3 p-3"
>
  <!-- dialog header together with close button -->
  <div class="flex flex-row justify-between">
    <span class="text-3xl font-bold">Settings</span>
    <button class="btn btn-secondary" on:click={settingsStore.closeModal}>
      <img src={CancelIcon} alt="Yes" class="w-full h-full p-2" />
    </button>
  </div>
  <!-- dialog content -->
  <div class="flex flex-col gap-3">
    <div>
      <!-- subtitle -->
      <span class="text-xl">Time</span>
      <!-- content of subtitle -->
      <div class="flex flex-row gap-2 join">
        <div class="flex flex-col items-center">
          <span>{languageStore.translate("Hours")}</span>
          <input
            class="w-14 text-center rounded-md"
            type="number"
            bind:value={$timerStore.hours}
          />
        </div>
        <div class="flex flex-col items-center">
          <span>Minutes</span>
          <input
            class="w-14 text-center rounded-md"
            type="number"
            bind:value={$timerStore.minutes}
          />
        </div>
        <div class="flex flex-col items-center">
          <span>Seconds</span>
          <input
            class="w-14 text-center rounded-md"
            type="number"
            bind:value={$timerStore.seconds}
          />
        </div>
        <!-- content of subtitle end -->
      </div>
    </div>

    <div>
      <!-- subtitle -->
      <span class="text-xl">{languageStore.translate("Language")}</span>
      <!-- content of subtitle -->
      <div class="flex flex-row gap-2 join">
        <select
          class="select w-min max-w-xs"
          bind:value={selectedLanguage}
          on:change={() => selectLanguage()}
        >
          {#each languageStore.getLanguages() as language}
            <option value={language}>{language}</option>
          {/each}
        </select>
      </div>
      <!-- content of subtitle end -->
    </div>
    <!-- dialog footer -->
    <!-- <div class="flex flex-row justify-end">
      <button class="btn btn-primary" on:click={settingsStore.closeModal}>
        Save
      </button>
    </div> -->
  </div>
</dialog>
