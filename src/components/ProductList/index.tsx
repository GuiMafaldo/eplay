import { Games } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Games[]
  id?: string
}
export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGamesTag = (game: Games) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }
  return (
    <Container background={background} id={id}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
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
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
