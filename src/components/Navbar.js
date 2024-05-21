import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";
import "./Navbar.css";

export default function App() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCartTotal());  // ejecuta el reducer para calcular la cantidad de productos en el carrito
  }, [cart]);

  return (<div>

    <nav className="texto">
      <ul>
        <li>
          <Link to="/">PRODUCTOS </Link>
        </li>

        <li>
          <Link to="/cart" className="carrito">CARRITO({totalQuantity})</Link>
        </li>

      </ul>
    </nav>
  </div>
  );
}
