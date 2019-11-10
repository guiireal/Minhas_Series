import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import api from "../../config/api";

const EditGenre = ({ match: { params } }) => {

  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get(`/genres/${params.id}`);
      setName(data.name);
    };
    fetch();
  }, [params.id]);


  const handleUpdate = async event => {
    event.preventDefault();
    await api.put(`/genres/${params.id}`, { name });
    setSuccess(true);
  };

  if (success) return <Redirect to='/genres' />;

  return (
    <div className='container'>
      <h1>Editar Gênero</h1>
      <form className='mt-5'>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Nome do Gênero'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleUpdate}
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditGenre;