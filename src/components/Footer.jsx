export default function Footer() {
    return (
      <footer className="bg-red-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Desenvolvimento Aplicativo em React + TailWind. </p>
        </div>
      </footer>
    );
  }