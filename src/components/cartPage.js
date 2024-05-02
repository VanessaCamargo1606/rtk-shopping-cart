import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cartPage.css";

import {
  //getCartTotal,
  removeItem,

} from "../features/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCartTotal());
  // }, [cart]);

  return (
    <div>
      <section className="">
        <div>
          <h5 className="textoUno"><strong>Carrito - {cart.length} items</strong></h5>
        </div>
        <div className="">
          {cart ?.map((data) => (
            <div className="">
              <div
                className=""
              >
                <img
                  src={data.img}
                  className="imagen"
                  alt="Blue Jeans Jacket"
                />
              </div>

              <div className="texto">
                <p>
                  <strong>{data.title}</strong>
                </p>

                <button
                  type="button"
                  title="Remove item"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>


              <div className="textoDos">
                <p className="">
                  <strong>{data.price}</strong>
                </p>
              </div>
              <hr className="my-4" />
            </div>
          ))}
        </div>
      </section >
      </div >

  );
};

export default CartPage;
