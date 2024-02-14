import { NavLink } from "react-router-dom";

function CartValided({ grandTotalPrice, productCart, setQuantityCartItem, setProductCart, setCartTotalPrice }) {
  const reset = () => {
    setProductCart([])
    setCartTotalPrice(0)
    setQuantityCartItem(0)
  }

  return (
    <>
      <div className="backgroundOpacity"></div>
      <div className="cart-valided">
        <div className="container">
          <img src="../assets/icons/icon-check-mark.svg" alt="image" />
          <h1>THANK YOU FOR YOUR ORDER</h1>
          <p>You will receive an email confirmation shortly.</p>
          <div className="recapitulatif">
            <div className="products">
              {productCart.map((item) => {
                return (
                  <div className="infos-item" key={item.id}>
                    <div className="img-name-price">
                      <img src={item.cartImage} alt="" />
                      <div className="name-price">
                        <h5>{item.shortName}</h5>
                        <span>$ {item.price}</span>
                      </div>
                    </div>
                    <span className="quantity">x{item.quantity}</span>
                  </div>
                )
              })}
            </div>
            <div className="grand-total">
              <h4>GRAND TOTAL</h4>
              <span className="price-grand-total">${grandTotalPrice}</span>
            </div>
          </div>
          <NavLink to='/'><button onClick={reset} className="btn-style1">BACK TO HOME</button></NavLink>
        </div>
      </div>
    </>
  )
}

export default CartValided