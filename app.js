
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
			if (this.inputValue === '') {
				return undefined;
			}
			this.notes.push(this.inputValue);
			this.inputValue = '';
		},
		removeNote(i, evt) {
			this.notes.splice(i, 1);
		},
		toUpperCase(item) {
			return item.toUpperCase();
		}
	}
};

Vue.createApp(App).mount('#app');
