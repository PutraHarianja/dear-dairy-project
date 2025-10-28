<template>
  <div class="card">
    <div class="card-content">
      {{ note.content }}
      <div class="has-text-right-desktop has-text-right-touch has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
      <a href="#" class="card-footer-item" @click="deleteNotes(note.id)">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed, toRefs } from "vue";
import { useNotesStore } from "@/stores/notesStore";
import { RouterLink } from "vue-router";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const { deleteNotes } = useNotesStore();

const { note } = toRefs(props);

const characterLength = computed(() => {
  const length = note.value.content.length;
  const description = length > 1 ? "characters" : "character";
  return `${length} ${description}`;
});
</script>
