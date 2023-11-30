export default class Currency {
  constructor(code, name) {
    this._code = typeof code === 'string' ? code : 'Default Code';
    this._name = typeof name === 'string' ? name : 'Default Name';
  }

  // Getter and setter for 'code'
  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      console.error('Code must be a string.');
    }
  }

  // Getter and setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      console.error('Name must be a string.');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
