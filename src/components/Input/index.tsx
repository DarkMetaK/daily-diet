import { TextInputProps } from 'react-native'

import { Container, ErrorText, InputStyle, Label } from './styles'

interface InputProps extends TextInputProps {
  label: string
  halfSize?: boolean
  error?: string
}

export function Input({ label, halfSize = false, error, ...rest }: InputProps) {
  return (
    <Container style={halfSize && { width: '50%' }}>
      <Label>{label}</Label>

      <InputStyle errorExists={!!error} {...rest} />

      <ErrorText errorExists={!!error}>{error}</ErrorText>
    </Container>
  )
}
