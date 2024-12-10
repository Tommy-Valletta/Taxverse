import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>
            <li>About Us</li>
            <a href= "https://www.linkedin.com/in/joshuatallen/" target="_blank" rel="noopener noreferrer">
              Joshua Allen
            </a>
          </li>
          <li>
            <a href= "https://www.linkedin.com/in/thomas-v-797971110/" target="_blank" rel="noopener noreferrer">
              Thomas Valletta
            </a>
          </li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo>Taxverse</Logo>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-direction: column; /* Stack columns vertically */
  padding: 20px 0;

  @media (max-width: ${props => props.theme.screen.sm}) {
    justify-content: center;
  }
`;

const FooterColumn = styled.div`
  text-align: center; /* Center text inside the column */
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`;


export default Footer
