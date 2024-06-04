import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import {
  Card,
  Column,
  Container,
  Header,
  ReturnIcon,
  Subtitle,
  Title,
} from './styles'
import { StatsCard } from '@/components/StatsCard'

export function Stats() {
  const { COLORS } = useTheme()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleGoBack}>
        <ReturnIcon name="arrow-back" color={COLORS.GREEN_500} />
      </TouchableOpacity>

      <Header>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Header>

      <Card>
        <StatsCard
          title="4"
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <StatsCard title="109" subtitle="refeições registradas" />

        <Column>
          <StatsCard
            title="32"
            subtitle="refeições dentro da dieta"
            variant="success"
            style={{ width: '50%' }}
          />

          <StatsCard
            title="77"
            subtitle="refeições fora da dieta"
            variant="failure"
            style={{ width: '50%' }}
          />
        </Column>
      </Card>
    </Container>
  )
}
