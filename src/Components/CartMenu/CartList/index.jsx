import { useCart } from "../../../hooks/useCart";
import EmptyPlace from "../../../Assets/EmptyPlace.svg";
import './CartList.module.css'; // Importing the CSS file instead of SCSS
import ProductInCart from "./ProductInCart";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal"; // Import your modal component

function CartList({ isSidebarOpen, isCheckoutPage = false }) {
  const { cart, subTotal, totalOrder, resetCart } = useCart();
  const totalFees = totalOrder - subTotal;

  // State to manage the modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  const handleResetCart = useCallback(() => {
    if (cart.length) {
      setModalOpen(true); // Open the modal instead of using confirm
    }
  }, [cart]);

  const handleConfirmReset = () => {
    resetCart();
    setModalOpen(false); // Close the modal after confirmation
  };

  const handleCancelReset = () => {
    setModalOpen(false); // Just close the modal
  };

  return (
    <div className={`${isSidebarOpen ? 'container' : ''}`}>
      <table className="labels">
        <thead>
          <tr>
            <th>item</th>
            <th>qty</th>
            <th>R$</th>
          </tr>
        </thead>
      </table>

      <div className="cartProducts">
        {cart.length ? (
          cart.map(product => <ProductInCart key={product.id} {...product} />)
        ) : (
          <div className="emptyCart">
            <h3>😔 No items in the cart...</h3>
            <img src={EmptyPlace} alt="" />
          </div>
        )}
      </div>

      <div className="footer">
        <table className="acount">
          <tbody>
            <tr>
              <th>Subtotal</th>
              <th>R$</th>
              <th>
                {subTotal.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </th>
            </tr>

            <tr>
              <th>Estimated fees</th>
              <th>R$</th>
              <th>
                {totalFees.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </th>
            </tr>

            <tr>
              <th>Order total</th>
              <th>R$</th>
              <th>
                {totalOrder.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </th>
            </tr>
          </tbody>
        </table>

        <div className="cartListActions">
          <button type="button" onClick={handleResetCart}>reset</button>
          <button type="button">
            <Link to={cart.length ? (isCheckoutPage ? '/succeed' : '/checkout') : '/'}>
              Continue to Payment
            </Link>
          </button>
        </div>
      </div>

      {/* Render the confirmation modal */}
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
