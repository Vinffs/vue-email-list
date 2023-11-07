const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],

      apiUrl: `https://flynn.boolean.careers`,
      apiExercises: `/exercises/api`,
      emailExercise: `/random/mail`,
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get(`${this.apiUrl}${this.apiExercises}${this.emailExercise}`)
        .then((response) => this.emails.push(response.data.response));
    }
  },
}).mount("#app");
