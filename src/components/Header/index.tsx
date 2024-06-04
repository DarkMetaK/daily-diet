import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, ReturnIcon, Title } from './styles'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleGoBack}>
        <ReturnIcon name="arrow-back" />
      </TouchableOpacity>

      <Title>{title}</Title>
    </Container>
  )
}
