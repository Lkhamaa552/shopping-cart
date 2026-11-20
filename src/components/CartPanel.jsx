// Cart sidebar: items, quantity controls, remove button and total
function CartPanel({ cart, onIncrease, onDecrease, onRemove, onClear }) {
  // Values computed from state, not stored separately
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <aside className="cart" aria-label="Shopping cart">
      <h2>Your Cart <span className="badge">{totalItems}</span></h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty. Add something from the list.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div>
                <p className="item-name">{item.name}</p>
                <p className="item-price">{(item.price * item.qty).toLocaleString()}원</p>
              </div>
              <div className="qty">
                <button type="button" aria-label={`Decrease ${item.name}`} onClick={() => onDecrease(item.id)}>−</button>
                <span>{item.qty}</span>
                <button type="button" aria-label={`Increase ${item.name}`} onClick={() => onIncrease(item.id)}>+</button>
              </div>
              <button type="button" className="remove" onClick={() => onRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <div className="total">
        <span>Total</span>
        <strong>{totalPrice.toLocaleString()}원</strong>
      </div>
      {cart.length > 0 && (
        <button type="button" className="clear" onClick={onClear}>Clear cart</button>
      )}
    </aside>
  );
}

export default CartPanel;