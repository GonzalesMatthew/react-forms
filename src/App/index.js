import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import firebaseConfig from '../helpers/apiKeys';
import { getStudents } from '../helpers/data/StudentData';
import StudentForm from '../StudentForm';
import StudentCard from '../components/StudentCard';
import './App.scss';

firebase.initializeApp(firebaseConfig);
function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  console.warn(students);

  return (
    <div className='App'>
      <StudentForm formTitle="Form Name"/>
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard key={studentInfo}
          name={studentInfo.name}
          teacher={studentInfo.teacher}
          grade={Number(studentInfo.grade)}
          handleClick={() => console.warn(`${studentInfo.name}'s teacher is ${studentInfo.teacher}`)}
          />
      ))};
    </div>
  );
}

export default App;
