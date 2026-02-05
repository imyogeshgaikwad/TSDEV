type CartCardProps = {
  name: string
  price: number
  isSpecial?: boolean
}

export function CartCard({ name, price, isSpecial = false }: CartCardProps) {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span>👍</span>}
      </h2>
      <p>€{price}</p>
    </article>
  )
}
