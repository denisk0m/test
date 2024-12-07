import React from "react";
import {IProduct} from "../data/data.ts";
import styles from "./ProductCard.module.scss"
import {NavLink} from "react-router-dom";

interface ProductCardProps {
    data: IProduct;
    onDeleteCallback?: () => void;
    isAbleToEdit?: boolean;
    onEditCallback?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({data, onDeleteCallback,onEditCallback,isAbleToEdit}) => {

    return (
        <div className={styles.wrapper}>
            <div>
                <img src={data.image} alt="imagealt"/>
            </div>
            <h2>{data.name}</h2>

            <div>
                <p>Sizes:</p>
                <div className={styles.propertyItem}>
                    <p>Height:</p>
                    <p>{data.size.height}</p>
                </div>
                <div className={styles.propertyItem}>
                    <p>Width:</p>
                    <p>{data.size.width}</p>
                </div>
                <div className={styles.propertyItem}>
                    <p>Count</p>
                    <p>{data.count}</p>
                </div>
                <div className={styles.propertyItem}>
                    <p>Weight</p>
                    <p>{data.weight}</p>
                </div>
            </div>
            {isAbleToEdit && onDeleteCallback && onEditCallback &&
                <div className={styles.buttonWrapper}>
                    <button onClick={() => onDeleteCallback()}>Delete</button>
                    <button onClick={() => onEditCallback()}>Edit</button>
                    <NavLink to={`/products/${data.id}`}>Info</NavLink>
                </div>
            }
        </div>
    );
};