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
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportsGames} title="Esportes" background="gray" />
        <ProductsList
          games={simulacaoGames}
          title="Simulaçao"
          background="black"
        />
        <ProductsList games={rpgGames} title="Rpg" background="gray" />
        <ProductsList games={lutaGames} title="Luta" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
