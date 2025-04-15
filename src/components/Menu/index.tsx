import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import styles from "./styles.module.css"
import React, { useState, useEffect } from "react"
import { RouterLink } from "../RouterLink"

type AvailableThemes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('thme') as AvailableThemes || 'dark'
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault()
        console.log('click')

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme]) // Executa apenas quando o valor de theme muda

    return (
        <>
         <nav className={styles.menu}>
                <RouterLink 
                    className={styles.menuLink} 
                    href='/' 
                    aria-label="Ir para Home" 
                    title="Ir para a Home"
                >
                    <HouseIcon/>
                </RouterLink >
                <RouterLink  
                    className={styles.menuLink} 
                    href="/history" 
                    aria-label="ver historico"
                    title="ver historico"
                >
                    <HistoryIcon/>
                </RouterLink>
                <RouterLink  
                    className={styles.menuLink} 
                    href="/settings/" 
                    aria-label="Configurações" 
                    title="Configurações"
                >
                    <SettingsIcon />
                </RouterLink>
                <a
                className={styles.menuLink} 
                href="#" 
                aria-label="mudar tema" 
                title="mudar tema"
                onClick={handleThemeChange}  
                >
                    {nextThemeIcon[theme]}
                </a>
         </nav>
        </>
    )
}