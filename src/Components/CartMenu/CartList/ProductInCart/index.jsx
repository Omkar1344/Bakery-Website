import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { BakeryProducts } from "../../../../Assets/bakery";
import { useCart } from "../../../../hooks/useCart";
import styles from "./ProductInCart.module.css";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal"; // Adjust path as necessary

function ProductInCart({ productId, quantity, totalPrice, unityPrice }) {
  const cartProduct = BakeryProducts.find(product => product.id === productId);
  const {
    increaseProductQuantityByOne,
    decreaseProductQuantityByOne,
    removeItemFromCart
  } = useCart();

  const [isModalOpen, setModalOpen] = useState(false);

  function handleIncreaseQuantity() {
    increaseProductQuantityByOne(productId);
  }

  function handleDecreaseQuantity() {
    decreaseProductQuantityByOne(productId);
  }

  function handleRemoveFromCart() {
    setModalOpen(true); // Open the modal instead of using confirm
  }

  const handleConfirmRemove = () => {
    removeItemFromCart(productId);
    setModalOpen(false); // Close the modal after confirmation
  };

  const handleCancelRemove = () => {
    setModalOpen(false); // Just close the modal
  };

  return (
    <div className={styles.container}>
      <div className={styles.productDescription}>
        <div>
          <img src={cartProduct?.image} alt={cartProduct?.name} />

          <div className={styles.description}>
            <p>{cartProduct?.name}</p>
            <div>
              <span>
                {unityPrice.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'INR'
                })}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.productAmout}>
          <AiOutlineMinus size={12} className={styles.icon} onClick={handleDecreaseQuantity} />
          <span>{quantity}</span>
          <AiOutlinePlus size={12} className={styles.icon} onClick={handleIncreaseQuantity} />
        </div>

        <div className={styles.total}>
          <span>
            {totalPrice.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'INR'
            })}
          </span>
        </div>

        <div className={styles.removeProduct} onClick={handleRemoveFromCart}>
          <AiOutlineDelete size={20} />
        </div>
      </div>

      {/* Render the confirmation modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Deseja realmente remover o item do carrinho?"
        onConfirm={handleConfirmRemove}
        onCancel={handleCancelRemove}
      />
    </div>
  );
}

export default ProductInCart;
