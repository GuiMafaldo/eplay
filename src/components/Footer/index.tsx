import { Container, FooterSection, Links, SectionTitle, Link } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link>RPG</Link>
            </li>
            <li>
              <Link>Ação</Link>
            </li>
            <li>
              <Link>Aventura</Link>
            </li>
            <li>
              <Link>Esportes</Link>
            </li>
            <li>
              <Link>Simulação</Link>
            </li>
            <li>
              <Link>Estrategia</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rapido</SectionTitle>
          <Links>
            <li>
              <Link>Novidades</Link>
            </li>
            <li>
              <Link>Promoções</Link>
            </li>
            <li>
              <Link>Em Breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p> {currentYear} - &copy; E-PLAY Todos os direitos reservado</p>
      </div>
    </Container>
  )
}

export default Footer