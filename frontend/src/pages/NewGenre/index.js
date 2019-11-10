import React, { useState } from 'react';
import api from '../../config/api';
import { Redirect } from 'react-router-dom';

const NewGenre = () => {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSave = async event => {
    event.preventDefault();
    await api.post('/genres', { name });
    setSuccess(true);
  };

  if (success) return <Redirect to='/genres' />;
  return (
    <div className='container'>
      <h1>Novo Gênero</h1>
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
          onClick={handleSave}
        >
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NewGenre;