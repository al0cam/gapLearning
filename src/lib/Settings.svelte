<script lang="ts">
  import { settingsStore } from "../Stores/SettingsStore";
  import { languageStore } from "../Stores/LanguageStore";
  import { defaultValuesStore } from "../Stores/DefaultValuesStore";
  import CancelIcon from "../assets/CancelIcon.svg";

  let selectedLanguage: string = languageStore.getDefaultLanguage();

  function selectLanguage() {
    languageStore.setLanguage(selectedLanguage);
  }

  // HACK FOR PERMA DISPLAYING THE MODAL WHILE WORKING ON IT
  // let modal: HTMLDialogElement;
  // $: if (modal instanceof HTMLDialogElement) modal.showModal();
</script>

<!-- TODO: i dont like the fact that the modal is in the center of the page at the moment
for some reason i feel like the settings should start from the top and go to the end -->

<!-- TODO: find a way to set the time in a reactive fashion -->

<!-- dialog base (background) -->
<dialog
  bind:this={$settingsStore.modal}
  class="rounded-lg mx-auto md:w-2/5 w-full p-3"
>
  <div class="flex flex-col gap-3">
    <!-- HEADER START -->
    <div class="flex flex-row justify-between">
      <span class="text-3xl font-bold">{$languageStore["settings"]}</span>
      <button class="btn btn-secondary" on:click={settingsStore.closeModal}>
        <img src={CancelIcon} alt="Yes" class="w-full h-full p-2" />
      </button>
    </div>
    <!-- HEADER END -->
    <div class="flex flex-col gap-3">
      <!-- CONTENT -->
      <div>
        <!-- TIMER -->
        <span class="text-2xl pb-2">{$languageStore["time"]}</span>
        <div class="flex flex-row gap-3">
          <div class="flex flex-col items-center">
            <span>{$languageStore["hours"]}</span>
            <input
              class="w-14 text-center rounded-md"
              type="number"
              bind:value={$defaultValuesStore.defaultHours}
            />
          </div>
          <div class="flex flex-col items-center">
            <span>{$languageStore["minutes"]}</span>
            <input
              class="w-14 text-center rounded-md"
              type="number"
              bind:value={$defaultValuesStore.defaultMinutes}
            />
          </div>
          <div class="flex flex-col items-center">
            <span>{$languageStore["seconds"]}</span>
            <input
              class="w-14 text-center rounded-md"
              type="number"
              bind:value={$defaultValuesStore.defaultSeconds}
            />
          </div>
        </div>
        <!-- TIMER END -->
      </div>

      <div class="flex flex-col gap-1">
        <!-- LANGUAGE -->
        <span class="text-2xl">{$languageStore["language"]}</span>
        <select
          class="select w-min max-w-xs"
          bind:value={selectedLanguage}
          on:change={() => selectLanguage()}
        >
          {#each languageStore.getLanguages() as language}
            <option value={language}>{language}</option>
          {/each}
        </select>
        <!-- LANGUAGE END -->
      </div>
      <!-- CONTENT END -->
    </div>
    <!-- FOOTER -->
    <!-- <div class="flex flex-row justify-end">
      <button class="btn btn-primary" on:click={settingsStore.closeModal}>
        Save
      </button>
    </div> -->
    <!-- FOOTER END -->
  </div>
</dialog>
