import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ProductGallery from "../product-gallery/ProductGallery";
import MayAlsoLike from "../product-mayAlsoLike/MayAlsoLike";

function PresentationProduct({ dataProduct, SlugProduct,
    quantityProduct, setQuantityProduct, productCart,
    setProductCart, quantityCartItem, setQuantityCartItem,
}) {
    const [alertItemAdded, setAlertItemAdded] = useState("");

    const handleClickQuantityProduct = (e) => {
        setQuantityProduct(quantityProduct + e);
        if (quantityProduct <= 1 && e === -1) {
            setQuantityProduct(1);
        }
        if (quantityProduct >= 20 && e === 1) {
            setQuantityProduct(20);
            return;
        }
    };
    const addToCart = (e) => {
        const copyProductCart = [...productCart];

        if (productCart.some((item) => item.id === e.id)) {
            let quantityToAddToCart;
            let foundIndex = productCart.findIndex((x) => x.id == e.id);
            copyProductCart[foundIndex].quantity += quantityProduct;
        } else {
            copyProductCart.push({
                id: e.id,
                shortName: e.shortName,
                price: e.price,
                cartImage: e.cartImage,
                quantity: quantityProduct,
            });
            setProductCart(copyProductCart);
        }
        quantityToAddToCart = quantityCartItem += quantityProduct;
        setQuantityCartItem(quantityToAddToCart);
        showAlertAddToCart(e);
    };

    const showAlertAddToCart = (e) => {
        let nameItem = e.shortName;
        setAlertItemAdded(nameItem);
        setTimeout(() => {
            setAlertItemAdded("");
        }, 2000);
    };

    useEffect(() => {
        setQuantityProduct(1);
    }, []);

    return (
        <div className="page-product">
            {alertItemAdded === "" ? null : (
                <div className="alert-item-added-to-cart">
                    Item '{alertItemAdded}' was added to cart
                </div>
            )}
            <NavLink className="links" to="/">
                <h4 className="go-back">Go Back</h4>
            </NavLink>
            {dataProduct.map((data) => {
                if (data.slug === SlugProduct) {
                    return (
                        <>
                            <div className="presentation-product">
                                <div className="img-side">
                                    <img className="mobile" src={data.image.mobile} alt="image" />
                                    <img className="tablet" src={data.image.tablet} alt="image" />
                                    <img className="desktop" src={data.image.desktop} alt="image" />
                                </div>
                                <div className="txt-side">
                                    {data.new ? (
                                        <span className="new-product">NEW PRODUCT</span>
                                    ) : null}
                                    <h1>{data.name}</h1>
                                    <p>{data.description}</p>
                                    <span className="price">$ {data.price}</span>
                                    <div className="selector-quantity-and-add-to-cart">
                                        <div className="selector-quantity">
                                            <button onClick={() => handleClickQuantityProduct(-1)}>
                                                <img src="../../../assets/icons/icon-minus.svg"
                                                    alt="image"
                                                />
                                            </button>
                                            <span className="quantity">{quantityProduct}</span>
                                            <button onClick={() => handleClickQuantityProduct(1)}>
                                                <img src="../../../assets/icons/icon-plus.svg" alt="image" />
                                            </button>
                                        </div>
                                        <button onClick={() => addToCart(data)}
                                            className="btn-style1"
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-and-in-the-box">
                                <div className="feature">
                                    <h2>FEATURES</h2>
                                    <p>{data.features}</p>
                                </div>
                                <div className="in-the-box">
                                    <h2>IN THE BOX</h2>
                                    <div className="full-list-items">
                                        {data.includedItems.map((included) => {
                                            return (
                                                <ul key={uuidv4()}>
                                                    <li className="quantity-item">{included.quantity}x</li>
                                                    <li>{included.item}</li>
                                                </ul>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <ProductGallery data={data} />
                            <section className="may-also-like">
                                <h2>MAY ALSO LIKE</h2>
                                <div className="all-box-item">
                                    {data.others.map((item) => {
                                        return <MayAlsoLike item={item} />
                                    })}
                                </div>
                            </section>
                        </>
                    );
                }
            })}
        </div>
    );
}

export default PresentationProduct