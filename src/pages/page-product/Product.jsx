import { useParams } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import About from "../../components/about/About";
import PresentationProduct from "./product-presentation/PresentationProduct";

function Product({ dataProduct, quantityProduct,
    setQuantityProduct, productCart, setProductCart,
    quantityCartItem, setQuantityCartItem,
}) {

    const { SlugProduct } = useParams();

    return (
        <>
            <main className="main-product">
                <PresentationProduct
                    dataProduct={dataProduct}
                    SlugProduct={SlugProduct}
                    quantityProduct={quantityProduct}
                    setQuantityProduct={setQuantityProduct}
                    productCart={productCart}
                    setProductCart={setProductCart}
                    quantityCartItem={quantityCartItem}
                    setQuantityCartItem={setQuantityCartItem}
                />
                <Categories />
                <About />
            </main>
        </>
    );
}

export default Product