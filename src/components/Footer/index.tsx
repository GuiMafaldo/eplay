import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="clique aqui para acessar os jogos de rpg"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para acessar os jogos de ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para acessar os jogos de esporte"
                to="/categories#sports"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para acessar os jogos de simulação"
                to="/categories#simulation"
              >
                Simulação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para acessar os jogos de luta"
                to="/categories#fight"
              >
                Luta
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Acesso Rapido</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="clique aqui para acessar a pagina de promoções em destaque"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="clique aqui para ver as novidades que chegaram em breve"
                to="/#coming-soon"
              >
                Em Breve
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p> {currentYear} - &copy; E-PLAY Todos os direitos reservado</p>
      </div>
    </S.Container>
  )
}

export default Footer
