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
import { useCallback } from 'react'
import Particles from 'react-particles'
import styled, { css } from 'styled-components'
import { Engine, ISourceOptions } from 'tsparticles-engine'
import { loadSeaAnemonePreset } from 'tsparticles-preset-sea-anemone'

const IndexPage = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSeaAnemonePreset(engine)
  }, [])

  return (
    <MainContainer>
      <ContentContainer>
        <ContentBox>
          <ContentHeader>
            <Emoji>🐼</Emoji>
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
        <Links>
          <LinkToMail href="mailto:kjcoco13@gmail.com">Contact</LinkToMail>
          <LinkToMail href="mailto:kjcoco13@gmail.com">Support</LinkToMail>
          <LinkToPage to="/privacy-policy">Privacy policy</LinkToPage>
        </Links>
        <Address>{`
      Ruelle William-Mayor 2 
      2000 Neuchâtel 
      Suisse
      `}</Address>
      </Footer>
      <AnimatedBackground>
        <Particles
          style={{ zIndex: -1, position: 'absolute' }}
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </AnimatedBackground>
    </MainContainer>
  )
}

export default IndexPage

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
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px) saturate(200%);
`

const ContentHeader = styled.div`
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
  border-top: 1px solid rgb(227, 227, 227);
  padding: 20px 0 0;
  margin-top: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px) saturate(200%);
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`

const Address = styled.div`
  color: grey;
  text-align: center;
  white-space: pre;
  line-height: 25px;
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

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

const particlesOptions: ISourceOptions = {
  preset: 'seaAnemone',
  particles: {
    color: {
      value: '#ffffff'
    },
    move: {
      direction: 'none',
      enable: true,
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0
        }
      },
      speed: 2,
      trail: {
        fill: { color: '#ffffff' },
        length: 30,
        enable: true
      }
    },
    number: {
      density: {
        enable: true
      },
      value: 0
    },
    opacity: {
      value: 1
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: {
        min: 1,
        max: 50
      },
      animation: {
        count: 1,
        startValue: 'min',
        enable: true,
        speed: 10,
        sync: true
      }
    }
  },
  background: {
    color: '#ffffff'
  },
  emitters: {
    direction: 'none',
    rate: {
      quantity: 5,
      delay: 0.3
    },
    size: {
      width: 0,
      height: 0
    },
    spawnColor: {
      value: '#3700ff',
      animation: {
        enable: true,
        speed: 10
      }
    },
    position: {
      x: 50,
      y: 42
    }
  }
}
