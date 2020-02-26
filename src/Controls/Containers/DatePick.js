import React, {useState} from 'react'
import DatePickView from '../Views/DatePickView'

const initialState ={
    startDate: ''
}

const DatePick = props => {

    const {
        funcName,
        setFormat
    } = props

    const [state, setstate] = useState(initialState)

    const handleChange = (date) => {
        setstate({
            ...state,
            startDate: date
        })
    }
    
    return (<>
        <DatePickView
            startDate={state.startDate}
            onChange={handleChange}
            setFormat={setFormat}
        />
    </>)
}

export default DatePick
