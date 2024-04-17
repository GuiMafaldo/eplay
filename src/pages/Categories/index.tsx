import ProductsList from '../../components/ProductList'
import { Games } from '../Home'

import {
  useGetActionQuery,
  useGetEsportsQuery,
  useGetSimulacaoQuery,
  useGetLutaQuery,
  useGetRpgQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionQuery()
  const { data: sportsGames } = useGetEsportsQuery()
  const { data: simulacaoGames } = useGetSimulacaoQuery()
  const { data: lutaGames } = useGetLutaQuery()
  const { data: rpgGames } = useGetRpgQuery()

  if (actionGames && sportsGames && simulacaoGames && lutaGames && rpgGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulacaoGames}
          title="Simulaçao"
          background="black"
          id="simulation"
        />
        <ProductsList games={rpgGames} title="Rpg" background="gray" id="rpg" />
        <ProductsList
          games={lutaGames}
          title="Luta"
          background="black"
          id="fight"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
