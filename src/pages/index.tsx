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
import styled from 'styled-components'

const IndexPage = () => (
  <MainContainer>
    <ContentContainer>
      <Content>
        <Emoji>🐼</Emoji>
        <Title>Panda Software</Title>
        <Divider />
        <Description>
          Panda Software SA is a cutting-edge software development company specialized in blockchain technology and the
          Web3 ecosystem. Its primary focus revolves around the Alephium blockchain, where it plays an integral role in
          contributing to the core protocol while also pioneering innovative Web3 applications and services.
        </Description>
      </Content>
    </ContentContainer>
    <Footer>
      <LinkStyled to="/privacy-policy">Privacy policy</LinkStyled>
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
  padding: 30px;
`

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
`

const Content = styled.div`
  margin: auto;
  max-width: 600px;
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
`

const Emoji = styled.div`
  font-size: 80px;
`

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background-color: black;
`

const Description = styled.p`
  text-align: justify;
`

const Footer = styled.footer`
  height: 50px;
  border-top: 1px solid rgb(200, 200, 200);
  width: 600px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: rgb(17, 141, 224);

  &:hover {
    color: rgb(9, 116, 187);
  }
`

export default IndexPage
