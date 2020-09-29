<template>
  <v-row>
    <v-col v-for="n in 7" :key="n" cols="12" md="4">
      <QueueCard />
    </v-col>
  </v-row>
</template>

<script>
import QueueCardComponent from "@/components/QueueCardComponent";

export default {
  components: {
    QueueCard: QueueCardComponent,
  },
};
</script>