import React from "react";
import styles from "./DeleteItemForm.module.scss"

import {useDispatch} from "react-redux";
import { deleteProduct} from "../../store/reducers/listSlice.ts";


interface IProps {
    closeModal: () => void;
    productIdToDelete: number;
}
export const DeleteItemForm: React.FC<IProps> = ({closeModal,productIdToDelete}) => {
    const dispatch = useDispatch();

    const onConfirm = () => {
        dispatch(deleteProduct(productIdToDelete));
        closeModal();
    }
    const onDecline = () => {
        closeModal();
    }
    return (
        <div className={styles.wrapper}>
            <p>Are u sure to delete item?</p>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onDecline}>Decline</button>
        </div>
    );
};