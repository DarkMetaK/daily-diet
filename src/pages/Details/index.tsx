import { useCallback, useState } from 'react'
import { Alert, View } from 'react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import dayjs from 'dayjs'

import { MealProps } from '@/storage/config'
import { getMealById } from '@/storage/meal/getMealById'

import { Card, Container, Subtitle, Text, Title } from './styles'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Loading } from '@/components/Loading'
import { deleteMealById } from '@/storage/meal/deleteMealById'

export function Details() {
  const [mealItem, setMealItem] = useState<MealProps>({} as MealProps)
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as { id: string }

  useFocusEffect(
    useCallback(() => {
      async function fetchMealById() {
        try {
          setIsLoading(true)
          const meal = await getMealById(id)

          if (meal) {
            setMealItem(meal)
          }

          setIsLoading(false)
        } catch (error) {
          Alert.alert(
            'Erro',
            'Um erro inesperado ocorreu ao carregar os dados, por favor tente novamente.',
          )
          console.log(error)
          navigation.navigate('home')
        }
      }
      fetchMealById()
    }, [id, navigation]),
  )

  function handleUpdateMeal() {
    navigation.navigate('meal', {
      id,
    })
  }

  function handleDeleteMeal() {
    Alert.alert('', 'Deseja realmente excluir o registro da refeição?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteMealById(id)
            navigation.navigate('home')
          } catch (error) {
            Alert.alert(
              'Erro',
              'Um erro inesperado ocorreu ao tentar remover, por favor tente novamente.',
            )
            console.log(error)
          }
        },
      },
    ])
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container status={mealItem.isWithinDiet ? 'success' : 'failure'}>
      <Header title="Refeição" />

      <Card>
        <Title>{mealItem.name}</Title>
        <Text>{mealItem.description}</Text>

        <Subtitle>Data e hora</Subtitle>
        <Text>
          {`${dayjs(mealItem.date).format('DD/MM/YYYY')} às ${dayjs(mealItem.time).format('HH:mm')}`}
        </Text>

        <View style={{ marginTop: 'auto', gap: 8 }}>
          <Button
            title="Editar refeição"
            icon="drive-file-rename-outline"
            onPress={handleUpdateMeal}
          />

          <Button
            title="Excluir refeição"
            icon="delete-outline"
            variant="secondary"
            onPress={handleDeleteMeal}
          />
        </View>
      </Card>
    </Container>
  )
}
