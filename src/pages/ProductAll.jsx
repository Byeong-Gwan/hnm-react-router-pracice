import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = 'http://localhost:3000/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className="g-4">
          {productList.map((product) => (
            <Col xs={12} sm={6} md={3} key={product?.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;
