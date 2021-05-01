import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/StudentData';

export default function SingleStudent() {
  const { firebaseKey } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {
    getSingleStudent(firebaseKey)
      .then(setStudent);
  }, []);

  return (
    <div>
      <h1>Single Student</h1>
      <h2>{student.name}</h2>
      <h3>{student.teacher}</h3>
      <h3>{student.grade}</h3>
    </div>
  );
}
