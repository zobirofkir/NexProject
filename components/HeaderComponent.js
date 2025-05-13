export default function HeaderComponent() {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyShop</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-blue-500">Features</a></li>
            <li><a href="#products" className="hover:text-blue-500">Products</a></li>
            <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  