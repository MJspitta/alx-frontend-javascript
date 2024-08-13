export default function updateStudentGradeByCity(students, city, newGrades) {
  const sameCityList = students.filter((stud) => stud.location === city);
  const newStudentList = sameCityList.map((stud) => {
    const grades = newGrades.find((grade) => grade.studentId === stud.id);
    return { ...stud, grade: grades ? grades.grade : 'N/A' };
  });
  return newStudentList;
}
