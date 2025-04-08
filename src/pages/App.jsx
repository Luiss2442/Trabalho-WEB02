import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import Usuario from '../pages/Usuario';
import Clima from '../pages/Clima';
import ListaProdutos from './Produtos/Lista';
import CadastroProduto from './Produtos/Cadastro';
import EditarProduto from './Produtos/Editar';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Cabeçalho */}
        <Header />
        
        {/* Conteúdo Principal */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/clima" element={<Clima />} />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/produtos/cadastrar" element={<CadastroProduto />} />
            <Route path="/produtos/editar/:id" element={<EditarProduto />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Routes>
        </main>
        
        {/* Rodapé */}
        <Footer />
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada() {
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-bold text-red-600">404 - Página não encontrada</h2>
      <p className="mt-4">A página que você está procurando não existe.</p>
    </div>
  );
}