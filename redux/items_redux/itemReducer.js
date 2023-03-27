import { GET_ITEMS, GET_SINGLE_ITEM } from "./itemType";

const inititalState = {
items: [],
singleItem: ''
}


const itemReducer = (state = inititalState, action) =>{

switch (action.type) {
  case GET_ITEMS: return {
    ...state,
    items: action.payload
  }


  case GET_SINGLE_ITEM: return {
    ...state,
    singleItem: action.payload
  }


  default: return state

}

}

export default itemReducer;
