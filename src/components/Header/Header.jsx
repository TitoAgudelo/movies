import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion";

const Header = () => {
  
  return (
    <HeaderContainer>
      <motion.div
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 40
      }}>
        <HeaderTitle>Movies</HeaderTitle>
      </motion.div>
      <HeaderText>By Tito Agudelo</HeaderText>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100px;
  justify-content: space-between;
  width: 100%;
`

const HeaderTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho SemiBold';
  font-size: 42px;
  line-height: 89.69%;
  margin-right: 10px;
`

const HeaderText = styled.p`
  color: ${({ theme: { colors } }) => colors.white };
  font-family: 'Macho Regular';
  font-weight: 500;
  font-size: 16px;
  line-height: 89.69%;
  text-transform: capitalize;
`

export default Header;
