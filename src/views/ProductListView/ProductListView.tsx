import React, {useState} from "react";
import {ProductCard} from "../../components/ProductCard.tsx";
import styles from "./ProductListViewStyles.module.scss"
import {useAppSelector} from "../../store/hooks/redux.ts";
import ModalWindow from "../../components/ModaIWindow/ModalWindow.tsx";
import {AddProductForm} from "../../components/AddItemForm/AddItemForm.tsx";
import {DeleteItemForm} from "../../components/DeleteItemForm/DeleteItemForm.tsx";
import {EditItemForm} from "../../components/EditItemForm/EditItemForm.tsx";

export const ProductListView: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [componentInModal, setComponentInModal] = useState<React.ReactNode>();

    const listOfProducts = useAppSelector(state => state.list);
    const onDeleteProductForm = (id: number) => {
        setComponentInModal(<DeleteItemForm productIdToDelete={id}
                                            closeModal={() => setModalActive(false)}/>)
        setModalActive(true);
    }
    const onEditProductForm = (id: number) => {
        setComponentInModal(<EditItemForm productIdToEdit={id}
                                          closeModal={() => setModalActive(false)}/>)
        setModalActive(true);
    }
    const onClickAddForm = () => {
        setComponentInModal(<AddProductForm closeModal={() => setModalActive(false)}/>)
        setModalActive(true);
    }
    return (<>
            <div className={styles.wrapper}>
                {
                    listOfProducts.list.map((product) => (
                        <ProductCard
                            onDeleteCallback={() => onDeleteProductForm(product.id)}
                            data={product} isAbleToEdit={true}
                            onEditCallback={() => onEditProductForm(product.id)}/>
                    ))
                }
            </div>
            <button onClick={onClickAddForm}>
                Add Product
            </button>
            <ModalWindow isActive={modalActive}
                         setIsActive={setModalActive}>
                {componentInModal}
            </ModalWindow>
        </>
    );
};