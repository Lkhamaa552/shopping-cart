// Shows every product with an "Add to cart" button
function ProductList({ products, cart, onAdd }) {
  return (
    <section className="product-list" aria-label="Products">
      {products.map((product) => {
        const inCart = cart.find((item) => item.id === product.id);
        return (
          <article key={product.id} className="product">
            <img src={product.image} alt={product.name} width="400" height="300" loading="lazy" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price.toLocaleString()}원</p>
              <button type="button" className="add-btn" onClick={() => onAdd(product)}>
                {inCart ? `Add one more (${inCart.qty} in cart)` : 'Add to cart'}
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default ProductList;