class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : 'Default Name';
    this._length = typeof length === 'number' ? length : 0;
    this._students = Array.isArray(students) ? students : [];
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

  // Getter and setter for 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      console.error('Length must be a number.');
    }
  }

  // Getter and setter for 'students'
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      console.error('Students must be an array.');
    }
  }
}
