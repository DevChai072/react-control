import React from 'react'
import TextFieldView from '../Views/TextInputView'

const TextInput = props => {
    const {
        format
    } = props
    
    return (<>
        <TextFieldView format={format}/>
    </>)
}

export default TextInput