import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { addStudent } from '../helpers/data/StudentData';

const StudentForm = ({ formTitle, setStudents }) => {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value === 'grade' ? Number(e.target.value) : e.target.value,

    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student).then((studentArray) => setStudents(studentArray));
  };

  return (
    <>
      <div className='student-form'>
        <form
        id='addStudentForm'
        autoComplete='off'
        onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
          <label>Name:</label>
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={student.name}
            onChange={handleInputChange}>
          </input>
          <label>Teacher:</label>
          <input
            name='teacher'
            type='text'
            placeholder='Teacher'
            value={student.teacher}
            onChange={handleInputChange}>
          </input>
          <label>Grade:</label>
          <input
            name='grade'
            type='number'
            placeholder='Grade'
            value={student.grade}
            onChange={handleInputChange}>
          </input>
          <button type='submit'>Submit</button>

        </form>
      </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setStudents: PropTypes.func
};

export default StudentForm;