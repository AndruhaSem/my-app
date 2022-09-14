import React,{useState} from "react";
import Counter from "./counter"

function CounterList() {
    const initialState = [
        {id: 1, value: 0, name:'Ненужная вещь'},
        {id: 2, value: 1, name:'Ложка'},
        {id: 3, value: 1, name:'Вилка'},
        {id: 4, value: 1, name:'Тарелка'},
        {id: 5, value: 1, name:'Набор минималиста'}
    ]
    const [counters, setCounters] = useState(initialState)
    function hendlDelete(id) {
        const newCounter = counters.filter((count) => count.id !== id)
        setCounters(newCounter)
    }
    function hendleReset() {
        setCounters(initialState)
    }
    function hendleIncrement (id) {
        setCounters(prevState => prevState.map(counter => { if(counter.id === id) {counter.value + 1} return counter})) 

        
        }
    function hendleDecrement (id) {
        const newCounter = counters.map((counter) => { if(counter.id === id) {counter.value - 1} return counter})
        setCounters(newCounter)
        // setCounters(prevState => prevState.map(counter => { if(counter.id === id) {return console.log('dsgsdgd')} }))
    }
    return (
        <>
        {counters.map((count) => (
                <Counter 
                    key={count.id} 
                    onDelete={hendlDelete} 
                    onIncrement={hendleIncrement} 
                    onDecrement={hendleDecrement} 
                    {...count}
                />
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={hendleReset}>Сброс</button>
        </>
    )
}

export default CounterList