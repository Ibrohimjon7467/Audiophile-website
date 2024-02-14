import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Cart({
  productCart, setProductCart,
  setQuantityCartItem, quantityCartItem,
  cartTotalPrice, setCartTotalPrice,
  setOpenCart,
}) {
  useEffect(() => {
    const allPriceProduct = [];
    productCart.map((item) => {
      allPriceProduct.push(item.price * item.quantity);
    });
    setCartTotalPrice(sum(allPriceProduct));
  });

  const handleDelete = (Id) => {
    const copyQuantityCart = quantityCartItem;
    const copy = [...productCart];

    let update = copy.filter(function (item) {
      return item.id !== Id;
    });
    let foundIndex = productCart.findIndex((x) => x.id == Id);
    let quantityToAddToCart = copyQuantityCart - productCart[foundIndex].quantity;
    setQuantityCartItem(quantityToAddToCart);
    setProductCart(update);
  };

  const handleAddQuantityFromCart = (id, y) => {
    const copyQuantityCart = [...productCart];
    let foundIndex = productCart.findIndex((x) => x.id == id);
    copyQuantityCart[foundIndex].quantity += y;
    setProductCart(copyQuantityCart);

    if (copyQuantityCart[foundIndex].quantity <= 1 && y === -1) {
      copyQuantityCart[foundIndex].quantity = 1;
      setProductCart(copyQuantityCart);
    }

    if (copyQuantityCart[foundIndex].quantity >= 20 && y === 1) {
      copyQuantityCart[foundIndex].quantity = 20;
      setProductCart(copyQuantityCart);
    }

    updateItemQuantityCart();
  };

  const updateItemQuantityCart = () => {
    const totalQuantityCartItem = [];
    productCart.map((item) => {
      totalQuantityCartItem.push(item.quantity);
    });
    setQuantityCartItem(sum(totalQuantityCartItem));
  };

  const resetCart = () => {
    setProductCart([]);
    setQuantityCartItem(0);
  };

  function sum(input) {
    if (toString.call(input) !== "[object Array]") {
      return false;
    }

    let total = 0;
    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        continue;
      }
      total += Number(input[i]);
    }
    return total;
  }

  if (productCart.length === 0) {
    return (
      <div className="cart">
        <div className="container-cart">
          <span>Your cart is empty</span>
          <img src="../../assets/icons/icon-cart-black.svg" alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <div className="container-cart">
          <div className="cart-header">
            <h3>CART({quantityCartItem})</h3>
            <span className="remove-all" onClick={resetCart}>
              Remove All
            </span>
          </div>

          <div className="container-all-products-cart">
            {productCart.map((product) => {
              return (
                <div className="cart-product">
                  <div className="img-infos-product">
                    <img src={product.cartImage} alt="" />
                    <div className="infos">
                      <span className="name">{product.shortName}</span>
                      <span className="price">${product.price}</span>
                    </div>
                  </div>

                  <div className="quantity-and-delete">
                    <div className="cart-quantity-product">
                      <button
                        onClick={() =>
                          handleAddQuantityFromCart(product.id, -1)
                        }
                      >
                        <img src="../../assets/icons/icon-minus.svg" alt="" />
                      </button>
                      <span className="quantity-product">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => handleAddQuantityFromCart(product.id, 1)}
                      >
                        <img src="../../assets/icons/icon-plus.svg" alt="" />
                      </button>
                    </div>
                    <img
                      onClick={() => handleDelete(product.id)}
                      src="../../assets/icons/icon-delete.svg"
                      alt=""
                      className="delete-item-cart"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-footer">
            <span>TOTAL</span>
            <div className="price-total">${cartTotalPrice}</div>
          </div>

          <NavLink to='/checkout'> <button onClick={() => setOpenCart(false)} className="btn-style1">CHECKOUT</button></NavLink>
        </div>
      </div>
    );
  }
}

export default Cart