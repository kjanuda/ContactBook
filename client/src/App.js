import React, { useState } from 'react';
import axios from "axios";
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');
  const [viewName, setViewName] = useState('');
  const [viewPhone, setViewPhone] = useState('');

const addNewNumber = () => {
  axios
     .post('http://localhost:8080/new-phone', {name, phone})
     .then((response) => {
         console.log('New Number Added');
     })

     .catch ((error) => {
      console.log(error);
      });
  };

  const updateNumber = () => {
    axios
    .put(`http://localhost:8080/update-phone/${id}`, { name, phone})
    .then((response) => {
        console.log('Number Updated');
    })

    .catch ((error) => {
     console.log(error);
     });
 };

 const viewNumber = () => {
     axios
     .get(`http://localhost:8080/view-phone/${id}`, {name, phone})
     .then((response) => {
       const {name, phone } = response.data;
       setViewName(name);
       setViewPhone(phone);
       console.log('Number retrieved:', name, phone);
     })
     .catch ((error) => {
      console.log(error);
      });
  };

  const deleteNumber = () => {
    axios
    .delete(`http://localhost:8080/delete-phone/${id}`)
    .then((response) => {
        console.log('Number Deleted');
    })

    .catch ((error) => {
     console.log(error);
     });
 };

return (
   <div className="container">
    <center>
      <h1 className="heading">Phone Book</h1>
    </center>
    <div className="from-container">
      <div className="input-container">
           <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="input"
              />
              <input
                 type="text"
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                 placeholder="Phone"
                 className="input"
                 />
                 <div className="button-container">
                  <button className="button" onClick={() =>addNewNumber()}>
                    ADD Phone
                  </button>
                 </div>
                </div>
                <div className="input-cotainer">
                   <input
                       type="text"
                       value={id}
                       onChange={(e) => setId(e.target.value)}
                       placeholder="ID"
                       className="input"
                      />
                    <div className="button-container">
                      <button className="button" onClick={() =>updateNumber()}>
                        Update Phone
                      </button>
                      <button className="Vbutton" onClick={() =>viewNumber()}>
                        View Phone
                      </button>
                    
                      <button className="Dbutton" onClick={() =>deleteNumber()}>
                        Delete Phone
                      </button>
                    </div>
                </div>
                <div className="view-container">
                  <p>Viewed Name: {viewName}</p>
                  <p>Viewed Phone: {viewPhone}</p>
                </div>
               </div>
              </div>
             );

  }

 export default App;
