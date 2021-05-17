import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Drink from '../components/Drink'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { get_all_drinks } from '../actions/bubble_actions'
import Filter from '../components/Filter'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Home() {
    AOS.init({
        duration: 1000
    })
    const dispatch = useDispatch()

    const drinks_state = useSelector((state) => state.get_all_drinks_reducer)

    const { drinks, error, loading } = drinks_state
    useEffect(() => {
        dispatch(get_all_drinks());
    }, [])
    return (
        <div>
            <Filter/>
            <h1>{drinks.length} products match your search criteria</h1> 

            <div className="row justify-content-center">
                {loading ? (<Loading/>) : (error ? (<Error error = "Something went wrong"/>) : (
                    drinks.map(drink => {
                        return (<div data-aos = 'fade-up' className="col-md-3">
                            <div>
                                <Drink drink={drink}></Drink>
                            </div>
                        </div>);
                    })))}
                

            </div>
        </div>
    )

}