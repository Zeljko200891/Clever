<template>
  <div class="wrapper">
    <div class="content">
      <div class="credentials-section">
        <div class="logo-container">
          <img src="../assets/imgs/logo.svg" alt="Logo" />
        </div>
        <h1 class="headline">Velkommen til <br>Selvbetjening Erhverv</h1>
        <form @submit.prevent="handleLogin">
          <p class="subtext">Log ind med din brugerkonto</p>
          <div class="label-container">
            <label class="label">Email *</label>
          </div>
          <input id="username" v-model="username" type="text" required placeholder="Email *"/>
          <div class="label-container">
            <label class="label">Adgangskode *</label>
          </div>
          <div class="password-container">
            <input id="password" :class="{ 'incorrect-password': errorMessage }" v-model="password" type="password" required placeholder="Adgangskode *"/>
            <p class="error-message" v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
          </div>
          <button type="submit">Log ind</button>
          <p class="subtext">Glemt adgangskode?</p>
      </form>
      </div>
    </div>
    <div class="image-divider" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      const success = await this.login({ username: this.username, password: this.password });
      if (!success) {
        this.errorMessage = 'Den e-mail eller adgangskode du har indtastet, er ugyldig. Prøv igen.';
      } else {
        this.errorMessage = '';
        this.$router.push('/about');
      }
    },
  },
};
</script>