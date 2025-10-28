<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of Characters</td>
          <td>{{ totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input v-model="feedback" v-autofocus class="input" type="text" placeholder="Any feedback?" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNotesStore } from "@/stores/notesStore";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

const { totalNotesCount, totalCharactersCount } = useNotesStore();

const feedback = ref("");
useWatchCharacters(feedback, 50);
</script>
