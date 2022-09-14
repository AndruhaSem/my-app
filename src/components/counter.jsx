import { render } from "@testing-library/react"
import React,{useState} from "react"

function Counter(props) {
    const {value} = props

    function formatValue () {
        return value === 0 ? 'empty' : value
    }
    function getBageClasses () {
        let classes = 'badge m-2 '
        classes += value === 0 ? 'bg-warning' : ' bg-primary'
        return classes
    }
    function hendleIncrement () {
    //  setValue(value + 1)
    console.log('+++++++++')
    }
    function hendleDecrement () {
    //  setValue(value - 1)
    console.log('-------------')
    }

    return (
        <div>
            <span>{props.name}</span>
            <span className = {getBageClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    ) 
}

export default Counter
