import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const sizes = ["XS", "S", "M", "L", "XL"];
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/Byeong-Gwan/hnm-react-router-pracice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container className="product-detail py-4">
      <Row className="g-4 align-items-start">
        <Col md={6} className="d-flex justify-content-center">
          <img className="detail-thumb" src={product?.img} alt={product?.title} />
        </Col>
        <Col md={6}>
          <div className="detail-title mb-2">{product?.title}</div>
          <div className="detail-price mb-3">₩ {product?.price}</div>

          <div className="mb-2 text-muted" style={{fontSize: '13px'}}>사이즈</div>
          <div className="size-group mb-3">
            {sizes.map((s) => (
              <button
                key={s}
                type="button"
                className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                onClick={() => setSelectedSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <Button variant="danger" className="w-100 add-btn" size="lg" disabled={!selectedSize}>
            {selectedSize ? '추가' : '사이즈를 선택해주세요'}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;
