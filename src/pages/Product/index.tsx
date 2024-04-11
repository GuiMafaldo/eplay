import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import zelda from '../../assets/images/zelda.png'

const Products = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantasticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser. Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com a chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que voce faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma: </b>Playstation 5 <br /> <b>Desenvolvedor:</b>
          Avalanche Software
          <br />
          <b>Editora:</b> Portkey Games, subsidiaria da warner Bros. Interative
          Entertainment <br /> <b>Idiomas:</b> O jogo oferece suporte a diversos
          idiomas, incluindo ingles, espanhol, francês, alemão, italiano,
          português, entre outros. As opções de aúdio e legendas pode, ser
          ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery name="Zelda" defautCover={zelda} />
    </>
  )
}
export default Products
