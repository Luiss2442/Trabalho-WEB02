import { useState } from 'react';

export default function Usuario() {
  const [usuario, setUsuario] = useState({
    apelido: '',
    email: '',
    dataNascimento: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Minhas Informações</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="apelido">
            Apelido
          </label>
          <input
            type="text"
            id="apelido"
            name="apelido"
            className="w-full px-3 py-2 border rounded-lg"
            value={usuario.apelido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg"
            value={usuario.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="dataNascimento">
            Data de Nascimento
          </label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            className="w-full px-3 py-2 border rounded-lg"
            value={usuario.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="senha">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="w-full px-3 py-2 border rounded-lg"
            value={usuario.senha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="confirmarSenha">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            className="w-full px-3 py-2 border rounded-lg"
            value={usuario.confirmarSenha}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 font-bold text-white py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}