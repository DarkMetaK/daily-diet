import { TextInputProps } from 'react-native'

import { 
  Container,
  InputStyle,
  Label
} from './styles'

interface InputProps extends TextInputProps {
  label: string
  halfSize?: boolean
}

export function Input({ label, halfSize=false, ...rest }: InputProps) {
  return (
    <Container style={halfSize && { width: '50%' }}>
      <Label>{label}</Label>

      <InputStyle {...rest} />
    </Container>
  )
}
