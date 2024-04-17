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
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#action">Ação</Link>
            </li>
            <li>
              <Link to="/categories#sports">Esportes</Link>
            </li>
            <li>
              <Link to="/categories#simulation">Simulação</Link>
            </li>
            <li>
              <Link to="/categories#fight">Luta</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rapido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Em Breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p> {currentYear} - &copy; E-PLAY Todos os direitos reservado</p>
      </div>
    </Container>
  )
}

export default Footer
