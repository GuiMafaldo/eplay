import { parseToBrl } from '../../utils'
import Loader from '../Loader'
import Product from '../Product'
import * as S from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Games[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, games, id, isLoading }: Props) => {
  const getGamesTag = (game: Games) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <S.Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  image={game.media.thumbnail}
                  title={game.name}
                  description={game.description}
                  category={game.details.category}
                  system={game.details.system}
                  infos={getGamesTag(game)}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
