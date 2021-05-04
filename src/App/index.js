import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/StudentData';
import Routes from '../helpers/Routes';
import firebaseConfig from '../helpers/apiKeys';

firebase.initializeApp(firebaseConfig);

function App() {
  const [students, setStudents] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getStudents().then((resp) => setStudents(resp));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // something to happen
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar
        user={user}
      />
      <Routes
        students={students}
        setStudents={setStudents}
      />
    </>
  );
}
export default App;
