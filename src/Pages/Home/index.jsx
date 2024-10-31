import { BakeryProducts } from "../../../src/Assets/bakery";
import FreelancerCatAndPlant from "../../Assets/FreelancerCatAndPlant.svg";

import CartMenu from "../../Components/CartMenu";
import Header from "../../Components/Header";
import Menu from "../../Components/Menu";
import ProductCard from "../../Components/ProductCard";
import { GiSlicedBread } from "react-icons/gi";
import styles from "./Home.module.css"; // Adjusted to .css
import { useCallback, useState } from "react";

export function Home() {
  const [productList, setProductList] = useState(BakeryProducts);

  const handleProductsCategory = useCallback(async (categories) => {
    const filteredProductList = [];
    if (categories.includes('all')) {
      return setProductList(BakeryProducts);
    }
    categories.forEach(category => {
      BakeryProducts.forEach(product => {
        if (product.categories.includes(category)) {
          filteredProductList.push(product);
        }
      });
    });
    await clearProducts();
    return setProductList(filteredProductList);
  }, []);

  const clearProducts = useCallback(async () => {
    return setProductList([]);
  }, []);

  return (
    <div className={styles.container}>
      <Menu categoryFilter={handleProductsCategory} />

      <div className={styles.content}>
        <Header setProductList={setProductList} />

        <h2>
          <GiSlicedBread size={24} />
          Our Products:
        </h2>

        <div>
          <div className={styles.products}>
            {productList.length === 0 ? (
              <h2>😔 No products found...</h2>
            ) : (
              productList.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  productListOrder={productList.indexOf(product)}
                />
              ))
            )}
          </div>

          <div className={styles.illustration}>
            <img src={FreelancerCatAndPlant} alt="Illustration of a cat with plants" />
          </div>
        </div>
      </div>

      <CartMenu />
    </div>
  );
}
