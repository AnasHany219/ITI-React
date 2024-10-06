function StudentData({ student, removeStudent }) {
  return (
    <tr key={student.id}>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td className="d-flex justify-content-center">
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removeStudent(student.id)}
        >
          Remove Student
        </button>
      </td>
    </tr>
  );
}

export default StudentData;
