import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createDragon, resetDragon } from 'store/actions';

import './index.css';

export default function DragonAdd() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const { error, success } = useSelector((state) => state.dragon);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleAddNew = (event) => {
    dispatch(createDragon(name, type));
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(resetDragon());
  }, []);

  return (
    <div className="main">
      <Link to="/list" className="addNew-button">
        Voltar para listagem
      </Link>
      <form className="card" onSubmit={handleAddNew}>
        <input
          placeholder="Nome"
          type="text"
          value={name}
          onChange={handleName}
        />
        <input
          placeholder="Tipo"
          type="text"
          value={type}
          onChange={handleType}
          autoComplete="off"
        />
        <button className="signIn-button" type="submit">
          Cadastrar
        </button>
        {error && (
          <h3 className="error">Erro ao criar novo dragão, tente novamente.</h3>
        )}
        {success && <h3 className="success">Dragão cadastrado com sucesso!</h3>}
      </form>
    </div>
  );
}
