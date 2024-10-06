import StudentData from "./StudentData";

function StudentTable({ students, removeStudent }) {
  return (
    <table className="table table-bordered table-hover mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* {students.map((student) =>  } */}
        {students.map((student) => (
          <StudentData
            key={student.id}
            student={student}
            removeStudent={removeStudent}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
