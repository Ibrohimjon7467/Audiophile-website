import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import Categories from "../categories/Categories";

// import { useNavigate } from "react-router-dom";
// import { useUserAuth } from "../../context/UserAuthContext";


function Navbar({ productCart, setProductCart, quantityCartItem,
  setQuantityCartItem, cartTotalPrice, setCartTotalPrice,
}) {

  const [bgOpacity, setBgOpacity] = useState(false)
  const [openCart, setOpenCart] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const handleCartDisplay = () => {
    setOpenCart(!openCart);
  };

  const handleDisplayMobileNav = () => {
    setMobileNav(!mobileNav);
    setBgOpacity(!bgOpacity)
  };


  // const { logOut, user } = useUserAuth();
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      {bgOpacity ? <div className="bgOpacity mobile-tablet"></div> : null}
      <header>
        <nav>
          <img onClick={handleDisplayMobileNav} className="icon-nav-mobile" src="assets/icons/menu.svg" alt="image" />
          <NavLink to="/"><span className="brand">audiophile</span></NavLink>
          <ul className="nav-desktop desktop">
            <NavLink className={(nav) => (nav.isActive ? "nav-active" : 'link')} to="/">
              <li >home</li>
            </NavLink>
            <NavLink className={(nav) => (nav.isActive ? "nav-active" : 'link')} to="/headphones">
              <li>headphones</li>
            </NavLink>
            <NavLink className={(nav) => (nav.isActive ? "nav-active" : 'link')} to="/speakers">
              <li>speakers</li>
            </NavLink>
            <NavLink className={(nav) => (nav.isActive ? "nav-active" : 'link')} to="/earphones">
              <li>earphones</li>
            </NavLink>
          </ul>
          <button id="logout-btn">
            Logout
          </button>
          <div className="nav-cart" onClick={() => handleCartDisplay()}>
            <img src="../../assets/icons/icon-cart.svg" alt="" />
            {quantityCartItem === 0 ? null : (
              <span className="nav-quantity-item-cart">{quantityCartItem}</span>
            )}
          </div>
        </nav>
        {mobileNav ? <div className="nav-mobile mobile-tablet" >
          <Categories /> </div> : null}
        {openCart ? (
          <Cart
            productCart={productCart}
            setProductCart={setProductCart}
            setQuantityCartItem={setQuantityCartItem}
            quantityCartItem={quantityCartItem}
            cartTotalPrice={cartTotalPrice}
            setCartTotalPrice={setCartTotalPrice}
            setOpenCart={setOpenCart}
          />
        ) : null}
      </header>
    </>
  );
}

export default Navbar