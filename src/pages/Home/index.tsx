import { useCallback, useState } from 'react'
import { Alert, SectionList } from 'react-native'
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

interface MealStatsProps {
  total: number
  successAmount: number
  failureAmount: number
  successPercentage: number
}

export function Home() {
  const [meals, setMeals] = useState<MealListProps[]>([])
  const [mealStats, setMealStats] = useState<MealStatsProps>({
    total: 0,
    successAmount: 0,
    failureAmount: 0,
    successPercentage: 0,
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      async function fetchMeals() {
        try {
          setIsLoading(true)
          const meals = await getAllMeals()
          const mealMap = new Map<string, MealProps[]>()
          const mealStats = {
            total: 0,
            successAmount: 0,
            failureAmount: 0,
            successPercentage: 0,
          }

          meals.forEach((meal) => {
            mealStats.total++
            if (meal.isWithinDiet) {
              mealStats.successAmount++
            } else {
              mealStats.failureAmount++
            }

            if (!mealMap.has(meal.date)) {
              mealMap.set(meal.date, [])
            }
            mealMap.get(meal.date)!.push(meal)
          })

          const formattedMeals: MealListProps[] = Array.from(
            mealMap,
            ([title, data]) => ({
              title,
              data,
            }),
          )

          mealStats.successPercentage =
            ((mealStats.successAmount * 100) / mealStats.total) | 0

          setMeals(
            formattedMeals.sort(
              (a, b) => dayjs(b.title).unix() - dayjs(a.title).unix(),
            ),
          )
          setMealStats(mealStats)
        } catch (error) {
          Alert.alert(
            'Erro',
            'Um erro inesperado ocorreu ao carregar os dados, por favor tente novamente.',
          )
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
          <Hero stats={mealStats} />

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
