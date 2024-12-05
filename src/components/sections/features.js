import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Time Savings for Tax Professionals</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Cutting-Edge AI</FeatureTitle>
          <FeatureText>
          Leveraging advanced AI Retrieval techniques, our assistant delivers precise, context-rich answers by combining generative capabilities with curated tax knowledge.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Transparency with Tax Code References</FeatureTitle>
          <FeatureText>
          Our solution ensures trust and compliance by providing clear references 
          to the actual tax code, allowing tax professionals to verify every insight 
          confidently.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Significant Time Savings</FeatureTitle>
          <FeatureText>
            By minimizing research time, our tool lets tax preparers focus on high-value advisory work and serve more clients efficiently.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Tailored for Flow-Through Entities</FeatureTitle>
          <FeatureText>
          Built specifically for the complexities of LLCs, S-corps, and individual flow-through taxation, it provides insights that general-purpose tools cannot.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Client Inquiry Management</FeatureTitle>
          <FeatureText>A chatbot widget allows clients to ask tax-related questions directly, providing instant, accurate answers while reducing the burden on tax preparers to handle routine inquiries.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Adaptive Learning from Feedback</FeatureTitle>
          <FeatureText>
          Continuous improvement through user feedback enables the assistant to handle complex scenarios and deliver increasingly accurate insights over time.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Available: Privacy-First Deployment</FeatureTitle>
          <FeatureText>
          Offering local and offline deployment options, our solution ensures sensitive client data remains secure and meets strict privacy standards.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Scalability for Firms</FeatureTitle>
          <FeatureText>
          Whether for a solo preparer or a large team, the tool scales seamlessly to meet the demands of growing practices without compromising performance.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: center;
`

const FeatureText = styled.p`
  text-align: center;
`
