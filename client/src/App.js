import React, { useState } from 'react';
import Axios from "axios";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom'
const URL = "http://localhost:3001/api/register"; //Post pro register
const URLUser = "http://localhost:3001/api/usernamech"; //Post pro name checker
var error;





function App() {
  const [Username, SetUsername] = useState("");
  const [Password, SetPassowrd] = useState("");
  const history = useHistory();
  const [session, Setsession] = useState(
    sessionStorage.getItem("user") || ''
  );
  React.useEffect(() => {
    sessionStorage.setItem("user", session);
  }, [session]);


  const Submit = (e) => {
    if (error === false) {
      Setsession(Username);
      Axios.post(URL, {
        Username: Username,
        Password: Password
      }).then((res) => {
        if (res.data === true) {
          history.push("/user");
        }
      });
    }
  }




  const UsernameSet = (e) => {
    SetUsername(e.target.value);
    Axios.post(URLUser, {
      Username: e.target.value
    }).then((res) => {
      error = res.data.error;
      const message = document.getElementById("message");
      const button = document.getElementById("button");
      message.innerText = res.data.message;
      if (res.data.error === null) {
        button.className = "btn btn-secondary mt-3"
      } else if (res.data.error === true) {
        button.className = "btn btn-danger mt-3"
      } else {
        button.className = "btn btn-success mt-3"
      }
    });
  }

  const PasswordSet = (e) => {
    SetPassowrd(e.target.value);
  }
  return (
    <div className="w-50 text-center mt-5 pt-2">
      <div class="form-group">
        <h1>NapicuReact</h1>
      </div>
      <div class="form-group">
        <label>Jméno</label>
        <input type="text" class="form-control" onChange={UsernameSet} />
        <p id="message"></p>
      </div>
      <div class="form-group">
        <label>Heslo</label>
        <input type="text" class="form-control" onChange={PasswordSet} />
        <button class="btn btn-secondary mt-3" id="button" onClick={Submit}>Registrovat</button>
      </div>
    </div>
  );
}

export default App;
