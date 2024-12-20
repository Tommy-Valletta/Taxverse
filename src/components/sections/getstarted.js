import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const GetStarted = () => {
  const scrollToForm = () => {
    const form = document.querySelector("#signup-form");
    if (form) {
      const formHeight = form.offsetHeight;
      const windowHeight = window.innerHeight;
      const offset = (windowHeight - formHeight) / 2; // Center the form vertically
      const yPosition = form.getBoundingClientRect().top + window.pageYOffset - offset;
  
      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        form.style.transition = "transform 0.3s ease";
  
        // First grow
        form.style.transform = "scale(1.05)";
        setTimeout(() => {
          // First shrink
          form.style.transform = "scale(1)";
          setTimeout(() => {
            // Second grow
            form.style.transform = "scale(1.05)";
            setTimeout(() => {
              // Second shrink
              form.style.transform = "scale(1)";
            }, 350); // Delay for second shrink
          }, 350); // Delay for second grow
        }, 350); // Delay for first shrink
      }, 500); // Delay before starting the blink effect

    }
  };  
  
    return (
    <StyledSection>
      <GetStartedContainer>
        <GetStartedTitle>Be the first to get the beta</GetStartedTitle>
        <TryItButton onClick={scrollToForm}>Get early access</TryItButton>
        <Subtitle>No credit card required.</Subtitle>
      </GetStartedContainer>
    </StyledSection>
  )
};

export default GetStarted

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
`
