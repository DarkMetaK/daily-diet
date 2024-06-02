import { useState } from 'react'
import { View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import {
  Card,
  Container,
  Subtitle,
  Text,
  Title
} from './styles'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'

export function Details() {
  const [mealItem, setMealItem] = useState({
    name: 'Sanduíche',
    description: 'Sanduíche de pão integral com atum e salada de alface e tomate',
    createdAt: '12/08/2022 às 16:00',
    status: 'success'
  })

  const route = useRoute()
  const { id } = route.params as { id: string }

  return (
    <Container status="success">
      <Header title="Refeição" />

      <Card>
        <Title>
          {mealItem.name}
        </Title>
        <Text>
          {mealItem.description}
        </Text>

        <Subtitle>
          Data e hora
        </Subtitle>
        <Text>
          {mealItem.createdAt}
        </Text>

        <View style={{ marginTop: 'auto', gap: 8 }}>
          <Button
            title="Editar refeição"
            icon="drive-file-rename-outline"
          />
          <Button
            title="Excluir refeição"
            icon="delete-outline"
            variant="secondary"
          />
        </View>
      </Card>
    </Container>
  )
}
