<template>
  <v-row justify="center">
    <v-dialog v-model="dialog_auth" persistent max-width="600px">
      <v-card class="elevation-12">
        <v-toolbar
          color="primary"
          dark
          flat
          src="https://picsum.photos/600/100?random"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
            >
            </v-img>
          </template>
          <v-toolbar-title>Авторизация</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                href="mailto:iivantsov11@gmail.com"
                icon
                large
                target="_blank"
                v-on="on"
              >
                <v-icon>mdi-progress-question</v-icon>
              </v-btn>
            </template>
            <span>Задать вопрос</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              label="Логин"
              name="login"
              prepend-icon="mdi-account"
              type="text"
            >
            </v-text-field>

            <v-text-field
              v-model="password"
              id="password"
              label="Пароль"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">Войти</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["dialog_auth"],
  data: () => ({
    username: "",
    password: null,
  }),
  methods: {
    login() {},
  },
};
</script>

<style>
</style>