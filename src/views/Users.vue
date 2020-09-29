<template>
  <UserTable v-bind:users="allUsers" v-bind:headers="headers" />
</template>

<script>
import { mapGetters } from "vuex";
import TableComponent from "@/components/TableComponent";

export default {
  components: {
    UserTable: TableComponent,
  },
  computed: mapGetters(["allUsers"]),
  data: () => ({
    headers: [
      {
        text: "Username",
        align: "start",
        sortable: false,
        value: "username",
      },
      { text: "TelegramID", sortable: false, value: "telegramID" },
      { text: "Действия", value: "actions", sortable: false, align: "end" },
    ]
  }),
};
</script>

<style>
</style>