// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Lewis",
  lastName: "Hamilton",
  age: 38,
  location: "London",
};

const student2: Student = {
  firstName: "Charles",
  lastName: "Leclerc",
  age: 24,
  location: "Monaco",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Create a table and render student data
function renderTable() {
  const table = document.createElement("table");
  
  // Create table header
  const headerRow = table.insertRow();
  const header1 = headerRow.insertCell();
  header1.textContent = "First Name";
  const header2 = headerRow.insertCell();
  header2.textContent = "Location";

  // Iterate through studentsList and add rows to the table
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell();
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

// Call the function to render the table
renderTable();
