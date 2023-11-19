<script lang="ts">
  import { settingsStore } from "../Stores/SettingsStore";
  import CancelIcon from "../assets/CancelIcon.svg";
</script>

<dialog
  bind:this={$settingsStore.modal}
  class="rounded-lg mx-auto md:w-2/5 w-full gap-5"
>
  <div class="flex flex-row justify-end">
    <button class="btn btn-secondary" on:click={settingsStore.closeModal}>
      <img src={CancelIcon} alt="Yes" class="w-full h-full p-2" />
    </button>
  </div>
  <div>settings</div>
</dialog>

<!-- TODO: how to execute call from navbar to other component like settings -->
<!-- maybe through parent but is there an option for cross-non-parent interaction -->
