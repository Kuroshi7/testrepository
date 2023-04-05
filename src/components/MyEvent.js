import React, { useState } from 'react';

const MyEvent = () => {
  const [mensagem, setMensagem] = useState('');

  const funcaoExecutada = () => {
    setMensagem('Botão clicado');
  };

  const funcaoExecutada2 = () => {
    setMensagem('Função online');
  };

  return (
    <div>
      <div>
        <button onClick={funcaoExecutada}>Clique aqui</button>
      </div>
      <div>
        <button onClick={funcaoExecutada2}>Clique aqui</button>
      </div>
      <div style={{ color: "yellow"}}>{mensagem}</div>
    </div>
  );
};

export default MyEvent;