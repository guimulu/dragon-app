import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDragons, deleteDragon, updateDragon } from 'store/actions';
import { FaEye, FaTrash, FaRegEdit } from 'react-icons/fa';

import './index.css';

const DragonList = () => {
  const dispatch = useDispatch();
  const { dragons, error, success } = useSelector((state) => state.dragonList);

  useEffect(() => {
    dispatch(getDragons());
  }, []);

  const onDeleteDragon = (id) => {
    dispatch(deleteDragon(id));
  };

  return (
    <div className="container-list">
      <Link to="/new" className="addNew-button">
        Adicionar novo dragāo
      </Link>

      {dragons.length > 0 ? (
        <ul className="list">
          {dragons.map((dragon) => (
            <li className="list" key={dragon.id}>
              <span className="dragon-name">{dragon.name}</span>
              <Link
                to={{
                  pathname: `/details/${dragon.id}`,
                  state: dragon.id,
                }}
              >
                <FaEye className="icon" size={25} />
              </Link>
              <FaTrash
                className="icon"
                size={25}
                onClick={() => onDeleteDragon(dragon.id)}
              />
              <Link
                to={{
                  pathname: `/edit/${dragon.id}`,
                  state: dragon.id,
                }}
              >
                <FaRegEdit className="icon" size={25} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="error">
          Ainda não existem dragões, tente adicionar um novo!
        </h3>
      )}
    </div>
  );
};

export default DragonList;
