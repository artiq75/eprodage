export function Cart({ cart, onRemove }) {
  return (
    <div className="cart">
      <h3 className="cart-title">Cart</h3>
      <div className="cart-content">
        {!cart.length ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.index}>
                  <CartItem item={item} onRemove={onRemove} />
                </li>
              ))}
            </ul>
            <button>Checkout</button>
          </>
        )}
      </div>
    </div>
  )
}

function CartItem({ item, onRemove }) {
  return (
    <article className="cart-item">
      <img
        className="cart-item__img"
        src="images/image-product-1-thumbnail.jpg"
        width={70}
        height={70}
        alt=""
      />
      <div className="cart-item__text">
        <h3>Fall Limited Edition Sneakers</h3>
        <p>
          $125.00 x{item.quantity} <strong>${125 * item.quantity}</strong>
        </p>
      </div>
      <img
        onClick={() => onRemove(item.index)}
        src="images/icon-delete.svg"
        alt=""
      />
    </article>
  )
}
