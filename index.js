var EasyLocalStorage = (function () {
	function EasyLocalStorage(prefix) {
		if (prefix === void 0) {
			prefix = '';
		}
		this.prefix = prefix;
	}

	EasyLocalStorage.prototype.set = function (key, value, prefix) {
		if (prefix === void 0) {
			prefix = this.prefix;
		}
		EasyLocalStorage.set(key, value, prefix);
	};
	EasyLocalStorage.set = function (key, value, prefix) {
		if (prefix === void 0) {
			prefix = '';
		}
		try {
			localStorage.setItem(prefix + key, JSON.stringify(value));
			return true;
		}
		catch (e) {
			return false;
		}
	};
	EasyLocalStorage.prototype.get = function (key, prefix) {
		if (prefix === void 0) {
			prefix = this.prefix;
		}
		return EasyLocalStorage.get(key, prefix);
	};
	EasyLocalStorage.get = function (key, prefix) {
		if (prefix === void 0) {
			prefix = '';
		}
		var str = localStorage.getItem(prefix + key);
		if (!str) {
			return null;
		}
		return JSON.parse(str);
	};
	EasyLocalStorage.prototype.remove = function (key, prefix) {
		if (prefix === void 0) {
			prefix = this.prefix;
		}
		EasyLocalStorage.remove(key, prefix);
	};
	EasyLocalStorage.remove = function (key, prefix) {
		if (prefix === void 0) {
			prefix = '';
		}
		localStorage.removeItem(prefix + key);
	};
	EasyLocalStorage.prototype.clear = function (prefix) {
		if (prefix === void 0) {
			prefix = this.prefix;
		}
		EasyLocalStorage.clear(prefix);
	};
	EasyLocalStorage.clear = function (prefix) {
		if (prefix === void 0) {
			prefix = '';
		}
		if (prefix === '') {
			localStorage.clear();
			return;
		}
		var keys = EasyLocalStorage.getKeys(prefix);
		keys.forEach(function (key) {
			EasyLocalStorage.remove(key, prefix);
		});
	};
	EasyLocalStorage.prototype.getKeys = function (prefix) {
		if (prefix === void 0) {
			prefix = this.prefix;
		}
		return EasyLocalStorage.getKeys(prefix);
	};
	EasyLocalStorage.getKeys = function (prefix) {
		if (prefix === void 0) {
			prefix = '';
		}
		var keys = [];
		for (var i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			if (key.substring(0, prefix.length) != prefix) {
				continue;
			}
			keys.push(key.substring(prefix.length));
		}
		return keys;
	};
	return EasyLocalStorage;
})();
module.exports = EasyLocalStorage;
