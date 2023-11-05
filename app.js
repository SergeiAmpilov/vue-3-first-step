
const App = {
	data() {
		return {
			inputValue: '',
			placeholderString: 'Введите название заметки',
			title: 'Список заметок'
		};
	},
	methods: {
		inputChangeHandler(evt) {
			this.inputValue = evt.target.value;
		}
	}
};

Vue.createApp(App).mount('#app');
