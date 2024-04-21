import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  width: 100%;
  height: 760px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
  }

  .container {
    position: relative;
    padding-top: 500px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  @media (max-width: ${breakpoints.desktop}) {
    background-size: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-widht: 450px;
`
export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
    color: ${colors.white};
  }
`
