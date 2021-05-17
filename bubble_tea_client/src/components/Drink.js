import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {add_to_cart} from '../actions/cart_actions'
export default function Drink({ drink }) { //one particular drink

    const [quantity, setquantity] = useState(1)
    const [variant, setvariant] = useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();


    function addtocart(){
        dispatch(add_to_cart(drink, quantity, variant))
    }
    return (
        <div style={{ margin: '30px', backgroundColor:'white' }} className='shadow-lg p-3 mb-5 bg-ßwhite rounded'>
            <div onClick={handleShow}>
                <h1>{drink.name}</h1>
                <img src={drink.image} className="img-fluid" style={{ height: '200px', width: '200px' }}></img>
            </div>
            <div classsName="flex-container">
                <div className='row'>
                    <div className='col m-1'>
                        <p>Variants</p>
                        <select className='form-control' value={variant} onChange={(e) => { setvariant(e.target.value) }}>
                            {drink.varients.map(varient => {
                                return <option value={varient}> {varient}</option>
                            })}
                        </select>
                    </div>

                    <div className='col m-1'>
                        <p>Quantity</p>
                        <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                            {[...Array(10).keys()].map((x, i) => { //... same as unpack * in Python
                                return <option value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className="mt-2">Price: {drink.prices[0][variant] * quantity}$</h1>
                </div>

                <div className='m-1 w-100'>
                    <button className="btn mt-0" onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>

            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>{drink.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src = {drink.image} className="img-fluid" style = {{height: '320px !important'}}></img>
                    <p>{drink.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button classsName="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    )

}