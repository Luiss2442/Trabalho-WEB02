import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function EditarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const mockProdutos = [
    {
      id: 1,
      nome: '',
      descricao: '',
      unidade: 'n',
      quantidade: 0,
      dataCadastro: '',
      ativo: false,
      valorUnitario: 0
    },
  ];

  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    unidade: 'un',
    quantidade: 0,
    dataCadastro: '',
    ativo: true,
    valorUnitario: 0
  });

  useEffect(() => {
    const produtoEncontrado = mockProdutos.find(p => p.id === parseInt(id));
    if (produtoEncontrado) {
      setProduto(produtoEncontrado);
    } else {
      alert('Produto não encontrado!');
      navigate('/produtos');
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduto({
      ...produto,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log('Produto atualizado:', produto);
    
    
    alert('Produto atualizado com sucesso!');
    navigate('/produtos');
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Editar Produto</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coluna 1 */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                value={produto.nome}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Descrição</label>
              <textarea
                name="descricao"
                value={produto.descricao}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Unidade</label>
              <select
                name="unidade"
                value={produto.unidade}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="un">Unidade (un)</option>
                <option value="kg">Quilograma (kg)</option>
                <option value="g">Grama (g)</option>
                <option value="l">Litro (l)</option>
                <option value="ml">Mililitro (ml)</option>
              </select>
            </div>
          </div>
          
          {/* Coluna 2 */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Estoque</label>
              <input
                type="number"
                name="quantidade"
                value={produto.quantidade}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:red-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Valor Unitário (R$)</label>
              <input
                type="number"
                name="valorUnitario"
                value={produto.valorUnitario}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 font-medium">Data de Cadastro</label>
              <input
                type="date"
                name="dataCadastro"
                value={produto.dataCadastro}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                name="ativo"
                checked={produto.ativo}
                onChange={handleChange}
                className="h-5 w-5 text-red-600 rounded focus:ring-red-500 mr-2"
                id="ativo"
              />
              <label htmlFor="ativo" className="text-gray-700 font-medium">
                Status Ativo
              </label>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={() => navigate('/produtos')}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-200"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
}