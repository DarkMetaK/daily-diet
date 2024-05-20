import { useTheme } from 'styled-components/native'

import {
  Container,
  Icon,
  Title,
  Subtitle
} from './styles'

interface HeroProps {
  variant?: 'success' | 'failure'
  title: string,
  subtitle: string,
}

export function Hero({ 
  title,
  subtitle,
  variant = 'success'
}: HeroProps) {
  const { COLORS } = useTheme()

  return (
    <Container
      onPress={() => {}}
      style={variant === 'failure' && {
        backgroundColor: COLORS.RED_100
      }}
      underlayColor={variant === 'failure' ? COLORS.RED_300 : COLORS.GREEN_300}
    >
      <>
        <Icon
          name="arrow-outward"
          color={variant === 'success' ? COLORS.GREEN_500 : COLORS.RED_500 }
        />

        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>          
      </>
    </Container>      
  )
}
