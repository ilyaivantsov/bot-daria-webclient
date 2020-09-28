<template>
  <v-app>
    <Menu v-bind:items="items" v-bind:user="user" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";

export default {
  name: "App",

  components: {
    Menu: MenuComponent,
  },

  data: () => ({
    user: {
      username: "Ilya",
    },
    items: [
      { id: 1, title: "Статистика", icon: "mdi-eye-minus" },
      { id: 2, title: "Очереди", icon: "mdi-clipboard-flow" },
      { id: 3, title: "Пользователи", icon: "mdi-account-cog" },
    ],
  }),
};
</script>
