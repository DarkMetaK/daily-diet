import { TouchableOpacityProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  StatusIndicator,
  Time,
  Title
} from './styles'

interface MealItemProps extends TouchableOpacityProps {
  time: string
  title: string
  status: 'success' | 'failure'
}

export function MealItem({
  time,
  title,
  status,
  ...rest
}: MealItemProps) {
  const navigation = useNavigation()

  function handleOpenMealDetails() {
    navigation.navigate('details', {
      id: '1',
    })
  }

  return (
    <Container
      onPress={handleOpenMealDetails}
      {...rest}
    >
      <Time>{time}</Time>

      <Title>{title}</Title>

      <StatusIndicator status={status} />
    </Container>
  )
}
