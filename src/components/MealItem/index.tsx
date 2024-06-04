import { TouchableOpacityProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

import { Container, StatusIndicator, Time, Title } from './styles'

interface MealItemProps extends TouchableOpacityProps {
  id: string
  title: string
  time: string
  status: 'success' | 'failure'
}

export function MealItem({ id, title, time, status, ...rest }: MealItemProps) {
  const navigation = useNavigation()

  function handleOpenMealDetails() {
    navigation.navigate('details', {
      id,
    })
  }

  return (
    <Container onPress={handleOpenMealDetails} {...rest}>
      <Time>{dayjs(time).format('HH:mm')}</Time>

      <Title>{title}</Title>

      <StatusIndicator status={status} />
    </Container>
  )
}
