<template>
  <v-app>
    <Menu v-bind:items="items" v-bind:user="user" />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <Auth v-bind:dialog_auth="dialog_auth" />
    <!-- <Status text="Test" multiLine /> -->
  </v-app>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";
import AuthComponent from "@/components/AuthComponent";
// import StatusComponent from "@/components/StatusComponent";

export default {
  name: "App",
  components: {
    Menu: MenuComponent,
    Auth: AuthComponent,
    // Status: StatusComponent,
  },

  data: () => ({
    dialog_auth: false,
    user: {
      username: "Ilya",
    },
    items: [
      { id: 1, title: "Статистика", icon: "mdi-eye-minus", link: "/" },
      { id: 2, title: "Очереди", icon: "mdi-clipboard-flow", link: "/queue" },
      { id: 3, title: "Пользователи", icon: "mdi-account-cog", link: "/users" },
    ],
  }),
};
</script>
