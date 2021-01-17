function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return {...state, title: action.title};

    case 'ADD_TO_BASKET':
      const {data} = action.payload;
      const addData = state.basket.findIndex((e) => e.id === data.id);

      if (addData > -1) {
        data.piece = data.piece + 1;
        return {...state};
      } else {
        let piece = 1;
        data.piece = piece;
        return {...state, basket: [...state.basket, data]};
      }

    case 'REMOVE_FROM_BASKET':
      const {remove_basket} = action.payload;
      const removeBasket = state.basket.findIndex(
        (e) => e.id === remove_basket.id,
      );

      if (removeBasket > -1) {
        state.basket.splice(remove_basket, 1);
        return {...state, basket: [...state.basket]};
      } else {
        return state;
      }
    case 'DELETE_BASKET':
      return {...state, basket: []};

    default:
      return state;
  }
}

export default reducer;
