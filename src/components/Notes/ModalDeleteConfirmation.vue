<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div ref="deleteModal" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">Are you sure you want to change this note?</section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button class="button" @click="closeModal">Cancel</button>
          <button class="button is-danger" @click="deleteNotes(noteId)">Delete</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useNotesStore } from "@/stores/notesStore";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});
const { modelValue, noteId } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);

const { deleteNotes } = useNotesStore();

const deleteModal = ref(null);

const closeModal = () => {
  emit("update:modelValue", false);
};

onClickOutside(deleteModal, closeModal);

/* 
  Keyboard control
*/
const handleKeyboard = (e) => {
  console.log("close it");
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>
