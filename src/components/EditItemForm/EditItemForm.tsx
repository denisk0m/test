import React, {useState} from "react";
import styles from "./EditItemFormStyles.module.scss"

import {useDispatch} from "react-redux";
import {editProduct} from "../../store/reducers/listSlice.ts";
import Input from "../Input/Input.tsx";
import { IProduct} from "../../data/data.ts";
import {useAppSelector} from "../../store/hooks/redux.ts";


interface IProps {
    closeModal: () => void;
    productIdToEdit : number;
}
export const EditItemForm: React.FC<IProps> = ({closeModal,productIdToEdit}) => {
    const dispatch = useDispatch();
    const listOfProducts = useAppSelector(state => state.list.list);

    const initialProduct: IProduct = listOfProducts.find(product => product.id === productIdToEdit);
    const [product, setProduct] = useState<IProduct>(initialProduct);
    if (initialProduct == undefined) {
        console.error("Product not found!");
        closeModal();
        return null;
    }

    const onConfirm = () => {
        dispatch(editProduct(product));
        closeModal();
    }
    return (
        <div className={styles.wrapper}>
            <Input name={"name"}
                   onChange={(e)=>setProduct({...product, name: e.target.value})}
                   className={"flex flex-col gap-2 items-center"}
                   value={product.name}
                   label = {"Enter name of product:"}/>
            <Input name={"height"}
                   onChange= {(e)=>setProduct({...product, size : {...product.size, height:e.target.value}})}
                   className={"flex flex-col gap-2 items-center"}
                   value={product.size.height}
                   label = {"Enter height of product:"}/>
            <Input name={"width"}
                   onChange = {(e)=>setProduct({...product, size : {...product.size, width:e.target.value}})}
                   className={"flex flex-col gap-2 items-center"}
                   value={product.size.width}
                   label = {"Enter width of product:"}/>
            <Input name={"weight"}
                   onChange={(e)=>setProduct({...product, weight: e.target.value})}
                   className={"flex flex-col gap-2 items-center"}
                   value={product.weight}
                   label = {"Enter weight of product:"}/>
            <Input name={"count"}
                   onChange={(e)=>setProduct({...product, count: e.target.value})}
                   className={"flex flex-col gap-2 items-center"}
                   value={product.count}
                   label = {"Enter count of product:"}/>
            <button onClick={onConfirm}>Confirm editing</button>
        </div>
    );
};