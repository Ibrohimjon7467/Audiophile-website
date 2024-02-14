import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      <div className="box border-box">
        <img className="img-product"
          src="../../../assets/images/shared/desktop/imageheadphones.png"
          alt="image"
        />
        <h5>HEADPHONES</h5>
        <NavLink to="/headphones">
          <div className="shop-and-arrow">
            <p>Shop</p>
            <img src="../../../assets/icons/little-arrow-down.svg"
              alt="image" className="arrow"
            />
          </div>
        </NavLink>
      </div>

      <div className="box border-box">
        <img className="img-product"
          src="../../../assets/images/shared/desktop/imagespeakers.png"
          alt="image"
        />
        <h5>speakers</h5>
        <NavLink to="/speakers">
          <div className="shop-and-arrow">
            <p>Shop</p>
            <img src="../../../assets/icons/little-arrow-down.svg"
              alt="image" className="arrow"
            />
          </div>
        </NavLink>
      </div>

      <div className="box border-box">
        <img className="img-product"
          src="../../../assets/images/shared/desktop/imageearphones.png"
          alt="image"
        />
        <h5>earphones</h5>
        <NavLink to="/earphones">
          <div className="shop-and-arrow">
            <p>Shop</p>
            <img src="../../../assets/icons/little-arrow-down.svg"
              alt="image"
              className="arrow"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Categories