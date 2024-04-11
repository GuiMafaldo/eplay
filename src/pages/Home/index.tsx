import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

// import resident from '../../assets/images/resident.png'
// import zelda from '../../assets/images/zelda.png'
// import starwars from '../../assets/images/star_wars.png'
// import diablo from '../../assets/images/diablo.png'
import { useEffect, useState } from 'react'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}
export type Games = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }

  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }

  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}
const Home = () => {
  const [promocoes, setPromocoes] = useState<Games[]>([])
  const [emBreve, setEmBreve] = useState<Games[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em Breve" background="black" />
    </>
  )
}

export default Home
