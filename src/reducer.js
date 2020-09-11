export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      //update the user
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "ADD_BASKET":
      //LOGIC FOR ADDING ITEM TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_BASKET":
      //LOGIC FOR REMOVE ITEM TO BASKET
      //clone the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cannot able to remove the product ");
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

export default reducer;
