<template>
  <div class="notes">
    <EditForm v-model="newNote" ref="editNotesRef" placeholder="Add a new note">
      <template #buttons>
        <button
          class="button is-link has-background-danger"
          :disabled="!newNote"
          @click="addNewNotes"
        >
          Add New Note
        </button>
      </template>
    </EditForm>
    <NotesCard v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import NotesCard from "@/components/Notes/NotesCard.vue";
import EditForm from "@/components/Notes/EditForm.vue";
import { useNotesStore } from "@/stores/notesStore";
import { storeToRefs } from "pinia";

const notesStore = useNotesStore();
const { notes } = storeToRefs(notesStore);
const { addNotes } = notesStore;

const newNote = ref("");
const editNotesRef = ref(null);

/*
  Methods
*/
const addNewNotes = () => {
  addNotes(newNote.value);
  newNote.value = "";
  editNotesRef.value.focusTextArea();
};
</script>
