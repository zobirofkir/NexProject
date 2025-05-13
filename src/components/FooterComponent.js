export default function FooterComponent() {
    return (
      <footer className="dark:bg-black bg-white  dark:text-white text-black text-center py-6">
        <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </footer>
    );
  }
  