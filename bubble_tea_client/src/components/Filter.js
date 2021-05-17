import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {get_filtered_drinks} from '../actions/bubble_actions'
export default function Filter(){
    const dispatch = useDispatch();
    const [search_key, setsearch_key] = useState('')
    const [category, setcategory] = useState('all')
    return( 
    <div className="container">
        <div className = "row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
            <div className = "col-md-3 w-100">
                <input onChange = {(e) => {setsearch_key(e.target.value)}} value = {search_key} type="text" className="form-control w-100" placeholder = "search drinks"/>
            </div>
            <div className = "col-md-3 w-100 mt-2">
                <select onChange = {(e) => {setcategory(e.target.value)}} value = {category} className="form-control w-100">
                    <option value = "all">All</option>
                    <option value = "milk-tea">Milk Tea</option>
                    <option value = "fruit-tea">Fruit Tea</option>
                    <option value = "others">Others</option>

                </select>
            </div>
            <div className = "col-md-3 w-100 mt-2">
                <button className = "btn w-100" onClick = {() => {dispatch(get_filtered_drinks(search_key, category))}}>FILTER </button>
            </div>
    </div>
    </div>)

}