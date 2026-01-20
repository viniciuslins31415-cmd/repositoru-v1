import styles from './Input.module.css'

function Input({ value, handleOnChange, ...props }) {
    return (
        <input
            {...props}
            value={value}
            onChange={handleOnChange}
            className={styles.input}
        />
    )
}

export default Input
