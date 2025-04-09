import styles from "./styles.module.css"
import React from "react"

type InputProps = {
    id: string
    labelText?: string
} & React.ComponentProps<'input'>

export function Input({ id, type, labelText, ...rest }: InputProps) {
    return (
        <>
        {labelText ? <label htmlFor={id}>{labelText}</label> : ""}
        <input className={styles.input} id={id} type={type} {...rest}/>
        </>
    )
}