import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateDragon, resetDragon, showDragon } from 'store/actions';

import './index.css';

export default function DragonEdit({ location }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const { errorEdit, successEdit, dragon } = useSelector(
    (state) => state.dragon
  );

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  const handleUpdateDragon = (event) => {
    dispatch(
      updateDragon(location.state, name || dragon.name, type || dragon.type)
    );
    event.preventDefault();
  };

  useEffect(() => {
    dispatch(resetDragon());
    dispatch(showDragon(location.state));
  }, [location.state.id]);

  return (
    <div className="main">
      <Link to="/list" className="addNew-button">
        Voltar para listagem
      </Link>
      <form className="card" onSubmit={handleUpdateDragon}>
        <input
          placeholder="Nome"
          type="text"
          value={name || dragon.name}
          onChange={handleName}
        />
        <input
          placeholder="Tipo"
          type="text"
          value={type || dragon.type}
          onChange={handleType}
        />
        <button className="signIn-button" type="submit">
          Salvar Alteração
        </button>
        {errorEdit && (
          <h3 className="error">Erro ao editar o dragão, tente novamente.</h3>
        )}
        {successEdit && (
          <h3 className="success">Dragão editado com sucesso!</h3>
        )}
      </form>
    </div>
  );
}
