import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import firebaseConfig from '../helpers/apiKeys';
import { getStudents } from '../helpers/data/StudentData';
import StudentForm from '../components/StudentForm';
import StudentCard from '../components/StudentCard';
import './App.scss';

firebase.initializeApp(firebaseConfig);
function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <div className='App'>
      <StudentForm
      formTitle="Form Name"
      setStudents={setStudents}/>
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo}
          firebaseKey={studentInfo.firebaseKey}
          name={studentInfo.name}
          teacher={studentInfo.teacher}
          grade={Number(studentInfo.grade)}
          setStudents={setStudents}
          />
      ))};
    </div>
  );
}

export default App;
