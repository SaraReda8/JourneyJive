import React, { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './SearchSection.module.css';

export default function SearchSection() {
    const checkInRef = useRef();
    const checkOutRef = useRef();

    return (
        <div className={styles.positionRelative}>
            <Container className={styles.searchContainer}>
                <Form className={`${styles.searchForm} p-4 rounded shadow-lg`}>
                    <Row className='g-3 align-items-center'>
                        <Col lg={3} sm={12}>
                            <Form.Select className={`${styles.formSelect} form-select-lg`}>
                                <option>Search place</option>
                                <option value="1">London</option>
                                <option value="2">Dubai</option>
                                <option value="3">Paris</option>
                                <option value="4">New York</option>
<option value="5">Tokyo</option>
<option value="6">Sydney</option>
<option value="7">Toronto</option>
<option value="8">Berlin</option>
<option value="9">Singapore</option>
<option value="10">Los Angeles</option>
<option value="11">Rome</option>
<option value="12">Amsterdam</option>
<option value="13">Hong Kong</option>
<option value="14">Barcelona</option>
<option value="15">Istanbul</option>
<option value="16">Seoul</option>
<option value="17">Vienna</option>
<option value="18">Madrid</option>
<option value="19">Moscow</option>
<option value="20">Bangkok</option>
<option value="21">San Francisco</option>
<option value="22">Mexico City</option>
<option value="23">Cairo</option>

                            </Form.Select>
                        </Col>
                        <Col lg={2} sm={6}>
                            <Form.Select className={`${styles.formSelect} form-select-lg`}>
                            <option>Rooms</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>

                            </Form.Select>
                        </Col>
                        <Col lg={2} sm={6}>
                            <Form.Control 
                                type='text'
                                ref={checkInRef}
                                placeholder='Check-in date'
                                onFocus={() => (checkInRef.current.type = 'date')}
                                onBlur={() => (checkInRef.current.type = 'text')}
                                className={`${styles.formControl} form-control-lg`}
                            />
                        </Col>
                        <Col lg={2} sm={6}>
                            <Form.Control 
                                type='text'
                                ref={checkOutRef}
                                placeholder='Check-out date'
                                onFocus={() => (checkOutRef.current.type = 'date')}
                                onBlur={() => (checkOutRef.current.type = 'text')}
                                className={`${styles.formControl} form-control-lg`}
                            />
                        </Col>
                        <Col lg={3} sm={6} className="d-grid">
                        <Button className='btn btn2'>Search</Button>

                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}