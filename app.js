
const App = {
	data() {
		return {
			placeholderString: 'Введите название заметки',
			title: 'Список заметок'
		};
	},
};

Vue.createApp(App).mount('#app');
