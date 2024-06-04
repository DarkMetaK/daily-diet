import { TouchableOpacityProps } from 'react-native'
import Material from '@expo/vector-icons/MaterialIcons'

import { Container, Icon, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  variant?: 'primary' | 'secondary'
  icon?: keyof typeof Material.glyphMap
}

export function Button({
  title,
  variant = 'primary',
  icon,
  ...rest
}: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {icon && <Icon name={icon} variant={variant} />}

      <Title variant={variant}>{title}</Title>
    </Container>
  )
}
