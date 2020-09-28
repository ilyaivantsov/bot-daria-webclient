<template>
  <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-avatar
          class="accent white--text"
          left
          v-text="user.username.slice(0, 1).toUpperCase()"
        >
        </v-avatar>
      </v-list-item-avatar>
      <v-list-item-title>{{ user.username }}</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.id" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MenuComponent",
  props: ["items", "user"],
  data: () => ({
    drawer: true,
    mini: true,
  }),
};
</script>