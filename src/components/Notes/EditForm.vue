<template>
  <div class="card p-3" :class="`has-background-${bgColor}-light`">
    <label v-if="label" class="label">{{ label }}</label>

    <div class="field">
      <div class="control">
        <textarea
          ref="newNoteRef"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          class="textarea"
          maxlength="100"
          :placeholder="placeholder"
          v-autofocus
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, defineEmits, ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "danger",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});
const { modelValue } = toRefs(props);
const emit = defineEmits(["update:modelValue"]);

const newNoteRef = ref(null);

const focusTextArea = () => {
  newNoteRef.value.focus();
};

defineExpose({
  focusTextArea,
});
</script>
