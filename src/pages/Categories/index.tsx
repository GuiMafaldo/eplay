import ProductsList from '../../components/ProductList'

import {
  useGetActionQuery,
  useGetEsportsQuery,
  useGetSimulacaoQuery,
  useGetLutaQuery,
  useGetRpgQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: sportsGames, isLoading: isLoadingEsports } =
    useGetEsportsQuery()
  const { data: simulacaoGames, isLoading: isLoadingSimulation } =
    useGetSimulacaoQuery()
  const { data: lutaGames, isLoading: isLoadingFight } = useGetLutaQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingEsports}
      />
      <ProductsList
        games={simulacaoGames}
        title="Simulaçao"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={rpgGames}
        title="Rpg"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={lutaGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
    </>
  )
}

export default Categories
