import { Link } from 'react-router-dom';
import { 
  FaUser,       // Ícone de usuário
  FaCloudSun,   // Ícone de clima
  FaBoxes,      // Ícone de produtos
  FaSignOutAlt, // Ícone de logout
  FaHome        // Ícone de home
} from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-red-200 flex items-center">
          <FaHome className="mr-2" /> {/* Ícone da Home */}
          <span className="hidden sm:inline">Trabalho Desenvolvimento Web02</span> {/* Texto escondido em mobile */}
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/usuario" 
                className="hover:text-red-200 text-2xl"
                title="Usuário"
              >
                <FaUser />
              </Link>
            </li>
            <li>
              <Link 
                to="/clima" 
                className="hover:text-red-200 text-2xl"
                title="Clima"
              >
                <FaCloudSun />
              </Link>
            </li>
            <li>
              <Link 
                to="/produtos" 
                className="hover:text-red-200 text-2xl"
                title="Produtos"
              >
                <FaBoxes />
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                className="hover:text-red-200 text-2xl"
                title="Sair"
              >
                <FaSignOutAlt />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}