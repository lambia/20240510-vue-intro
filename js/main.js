const { createApp } = Vue
// vuol dire ===> const createApp = Vue.createApp;

const configurazione = {
	data() {
	  return {
		message: 'Hello Dynamic Vue World!',
		description: "lorem ipsum dolorem sit"
	  }
	}
};

let app = Vue.createApp(configurazione);

app.mount('#app');