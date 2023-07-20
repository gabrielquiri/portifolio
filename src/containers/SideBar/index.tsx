import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Title fontSize={17}>Gabriel Quirino</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        gabrielquiri
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
