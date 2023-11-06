
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
	},
	computed: {
		doubleCountComputed() {
			return this.notes.length * 2;
		},
	},
	watch: {
		inputValue(value) {
			if (value.length > 10) {
				this.inputValue = '';
			}
		}
	}
};

Vue.createApp(App).mount('#app');
