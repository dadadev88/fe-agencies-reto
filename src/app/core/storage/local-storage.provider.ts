export class LocalStorageProvider<T> {
	private itemLS: string;

	constructor(item: string) {
		this.itemLS = item;
	}

	setValue(value: string) {
		localStorage.setItem(this.itemLS, value);
	}

	getValue(): T {
		return JSON.parse(localStorage.getItem(this.itemLS) || '[]');
	}
	
}