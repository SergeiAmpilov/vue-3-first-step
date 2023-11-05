
const App = {
	data() {
		return {
			inputValue: '',
			placeholderString: 'Введите название заметки',
			title: 'Список заметок',
			notes: ['note 1', 'note 2']
		};
	},
	methods: {
		inputChangeHandler(evt) {
			this.inputValue = evt.target.value;
		},
		addNewNote() {
			this.notes.push(this.inputValue);
			this.inputValue = '';
		},
		removeNote(i, evt) {
			this.notes = this.notes.filter((val, index) => index !== i)

		}
	}
};

Vue.createApp(App).mount('#app');
