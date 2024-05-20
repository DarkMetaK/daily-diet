import { TouchableOpacityProps } from 'react-native'

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
  return (
    <Container {...rest}>
      <Time>{time}</Time>

      <Title>{title}</Title>

      <StatusIndicator status={status} />
    </Container>
  )
}
