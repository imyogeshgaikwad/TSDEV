import "./App.css";
import { Counter } from "./components/Counter";
import CartList from "./components/CartList";
import type { Cart } from "./types";
import { OrderForm } from "./components/OrderForm";

function App() {
  const cart: Cart[] = [
    { id: 1, name: "Headphones", price: 800 },
    { id: 2, name: "Keyboard", price: 120 },
    { id: 3, name: "Mouse", price: 40 },
  ];

  function handleOrderSubmit(order: { name: string; carts: number }) {
    console.log("Order received:", order);
  }

  return (
    <div>
      <Counter />
      <CartList items={cart} />
      <OrderForm onSubmit={handleOrderSubmit} />
    </div>
  );
}

export default App;
