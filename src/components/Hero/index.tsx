import { Games } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { formataPreco } from '../ProductList'

import { Banner, Infos } from './styles'
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
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formataPreco(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {formataPreco(game.prices.current)}</>
            )}
            {game.prices.current && (
              <Button
                type="button"
                title="clique aqui para adicionar este jogo ao carrinho"
                variante="primary"
                onClick={addToCar}
              >
                Adicionar ao carrinho
              </Button>
            )}
          </p>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
