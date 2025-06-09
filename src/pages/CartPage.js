import "../Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const parsePrice = (price) => {
    const numeric = parseFloat(String(price).replace(/\$/g, ""));
    return isNaN(numeric) ? 0 : numeric;
  };

  const total = cartItems
    .reduce((sum, item) => sum + parsePrice(item.price), 0)
    .toFixed(2);

  return (
    <div className="cart-page container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. 🛒</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div>
                  <strong>{item.name}</strong> – ${parsePrice(item.price).toFixed(2)}
                </div>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>
              <strong>Total:</strong> ${total}
            </p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
