// rrd
import { useParams } from "react-router-dom";

// components
import About from "../../components/about/About";
import Categories from "../../components/categories/Categories";

// categories
import CategoryProducts from "./category-products/CategoryProducts";
import IntroCategory from "./category-intro/IntroCategory";

function Category({ dataProduct }) {
    const { NameCategory } = useParams();

    return (
        <>
            <IntroCategory dataProduct={dataProduct} NameCategory={NameCategory} />
            <main className="main-category">
                <CategoryProducts dataProduct={dataProduct} NameCategory={NameCategory} />
                <Categories />
                <About />
            </main>
        </>
    );
}

export default Category