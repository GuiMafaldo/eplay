import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Actions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const GalleryList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const GalleryItems = styled.li`
  position: relative;
  cursor: zoom-in;

  &:hover {
    cursor: pointer;
    ${Actions} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    img {
      height: 16px;
      width: 16px;
      cursor: pointer;
    }

    h4 {
      fon-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }
  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }
`
