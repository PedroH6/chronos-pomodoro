import styles from "./styles.module.css"

import React from "react"

type ButtonProps = {
    icon: React.ReactNode
    color?: 'green' | 'red'
} & React.ComponentProps<"button">

export function Button({icon, color = 'green',  ...rest }: ButtonProps) {
    return (
        <>
         <button className={`${styles.buttonIncon} ${styles[color]}`} {...rest}>
            {icon}
         </button>
        </>
    )
}