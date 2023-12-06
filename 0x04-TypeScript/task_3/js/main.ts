// main.ts

// Triple-slash directive to include dependencies from crud.d.ts
/// <reference path=".///js/crud.d.ts" />

// Import RowID and RowElement types from interface.ts
import { RowID, RowElement } from './interface';

// Import CRUD functions from crud.js
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert row and get the new RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${row}`);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`CRUD.updateRow(newRowID, updatedRow)\n// Update row ${newRowID} ${updatedRow}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID})\n// Delete row id ${newRowID}`);
