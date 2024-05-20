import logo from '@/assets/logo.png'

import {
  Container,
  Header,
  Logo,
} from './styles'
import { Hero } from './components/Hero'
import { Button } from '@/components/Button'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>

      <Hero
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        variant="success"
      />

      <Button
        title="Nova Refeição"
        icon="add"
      />

    </Container>
  )
}
