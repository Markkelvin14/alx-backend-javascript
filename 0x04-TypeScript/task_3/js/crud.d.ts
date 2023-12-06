// crud.d.ts

// Import RowID and RowElement types from interface.ts
import { RowID, RowElement } from '../interface';

// Declare type definitions for crud.js functions
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
