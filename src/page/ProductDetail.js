import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


const ProductDetail = () => {
    let{id} = useParams();
    const[product, setProduct] = useState(null);
    const getProductDetail= async ()=>{
        let url= `https://my-json-server.typicode.com/Tjpark0113/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data);
        setProduct(data);
    };
    useEffect(()=>{
        getProductDetail()
    },[]);

  return (
    <Container>
        <Row>
            <Col className='product-img'>
                <img src={product?.img}/>
            </Col>
            <Col className='product-detail'>
                <h1>상품이름: {product?.title}</h1>
                <h1>가격: {product?.price}원</h1>
                <h5>{product?.choice == true?"Concious Choice":""}</h5>
                <div>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        사이즈
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">소</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">중</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">대</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Button variant="primary" size="lg">
                        추가
                    </Button>   
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail