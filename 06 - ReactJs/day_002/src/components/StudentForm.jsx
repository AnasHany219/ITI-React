import React, { useState } from "react";
import StudentTable from "./StudentTable";

const StudentForm = () => {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [error, setError] = useState({ name: "", age: "" });

  const addStudent = () => {
    let nameError = "";
    let ageError = "";

    if (name.length <= 3) nameError = "Name length should be > 3";
    if (!age || age <= 18) ageError = "Age is required and should be > 18";

    if (nameError || ageError) {
      setError({ name: nameError, age: ageError });
      return;
    }

    setStudents([...students, { id: students.length + 1, name, age }]);

    setAge("");
    setName("");
    setError({ name: "", age: "" });
  };

  const removeStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Enter Student Information</h3>
      <div className="form-group">
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`form-control ${error.name ? "is-invalid" : ""}`}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>

      <div className="form-group mt-3">
        <label>Student Age</label>
        <input
          type="number"
          placeholder="Enter Student Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={`form-control ${error.age ? "is-invalid" : ""}`}
        />
        {error.age && <p style={{ color: "red" }}>{error.age}</p>}
      </div>

      <button className="btn btn-primary mt-3" onClick={addStudent}>
        Add Student
      </button>

      {students.length > 0 && (
        <StudentTable students={students} removeStudent={removeStudent} />
      )}
    </div>
  );
};

export default StudentForm;
