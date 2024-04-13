import { Games } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { formataPreco } from '../ProductList'

import { Banner, Infos } from './styles'

type Props = {
  game: Games
}
const Hero = ({ game }: Props) => {
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
