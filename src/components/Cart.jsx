export function Cart({ cart, onRemove }) {
  return (
    <div className="cart">
      <h3 className="cart-title">Cart</h3>
      <div className="seperator"></div>
      <>
        {!cart.length ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.index}>
                  <article className="cart-item">
                    <div className="cart-item__img">
                      <img
                        src="images/image-product-1-thumbnail.jpg"
                        width={70}
                        height={70}
                        alt=""
                      />
                    </div>
                    <div className="cart-item__text">
                      <h3>Fall Limited Edition Sneakers</h3>
                      <p>
                        $125.00 x{item.quantity}{' '}
                        <strong>${125 * item.quantity}</strong>
                      </p>
                    </div>
                    <button onClick={() => onRemove(item.index)} className="blank">
                      <img src="images/icon-delete.svg" alt="" />
                    </button>
                  </article>
                </li>
              ))}
            </ul>
            <button>Checkout</button>
          </>
        )}
      </>
    </div>
  )
}
