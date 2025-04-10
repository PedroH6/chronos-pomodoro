import React from "react"
import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Logo } from "../../components/Logo"
import { Menu } from "../../components/Menu"

import "../../global.css"
import "../../theme.css"


type MainTemplateProps = {
    children: React.ReactNode
}


export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}
      
      <Container>
        <Footer/>
      </Container>
    </>
  )
}


