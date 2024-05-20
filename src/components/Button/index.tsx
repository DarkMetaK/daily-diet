import { TouchableOpacityProps } from 'react-native'
import Material from '@expo/vector-icons/MaterialIcons'

import {
  Container,
  Icon,
  Title
} from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  icon?: keyof typeof Material.glyphMap
}

export function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {icon && (
        <Icon
          name={icon}
        />
      )}

      <Title>{title}</Title>
    </Container>
  )
}
