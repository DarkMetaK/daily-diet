import { ViewProps } from 'react-native'

import { 
  Container,
  Subtitle,
  Title 
} from './styles'

interface StatsCardProps extends ViewProps {
  title: string
  subtitle: string
  variant?: 'default' | 'success' | 'failure'
}

export function StatsCard({ title, subtitle, variant='default', ...rest }: StatsCardProps) {
  return (
    <Container variant={variant} {...rest}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
