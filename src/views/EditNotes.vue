<template>
  <EditForm
    v-model="note"
    bg-color="warning"
    placeholder="Edit note"
    label="Edit Note"
    ref="editFromRef"
  >
    <template #buttons>
      <button class="button has-background-white mr-2" @click="$router.back()">Cancel</button>
      <button class="button is-link has-background-warning" :disabled="!note" @click="saveNotes">
        Save Note
      </button>
    </template>
  </EditForm>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import EditForm from "@/components/Notes/EditForm.vue";
import { useNotesStore } from "@/stores/notesStore";

const route = useRoute();
const router = useRouter();
const { getNoteContent, updateNote } = useNotesStore();
const editFromRef = ref(null);

const note = ref("");
note.value = getNoteContent(route.params.id);

const saveNotes = () => {
  updateNote(route.params.id, note.value);
  router.push("/");
};

onMounted(() => {
  editFromRef.value.focusTextArea();
});
</script>
