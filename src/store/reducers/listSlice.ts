import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct, products} from "../../data/data.ts";


interface State {
    list: IProduct[]
}

const initialState: State = {list: products};
export const listSlice = createSlice({
    name: "listSlice",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            const nextId = (state.list.length > 0)
                ? Math.max(...state.list.map((product) => product.id)) + 1
                : 1;
            const newProduct = { ...action.payload, id: nextId };
            state.list.push(newProduct);
        },
        //we pass id to delete from list
        deleteProduct: (state, action: PayloadAction<number>) => {
            const indexToRemove: number = state.list.findIndex((element) => element.id === action.payload)
            if (indexToRemove !== -1) {
                state.list.splice(indexToRemove, 1);
            }
        },
        editProduct: (state, action: PayloadAction<IProduct>) => {
            const updatedProduct = action.payload; // The updated product passed in the action
            const index = state.list.findIndex((product) => product.id === updatedProduct.id);
            if (index !== -1) {
                state.list[index] = updatedProduct;
            } else {
                console.warn(`Product with id ${updatedProduct.id} not found.`);
            }
        }


    }
})
export const {addProduct,deleteProduct,editProduct} = listSlice.actions;
export default listSlice.reducer
