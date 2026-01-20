function Input({ value, handleOnChange, ...props }) {
    return (
        <input
            {...props}
            value={value}
            onChange={handleOnChange}
        />
    )
}

export default Input
