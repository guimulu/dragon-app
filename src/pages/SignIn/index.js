import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'store/actions';

import banguela from 'assets/banguela.png';

import './index.css';

export default function SignIn() {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const error = useSelector((state) => state.auth.error);

  const handleUser = (event) => {
    setUser(event.target.value);
  };

  const handlePass = (event) => {
    setPass(event.target.value);
  };

  const handleSignIn = () => {
    dispatch(signIn(user, pass));
  };

  return (
    <>
      <div className="main">
        <form className="card" onSubmit={handleSignIn}>
          <input
            placeholder="Usuário"
            type="text"
            value={user}
            onChange={handleUser}
            autoComplete="off"
          />
          <input
            placeholder="Senha"
            type="password"
            value={pass}
            onChange={handlePass}
            autoComplete="off"
          />
          <button className="signIn-button" type="submit">
            Acessar
          </button>
          {error && <h3>Usuário ou senha inválido</h3>}
        </form>
      </div>
      <img src={banguela} alt="banguela" />
    </>
  );
}
