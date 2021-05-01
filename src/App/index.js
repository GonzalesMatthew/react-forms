import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/StudentData';
import Routes from '../helpers/Routes';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  return (
    <>
        <NavBar />
        <Routes
          students={students}
          setStudents={setStudents}
        />
    </>
  );
}
export default App;
