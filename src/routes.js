import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Usuario from './pages/Usuario';
import Clima from './pages/Clima';
import CadastroProduto from './pages/Produtos/Cadastro';
import ListaProdutos from './pages/Produtos/Lista';
import EditarProduto from './pages/Produtos/Editar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/usuario',
    element: <Usuario />,
  },
  {
    path: '/clima',
    element: <Clima />,
  },
  {
    path: '/produtos',
    element: <ListaProdutos />,
  },
  {
    path: '/produtos/cadastrar',
    element: <CadastroProduto />,
  },
  {
    path: '/produtos/editar/:id',
    element: <EditarProduto />,
  },
]);

export default router;