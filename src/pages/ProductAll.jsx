import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('tktktk', searchQuery)
    let url = `https://my-json-server.typicode.com/Byeong-Gwan/hnm-react-router-pracice/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, [query]);

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
