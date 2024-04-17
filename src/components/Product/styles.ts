import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branca};
  display: block;

  img {
    width: 222px;
    height: 250px;
  }
  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    img {
      width: 100%;
    }
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
