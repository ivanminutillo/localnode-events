// @flow

import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import ReactRotatingText from './RotatingText'
import Bg from './png/bg.jpg'
import Navigation from './svg/Navigation'


let Row = styled.div`
  display: flex;
`

let Header = styled(Row)`
  position: relative;
  z-index: 1;
`

let SlackLink = styled.a`
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border: 1px solid #fff;
  font-weight: 400;
  border-radius: 2px;
  margin-top: 10px;
  margin-left: 10px;
`

let LinkText = styled.span`
  padding-left: 10px;
  font-size: 14px;
  transition: color 0.2s ease;
  &:hover {
    color: rgb(255, 248, 84);
  }
  @media (max-width: 700px) {
    display: none;
  }
`

let InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`

let TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: ${theme.fancyFont};
  color: white;
  padding: 100px 0 25px;
  padding-top:0;
  z-index: 1;
  position: relative;
  letter-spacing: 4px;
`

let Container = styled.div`
  height: 300px;
  background-image: url(${Bg});
  background-size: cover;
  position: relative;
  background-position: center center;
`

let Title = styled.div`
  font-size: 42px;
  margin-bottom: 10px;
  font-weight: 500;
`

let Rotator = styled(ReactRotatingText)`
  font-size: 26px;
`

type Props = {
  backgroundColor?: string
}

export default ({ backgroundColor = theme.primary }: Props) => (
  <Container className='splash_background' backgroundColor={backgroundColor}>
    <Header>
      <SlackLink href="https://t.me/montealtino" target="_blank">
        <Navigation style={{ width: `30px` }} />
        <LinkText>Unisciti a noi su Telegram</LinkText>
      </SlackLink>
    </Header>
    <InnerContainer>
      <TitleContainer>
        <Title>La Riviera <br />di Ulisse <br /><i>in comune</i></Title>
        <Rotator
          items={[`SPORT`, `ASSEMBLEE`, `WORKSHOPS`, `EVENTI`]}
        />
      </TitleContainer>
    </InnerContainer>
  </Container>
)
