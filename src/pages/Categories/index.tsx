import ProductsList from '../../components/ProductList'
import { Games } from '../Home'

// import resident from '../../assets/images/resident.png'
// import zelda from '../../assets/images/zelda.png'
// import starwars from '../../assets/images/star_wars.png'
// import diablo from '../../assets/images/diablo.png'
const promocoes: Games[] = []
const emBreve: Games[] = []
const Categories = () => {
  return (
    <>
      <ProductsList games={promocoes} title="RPG" background="gray" />
      <ProductsList games={emBreve} title="Ação" background="black" />
      <ProductsList games={promocoes} title="Aventura" background="gray" />
      <ProductsList games={emBreve} title="FPS" background="black" />
    </>
  )
}

export default Categories
