<template>
  <div class="text-center">
    <v-snackbar color="success" outlined :multi-line="multiLine">
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: ["text", "multiLine"],
};
</script>