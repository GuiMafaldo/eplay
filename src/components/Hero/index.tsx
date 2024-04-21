import Button from '../Button'
import Tag from '../Tag'
import { parseToBrl } from '../../utils/index'

import * as S from './styles'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Games
}
const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCar = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
            {game.prices.current && (
              <div>
                <Button
                  type="button"
                  title="clique aqui para adicionar este jogo ao carrinho"
                  variante="primary"
                  onClick={addToCar}
                >
                  Adicionar ao carrinho
                </Button>
              </div>
            )}
          </p>
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
