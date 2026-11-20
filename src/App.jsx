import ShoppingCart from './components/ShoppingCart';
import products from './products';

function App() {
  return (
    <main className="app">
      <header>
        <h1>Mini Shop</h1>
        <p className="subtitle">Week 12 homework | React State (useState) | Aranjmaa Lkhamaa</p>
      </header>
      <ShoppingCart products={products} />
    </main>
  );
}

export default App;