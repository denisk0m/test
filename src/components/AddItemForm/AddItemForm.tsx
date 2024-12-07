import React, {useState} from "react";
import styles from "./AddItemFormStyles.module.scss"
import Input from "../Input/Input.tsx";
import {defaultProduct, IProduct} from "../../data/data.ts";
import {useDispatch} from "react-redux";
import {addProduct} from "../../store/reducers/listSlice.ts";

export const AddProductForm: React.FC<{closeModal: () => void}> = ({closeModal}) => {

    const [product, setProduct] = useState<IProduct>(defaultProduct);
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(addProduct(product));
        closeModal();
    }
    return (
        <div className={styles.wrapper}>
            <Input name={"name"}
                   onChange={(e)=>setProduct({...product, name: e.target.value})}
                   value={product.name}
                   label = {"Enter name of product:"}/>
            <Input name={"height"}
                   onChange= {(e)=>setProduct({...product, size : {...product.size, height:e.target.value}})}
                   value={product.size.height}
                   label = {"Enter height of product:"}/>
            <Input name={"width"}
                   onChange = {(e)=>setProduct({...product, size : {...product.size, width:e.target.value}})}
                   value={product.size.width}
                   label = {"Enter width of product:"}/>
            <Input name={"weight"}
                   onChange={(e)=>setProduct({...product, weight: e.target.value})}
                   value={product.weight}
                   label = {"Enter weight of product:"}/>
            <Input name={"count"}
                   onChange={(e)=>setProduct({...product, count: e.target.value})}
                   value={product.count}
                   label = {"Enter count of product:"}/>
            <button onClick={onSubmit}>Add</button>
        </div>
    );
};