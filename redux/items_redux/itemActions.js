import { GET_ITEMS, GET_SINGLE_ITEM } from "./itemType";

export function getItems(items) {

return {
  type: GET_ITEMS,
  payload: items
}

}

export function getSingleItem(item) {

return {
  type: GET_SINGLE_ITEM,
  payload: item
}

}



// ACTION CREATOR ------------


export function findItems() {

  return async (dispatch) =>{

    const data = await fetch("https://fakestoreapi.com/products",{
      method:'GET',
      headers:{
        'content-Type':'application/json',
      },
    });

    const result = await data.json();
    dispatch(getItems(result));

  }

}



export function findSingleItem(id) {

  return async (dispatch) =>{

    const data = await fetch(`https://fakestoreapi.com/products/${id}`,{
      method:'GET',
      headers:{
        'content-Type':'application/json',
      },
    });

    const result = await data.json();
    dispatch(getSingleItem(result));

  }

}



// BY CATEGORY -----------------


export function findByCategory(category) {

  return async (dispatch) =>{

    const data = await fetch(`https://fakestoreapi.com/products/`,{
      method:'GET',
      headers:{
        'content-Type':'application/json',
      },
    });

    const result = await data.json();
    const categoryItems = result.filter((item)=>{
      // return item.category = "jewelery";
      if(item.category == category){
        return item;
      }
    });

    dispatch(getItems(categoryItems));


  }

}
