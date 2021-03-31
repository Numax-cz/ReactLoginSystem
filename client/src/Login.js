import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { URLLoginPage } from "./App";
import Axios from "axios";
export default function Login() {
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
    try {
      Axios.post(URLLoginPage, {
        Username: Username,
        Password: Password
      }).then((res) => {
        if (res.data === true) {
          Setsession(Username);
          history.push("/user");
        } else {
          alert("Přístup odepřen")
        }
      });
    } catch (e) {
      console.error(e);
    }
  }
  
  if (session !== '') {
    history.push("/user");
  }

  const UsernameSet = (e) => {
    SetUsername(e.target.value)
  }

  const PasswordSet = (e) => {
    SetPassowrd(e.target.value);
  }


  return (
    <div className="w-50 text-center mt-5 pt-2">
      <div class="form-group">
        <h1>Login</h1>
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
      <div>
        <a href="/">Ještě nemáte účet?</a>
      </div>

    </div>

  )
}