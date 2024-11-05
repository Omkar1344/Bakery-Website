import { useCart } from "../../../hooks/useCart";
import EmptyPlace from "../../../Assets/EmptyPlace.svg";
import styles from './CartList.module.css'; // Importing as a module
import ProductInCart from "./ProductInCart";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

function CartList({ isSidebarOpen, isCheckoutPage = false }) {
  const { cart, subTotal, totalOrder, resetCart } = useCart();
  const totalFees = totalOrder - subTotal;
  const [isModalOpen, setModalOpen] = useState(false);

  const handleResetCart = useCallback(() => {
    if (cart.length) {
      setModalOpen(true);
    }
  }, [cart]);

  const handleConfirmReset = () => {
    resetCart();
    setModalOpen(false);
  };

  const handleCancelReset = () => {
    setModalOpen(false);
  };

  return (
    <div className={`${isSidebarOpen ? styles.container : ''}`}>
      <table className={styles.labels}>
        <thead>
          <tr>
            <th>item</th>
            <th>qty</th>
            <th>R$</th>
          </tr>
        </thead>
      </table>

      <div className={styles.cartProducts}>
        {cart.length ? (
          cart.map(product => <ProductInCart key={product.id} {...product} />)
        ) : (
          <div className={styles.emptyCart}>
            <h3>😔 No items in the cart...</h3>
            <img src={EmptyPlace} alt="" />
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <table className={styles.acount}>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <th>R$</th>
              <th>{subTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</th>
            </tr>
            <tr>
              <th>Estimated fees</th>
              <th>R$</th>
              <th>{totalFees.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</th>
            </tr>
            <tr>
              <th>Order total</th>
              <th>R$</th>
              <th>{totalOrder.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</th>
            </tr>
          </tbody>
        </table>

        <div className={styles.cartListActions}>
          <button type="button" onClick={handleResetCart}>reset</button>
          <button type="button">
            <Link to={cart.length ? (isCheckoutPage ? '/succeed' : '/checkout') : '/'}>
              Continue to Payment
            </Link>
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        message="Você quer remover todos os produtos do carrinho?"
        onConfirm={handleConfirmReset}
        onCancel={handleCancelReset}
      />
    </div>
  );
}

export default CartList;
