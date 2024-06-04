import { TouchableOpacity } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import { numberToPercentage } from '@/utils/numberFormatter'

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

interface MealStatsProps {
  total: number
  successAmount: number
  failureAmount: number
  successPercentage: number
}

export function Stats() {
  const route = useRoute()
  const navigation = useNavigation()

  const { total, successAmount, failureAmount, successPercentage } =
    route.params as MealStatsProps

  const mealsWithinDietIsAboveHalf = successPercentage > 50

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container isWithinDiet={mealsWithinDietIsAboveHalf}>
      <TouchableOpacity onPress={handleGoBack}>
        <ReturnIcon
          name="arrow-back"
          isWithinDiet={mealsWithinDietIsAboveHalf}
        />
      </TouchableOpacity>

      <Header>
        <Title>{numberToPercentage(successPercentage)}</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Header>

      <Card>
        <StatsCard title={String(total)} subtitle="refeições registradas" />

        <Column>
          <StatsCard
            title={String(successAmount)}
            subtitle="refeições dentro da dieta"
            variant="success"
            style={{ width: '50%' }}
          />

          <StatsCard
            title={String(failureAmount)}
            subtitle="refeições fora da dieta"
            variant="failure"
            style={{ width: '50%' }}
          />
        </Column>
      </Card>
    </Container>
  )
}
