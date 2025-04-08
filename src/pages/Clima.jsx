import { useState } from 'react';

export default function Clima() {
  // Dados estáticos de clima para Guarapuava
  const [clima] = useState({
    cidade: 'Guarapuava',
    temperatura: '12°C',
    umidade: '78%',
    descricao: 'Chuvoso',
    vento: '15 km/h SE',
    pressao: '1012 hPa',
    icone: 'partly-cloudy-day'
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Clima em {clima.cidade}</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Temperatura</h3>
          <p className="text-3xl font-bold">{clima.temperatura}</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold text-orange-800">Umidade</h3>
          <p className="text-3xl font-bold">{clima.umidade}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4 text-center">
        <h3 className="font-semibold text-gray-800">Clima</h3>
        <p className="text-xl capitalize">{clima.descricao}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Vento</h3>
          <p className="text-xl">{clima.vento}</p>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Pressão</h3>
          <p className="text-xl">{clima.pressao}</p>
        </div>
      </div>
      
    </div>
  );
}