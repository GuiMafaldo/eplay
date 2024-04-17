import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 760px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

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

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-widht: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
    color: ${cores.branca};
  }
`
