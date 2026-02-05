import type { Cart } from "../types";
import { CartCard } from "./CartCard";

interface CartListProps {
  items: Cart[];
}

export default function CartList({ items }: CartListProps) {
  return (
    <div>
      {items.map((cart) => (
        <CartCard
          key={cart.id}
          name={cart.name}
          price={cart.price}
          isSpecial={cart.price > 100}
        />
      ))}
    </div>
  );
}
