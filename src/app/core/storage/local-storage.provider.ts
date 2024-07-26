export class LocalStorageProvider<T> {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  setValue(value: string) {
    localStorage.setItem(this.key, value);
  }

  getValue(): T {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

}
