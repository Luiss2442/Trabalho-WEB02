import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {

    const mockProdutos = [
      {
        id: 1,
        nome: 'Dark Souls 1',
        descricao: 'Videogame para Playstation 4',
        unidade: 'un',
        quantidade: 10,
        dataCadastro: '2023-01-15',
        ativo: true,
        valorUnitario: 110.25,
      },

      {
        id: 2,
        nome: 'Booster Magic the Gathering',
        descricao: 'Booster Colecionador',
        unidade: 'un',
        quantidade: 5,
        dataCadastro: '2023-02-20',
        ativo: true,
        valorUnitario: 180.99,
      },

      {
        id: 3,
        nome: 'Roupa Pikachu',
        descricao: 'Roupa em algodão',
        unidade: 'un',
        quantidade: 20,
        dataCadastro: '2023-02-22',
        ativo: true,
        valorUnitario: 50.00,
      },
      {
        id: 4,
        nome: 'Console Xbox360',
        descricao: 'Console de videogame',
        unidade: 'un',
        quantidade: 3,
        dataCadastro: '2023-02-23',
        ativo: true,
        valorUnitario: 1440.00,
      },
      {
        id: 5,
        nome: 'Teclado Logitech',
        descricao: 'Teclado linha Gamer Logitech',
        unidade: 'un',
        quantidade: 15,
        dataCadastro: '2023-02-23',
        ativo: true,
        valorUnitario: 125.60,
      },

    ];
    setProdutos(mockProdutos);
  }, []);

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Lista de Produtos</h2>
        <Link
          to="/produtos/cadastrar"
          className="bg-orange-500 font-bold text-white py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Novo Produto
        </Link>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Filtrar por nome:</label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Digite para filtrar..."
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 text-left">Nome</th>
              <th className="py-2 px-4 text-left">Descrição</th>
              <th className="py-2 px-4 text-left">Estoque</th>
              <th className="py-2 px-4 text-left">Valor</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((produto) => (
                <tr key={produto.id} className="border-b">
                  <td className="py-2 px-4">{produto.nome}</td>
                  <td className="py-2 px-4">{produto.descricao}</td>
                  <td className="py-2 px-4">
                    {produto.quantidade} {produto.unidade}
                  </td>
                  <td className="py-2 px-4">
                    R$ {produto.valorUnitario.toFixed(2)}
                  </td>
                  <td className="py-2 px-4">
                    {produto.ativo ? (
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                        Ativo
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                        Inativo
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    <Link
                      to={`/produtos/editar/${produto.id}`}
                      className="text-red-500 hover:text-red-700 mr-2"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">
                  Nenhum produto encontrado
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}