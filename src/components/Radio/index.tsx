import { TouchableOpacityProps } from 'react-native'
import { Container, Status, Title } from './styles'

interface RadioProps extends TouchableOpacityProps {
  title: string
  status?: 'success' | 'failure'
  selected?: boolean
}

export function Radio({
  title,
  status = 'success',
  selected = false,
  ...rest
}: RadioProps) {
  return (
    <Container status={status} selected={selected} {...rest}>
      <Status status={status} />

      <Title>{title}</Title>
    </Container>
  )
}
