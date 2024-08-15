interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Madu",
  lastName: "Jang",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "James",
  lastName: "Beattie",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  firstNameCell.textContent = student.firstName;

  const locationCell = row.insertCell(1);
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
