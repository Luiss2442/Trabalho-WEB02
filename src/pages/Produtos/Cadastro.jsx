import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CadastroProduto() {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    unidade: 'un',
    quantidade: 0,
    dataCadastro: new Date().toISOString().split('T')[0],
    ativo: true,
    valorUnitario: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduto({
      ...produto,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para salvar produto
    navigate('/produtos');
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="nome">
              Nome do Produto
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="w-full px-3 py-2 border rounded-lg"
              value={produto.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="unidade">
              Unidade
            </label>
            <select
              id="unidade"
              name="unidade"
              className="w-full px-3 py-2 border rounded-lg"
              value={produto.unidade}
              onChange={handleChange}
              required
            >
              <option value="un">Unidade</option>
              <option value="kg">Quilograma</option>
              <option value="g">Grama</option>
              <option value="l">Litro</option>
              <option value="ml">Mililitro</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            rows="3"
            className="w-full px-3 py-2 border rounded-lg"
            value={produto.descricao}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="quantidade">
              Quantidade em Estoque
            </label>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              min="0"
              className="w-full px-3 py-2 border rounded-lg"
              value={produto.quantidade}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="dataCadastro">
              Data de Cadastro
            </label>
            <input
              type="date"
              id="dataCadastro"
              name="dataCadastro"
              className="w-full px-3 py-2 border rounded-lg"
              value={produto.dataCadastro}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="valorUnitario">
              Valor Unitário (R$)
            </label>
            <input
              type="number"
              id="valorUnitario"
              name="valorUnitario"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border rounded-lg"
              value={produto.valorUnitario}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="ativo"
            name="ativo"
            className="mr-2"
            checked={produto.ativo}
            onChange={handleChange}
          />
          <label htmlFor="ativo">Produto ativo</label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
}