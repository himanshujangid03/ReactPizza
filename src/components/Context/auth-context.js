import React, { useState } from "react";

const AuthContext = React.createContext({
  cartItem: Array,
  addToCartHandler: (item) => {},
  setCartItem: () => {},
  toggleModal: Boolean,
  toggleModalHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  const addToCartHandler = (item) => {
    const cartItemId = cartItem.some((el) => {
      if (el._id === item._id) return true;
      else return false;
    });

    if (!cartItemId) {
      setCartItem((el) => {
        return [...el, item];
      });
    } else {
      window.alert("Item is already to cart!");
    }
  };

  const toggleModalHandler = () => {
    setToggleModal((el) => !el);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          addToCartHandler: addToCartHandler,
          cartItem: cartItem,
          setCartItem: setCartItem,
          toggleModal: toggleModal,
          toggleModalHandler: toggleModalHandler,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
