import { useCallback, useState } from 'react'
import { SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

import logo from '@/assets/logo.png'
import { MealProps } from '@/storage/config'
import { getAllMeals } from '@/storage/meal/getAllMeals'

import { Container, Header, Logo, ListTitle, SectionTitle } from './styles'
import { Hero } from './components/Hero'
import { Button } from '@/components/Button'
import { MealItem } from '@/components/MealItem'
import { Loading } from '@/components/Loading'

interface MealListProps {
  title: string
  data: MealProps[]
}

export function Home() {
  const [meals, setMeals] = useState<MealListProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      async function fetchMeals() {
        try {
          setIsLoading(true)
          const meals = await getAllMeals()

          console.log(JSON.stringify(meals))

          const formattedMeals = meals.reduce((list: MealListProps[], meal) => {
            const existingDateIndex = list.findIndex(
              (item) => item.title === meal.date,
            )

            if (existingDateIndex != -1) {
              const dateRecords = list[existingDateIndex]
              dateRecords.data.push(meal)

              list[existingDateIndex] = dateRecords
            } else {
              list.push({
                title: meal.date,
                data: [meal],
              })
            }

            return list
          }, [])

          setMeals(formattedMeals)
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      }
      fetchMeals()
    }, []),
  )

  function handleAddNewMeal() {
    navigation.navigate('meal')
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Hero
            title="90,86%"
            subtitle="das refeições dentro da dieta"
            variant="success"
          />

          <SectionList
            sections={meals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MealItem
                id={item.id}
                title={item.name}
                time={item.time}
                status={item.isWithinDiet ? 'success' : 'failure'}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <SectionTitle>{dayjs(title).format('DD/MM/YY')}</SectionTitle>
            )}
            ListHeaderComponent={() => (
              <>
                <ListTitle>Refeições</ListTitle>

                <Button
                  title="Nova Refeição"
                  icon="add"
                  style={{
                    marginBottom: 8,
                  }}
                  onPress={handleAddNewMeal}
                />
              </>
            )}
            ListEmptyComponent={() => (
              <ListTitle
                style={{
                  textAlign: 'center',
                }}
              >
                Comece adicionando uma nova refeição!
              </ListTitle>
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </Container>
  )
}
