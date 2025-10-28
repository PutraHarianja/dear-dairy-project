<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <th>Stat</th>
        <th>Value</th>
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
  </div>
</template>

<script setup>
import { useNotesStore } from "@/stores/notesStore";

const { totalNotesCount, totalCharactersCount } = useNotesStore();
</script>
