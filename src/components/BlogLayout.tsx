export default function BlogLayout({ children }) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-5">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold">My Blog</h1>
            <p className="text-lg">Sharing knowledge and stories</p>
          </div>
        </header>
        {/* Conteúdo principal flexível */}
        <main className="flex-grow container mx-auto p-5">
          {children}
        </main>
        {/* Footer fixo no final */}
        <footer className="bg-blue-600 text-white p-5">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 My Blog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
  