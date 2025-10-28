import { watch } from "vue"

export const useWatchCharacters = (valueToWatch, maxChars = 100) => {
  watch(valueToWatch, (newValue) => {
    if (newValue.length > maxChars) {
      alert("Don't say too much. Keep it simple and remarkable.");
    }
  });
}