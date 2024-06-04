import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { numberToPercentage } from '@/utils/numberFormatter'

import { Container, Icon, Title, Subtitle } from './styles'

interface MealStatsProps {
  total: number
  successAmount: number
  failureAmount: number
  successPercentage: number
}

interface HeroProps {
  stats: MealStatsProps
}

export function Hero({ stats }: HeroProps) {
  const { COLORS } = useTheme()
  const navigation = useNavigation()

  const mealsWithinDietIsAboveHalf = stats.successPercentage > 50

  function handleOpenStats() {
    navigation.navigate('stats', {
      ...stats,
    })
  }

  return (
    <Container
      onPress={handleOpenStats}
      style={
        !mealsWithinDietIsAboveHalf && {
          backgroundColor: COLORS.RED_100,
        }
      }
      underlayColor={
        mealsWithinDietIsAboveHalf ? COLORS.GREEN_300 : COLORS.RED_300
      }
    >
      <>
        <Icon
          name="arrow-outward"
          color={mealsWithinDietIsAboveHalf ? COLORS.GREEN_500 : COLORS.RED_500}
        />

        <Title>{numberToPercentage(stats.successPercentage)}</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </>
    </Container>
  )
}
