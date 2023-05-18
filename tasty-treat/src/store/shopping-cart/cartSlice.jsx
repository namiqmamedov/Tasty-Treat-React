
import {createSlice} from '@reduxjs/toolkit'


const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;
    

const initialState = {
    cartItems: items,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity,
} 

const cartSlice =  createSlice({
    name:'cart',
    initialState,
    reducers:{

        // add item

        addItem(state,action){
            const newItem = action.payload
            const exisitingItem = state.cartItems.find((item) => item.id === newItem.id && item.size === newItem.size)
            state.totalQuantity++

            if(!exisitingItem){
                    state.cartItems.push({
                        id: newItem.id,
                        title:newItem.title,
                        image01: newItem.image01,
                        price: newItem.price,
                        size: newItem.size,
                        quantity: 1,
                        totalPrice: newItem.price
                    })
            }
            else{
                exisitingItem.quantity++
                exisitingItem.totalPrice = Number(exisitingItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total,item) => 
                total + Number(item.price) * Number(item.quantity),0 // initial value should be 0
            );


            localStorage.setItem('cartItems',JSON.stringify(state.cartItems.map(item=>item)))
            
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
        },

        // // remove item

        removeItem(state,action){
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id ===  id )
            state.totalQuantity--;

            if(existingItem.quantity === 1){
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            }
            else{
                existingItem.quantity--
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
            }

            state.totalAmount = state.cartItems.reduce((total,item) => 
                total + Number(item.price) * Number(item.quantity),0  // the initial value should be 0
            )
            
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems.map(item=>item)))
            
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))

        },

        // delete item 

        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id );
      
            if (existingItem) {
              state.cartItems = state.cartItems.filter(item => item.id !== id);
              state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
      
            state.totalAmount = state.cartItems.reduce(
              (total, item) => total + Number(item.price) * Number(item.quantity),
              0 // the initial value should be 0
            );

            
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems.map(item=>item)))
            
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
            
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))

        },
    },
})

export const cartActions = cartSlice.actions;
export default cartSlice;   