import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showDragon } from 'store/actions';

import { FaDragon, FaCalendarAlt, FaSuperpowers } from 'react-icons/fa';

import './index.css';

export default function DragonDetails({ location }) {
  const dispatch = useDispatch();
  const { name, type, createdAt } = useSelector((state) => state.dragon.dragon);
  const formatedDate = createdAt
    ? new Date(createdAt.toString()).toLocaleString('pt-BR')
    : null;

  useEffect(() => {
    dispatch(showDragon(location.state));
  }, [location.state.id]);

  return (
    <div className="main">
      <Link to="/list" className="addNew-button">
        Voltar para listagem
      </Link>
      <ul className="card details">
        <li>
          <span>
            <FaDragon className="icon" size={25} />
            Nome:
          </span>
          <span>{name}</span>
        </li>
        <li>
          <span className="text" style={{ marginRight: 10 }}>
            <FaCalendarAlt className="icon" size={25} />
            Criado em:
          </span>
          <span>{formatedDate}</span>
        </li>
        <li>
          <span>
            <FaSuperpowers className="icon" size={25} />
            Tipo:
          </span>
          <span>{type}</span>
        </li>
      </ul>
    </div>
  );
}
