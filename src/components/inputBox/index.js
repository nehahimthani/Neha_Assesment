import React from 'react'

const InputBox = (props) => {
    const { className, value, id, onBlur, name, placeholder } = props;
    return (
        <React.Fragment>
            <input className={className} value={value} id={id} onBlur={onBlur} name={name} placeholder={placeholder} />
        </React.Fragment>
    )
}

export default InputBox;