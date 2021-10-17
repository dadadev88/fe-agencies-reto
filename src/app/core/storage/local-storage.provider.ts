export class LocalStorageProvider {
	private itemLS: string;

	constructor(item: string) {
		this.itemLS = item;
	}

	setValue<T>(value: any) {
		localStorage.setItem(this.itemLS, value);
	}

	getValue<T>() {
		return localStorage.getItem(this.itemLS);
	}
	
}