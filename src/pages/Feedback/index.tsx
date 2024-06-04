import { useNavigation, useRoute } from '@react-navigation/native'

import positiveFeedback from '@/assets/positive-feedback.png'
import negativeFeedback from '@/assets/negative-feedback.png'

import { Container, Image, Subtitle, Title } from './styles'
import { Button } from '@/components/Button'

export function Feedback() {
  const route = useRoute()
  const navigation = useNavigation()

  const { status } = route.params as { status: 'success' | 'failure' }

  function handleReturnHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title status={status}>
        {status === 'success' ? 'Continue assim!' : 'Que pena!'}
      </Title>

      <Subtitle>
        {status === 'success'
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
      </Subtitle>

      <Image
        source={status === 'success' ? positiveFeedback : negativeFeedback}
      />

      <Button title="Ir para a página inicial" onPress={handleReturnHome} />
    </Container>
  )
}
