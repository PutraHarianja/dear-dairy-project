import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([
    {
      id: "id1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis unde laborum quis cum cupiditate. Blanditiis quos, alias, optio quasi consequuntur nemo numquam temporibus quia dolore architecto itaque eos beatae!",
    },
    {
      id: "id2",
      content: "This is a shorter notes!! Huhu!!",
    }
  ])

  /* 
    Getters
  */
  const getNoteContent = computed(() => (id) => {
    return notes.value.filter((note) => note.id === id)[0].content
  })

  const addNotes = (newNoteContent) => {
    const note = {
      id: uuidv4(),
      content: newNoteContent,
    };

    notes.value.unshift(note);
  }

  const updateNote = (id, newNoteContent) => {
    const index = notes.value.findIndex((note) => note.id === id)
    notes.value[index].content = newNoteContent
  }

  const deleteNotes = (id) => {
    notes.value = notes.value.filter((note) => note.id !== id);
  }

  return {
    notes,
    getNoteContent,
    addNotes,
    deleteNotes,
    updateNote
  }
})