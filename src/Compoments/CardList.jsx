import React from "react";
import BlogcardList from "./BlogcardList";
import { Col, Row } from "react-bootstrap";


const CardList = ({ cardData, show }) => {
    return (
        <>
            <Row>
                {show ? cardData.map((card, index) => (
                    <Col sm={6} lg={4} className='pt-4 position-relative'>
                        <BlogcardList key={index} data={card} />
                    </Col>
                )) :
                    cardData.slice(0, 3).map((card, index) => (
                <Col sm={6} lg={4} className='pt-4 position-relative'>
                    <BlogcardList key={index} data={card} />
                </Col>
                ))
                }
            </Row>
        </>
    );
};

export default CardList;