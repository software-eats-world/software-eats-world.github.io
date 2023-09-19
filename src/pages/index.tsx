/*
Copyright 2018 - 2023 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/

import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const IndexPage = () => (
  <MainContainer>
    <ContentContainer>
      <ContentBox>
        <ContentHeader>
          <Emoji>🐼🎋👩‍💻✨⛓️</Emoji>
        </ContentHeader>
        <ContentText>
          <Title>Panda Software</Title>
          <Divider />
          <Description>
            Panda Software SA is a cutting-edge software development company specialized in blockchain technology and
            the Web3 ecosystem. Its primary focus revolves around the Alephium blockchain, where it plays an integral
            role in contributing to the core protocol while also pioneering innovative Web3 applications and services.
          </Description>
        </ContentText>
      </ContentBox>
    </ContentContainer>
    <Footer>
      <LinkToMail href="mailto:kjcoco13@gmail.com">Contact</LinkToMail>
      <LinkToMail href="mailto:kjcoco13@gmail.com">Support</LinkToMail>
      <LinkToPage to="/privacy-policy">Privacy policy</LinkToPage>
    </Footer>
  </MainContainer>
)

const MainContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: 'Switzer', 'Inter', Arial, Helvetica, sans-serif;
`

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 0 30px;
`

const ContentBox = styled.div`
  margin: auto;
  max-width: 600px;
  background-color: white;
  border: 1px solid rgb(237, 237, 237);
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  overflow: hidden;
`

const ContentHeader = styled.div`
  background-color: black;
  display: flex;
  padding: 30px;
`

const ContentText = styled.div`
  padding: 30px;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 10px;
  margin-top: 0;
`

const Emoji = styled.div`
  font-size: 80px;
`

const Divider = styled.div`
  width: 40px;
  height: 3px;
  background-color: black;
`

const Description = styled.p`
  text-align: justify;
`

const Footer = styled.footer`
  height: 50px;
  border-top: 1px solid rgb(227, 227, 227);
  width: 600px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`

const LinkBase = css`
  text-decoration: none;
  color: rgb(17, 89, 224);

  &:hover {
    color: rgb(10, 43, 162);
  }
`

const LinkToPage = styled(Link)`
  ${LinkBase}
`

const LinkToMail = styled.a`
  ${LinkBase}
`

export default IndexPage
