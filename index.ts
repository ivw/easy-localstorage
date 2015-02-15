class EasyLocalStorage {

	constructor(private prefix:string = '') {

	}

	public set(key:string, value:any, prefix:string = this.prefix):boolean {
		return EasyLocalStorage.set(key, value, prefix);
	}

	public static set(key:string, value:any, prefix:string = ''):boolean {
		try {
			localStorage.setItem(prefix + key, JSON.stringify(value));
			return true;
		} catch (e) {
			return false;
		}
	}

	public get(key:string, prefix:string = this.prefix):any {
		return EasyLocalStorage.get(key, prefix);
	}

	public static get(key:string, prefix:string = ''):any {
		var str:string = localStorage.getItem(prefix + key);
		if (!str) {
			return null;
		}
		return JSON.parse(str);
	}

	public remove(key:string, prefix:string = this.prefix):void {
		EasyLocalStorage.remove(key, prefix);
	}

	public static remove(key:string, prefix:string = ''):void {
		localStorage.removeItem(prefix + key);
	}

	public clear(prefix:string = this.prefix):void {
		EasyLocalStorage.clear(prefix);
	}

	public static clear(prefix:string = ''):void {
		if (prefix === '') {
			localStorage.clear();
			return;
		}

		var keys:string[] = EasyLocalStorage.getKeys(prefix);
		keys.forEach((key:string) => {
			EasyLocalStorage.remove(key, prefix);
		});
	}

	public getKeys(prefix:string = this.prefix):string[] {
		return EasyLocalStorage.getKeys(prefix);
	}

	public static getKeys(prefix:string = ''):string[] {
		var keys:string[] = [];
		for (var i = 0; i < localStorage.length; i++) {
			var key:string = localStorage.key(i);
			if (key.substring(0, prefix.length) != prefix) {
				continue;
			}
			keys.push(key.substring(prefix.length));
		}
		return keys;
	}

}

export = EasyLocalStorage;
