import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
    const navigator = useNavigate();;
    const showDetail = () => {
        navigator(`product/${product?.id}`);
    }
    return(
        <div className="product-card" onClick={showDetail}>
            <img className="thumb" src={product?.img} alt={product?.title} />
            <div className="choice">{product?.choice === true ? 'Conscious choice' : ''}</div>
            <div className="title">{product?.title}</div>
            <div className="price">₩ {product?.price}</div>
            <div className="new-badge">{product.new === true ? '신제품' : ''}</div>
        </div>
    )
}

export default ProductCard;