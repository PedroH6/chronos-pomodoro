import React from "react";
import style from "./styles.module.css"

type HeaderProps = {
    children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
    return (
       <>
       <h1 className={style.header}>
         {children}
       </h1>
       </>
    )
}