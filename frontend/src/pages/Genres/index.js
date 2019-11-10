import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../config/api';

const Genres = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data: { data } } = await api.get('/genres');
      setData(data);
    };
    fetch();
  }, []);

  const deleteGenre = async id => {
    await api.delete(`/genres/${id}`);
    const filteredData = data.filter(item => item.id !== id);
    setData(filteredData);
  };

  const renderLine = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button className='btn btn-danger mr-2' onClick={() => {deleteGenre(record.id)}}>Remover</button>
          <Link to={`/genres/${record.id}`} className='btn btn-warning'>Editar</Link>
        </td>
      </tr>
    );
  };

  if (data.length === 0)
    return (
      <div className='container'>
        <h1>Gêneros</h1>
        <Link to='/genres/create' className='btn btn-primary'>Novo Gênero</Link>
        <div className='alert alert-warning' role='alert'>
          Você não possui gêneros criados.
        </div>
      </div>
    );

  return (
    <div className='container'>
      <h1>Gêneros</h1>
      <Link to='/genres/create' className='btn btn-primary mt-4'>Novo Gênero</Link>
      <table className='table table-dark mt-2'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderLine)}
        </tbody>
      </table>
    </div>
  );
};

export default Genres;