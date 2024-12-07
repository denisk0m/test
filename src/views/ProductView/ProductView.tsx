import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {defaultProduct, IProduct} from "../../data/data.ts";
import {useAppSelector} from "../../store/hooks/redux.ts";
import {ProductCard} from "../../components/ProductCard.tsx";

const initialState: IProduct = defaultProduct;

export const ProductView: React.FC = () => {
    const [product, setProduct] = useState<IProduct>(initialState);
    const params = useParams<{ id: string }>()
    const id: number = Number(params.id);
    const listOfProducts = useAppSelector(state => state.list.list);

    useEffect(() => {
        const itemToSet: IProduct | undefined = listOfProducts.find((product) => product.id === id)
        if (itemToSet == undefined) {
            console.error("failed get info of product");
        } else {
            setProduct(itemToSet);
        }
    }, [id, listOfProducts]);


    return (<>
            <ProductCard isAbleToEdit={false} data={product}/>
        </>
    );
};