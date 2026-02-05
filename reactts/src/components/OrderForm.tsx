import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; carts: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState("V1");
  const [carts, setCarts] = useState(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, carts });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="carName">Car Name</label>
        <input
          id="carName"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="carCarts">Car Cart</label>
        <input
          id="carCarts"
          name="carts"
          type="number"
          min={0}
          value={carts}
          required
          onChange={(e) => setCarts(Number(e.target.value))}
        />
      </div>

      <button type="submit">Place Order</button>
    </form>
  );
}
