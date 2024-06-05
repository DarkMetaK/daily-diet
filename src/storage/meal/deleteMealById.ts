import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '../config'
import { getAllMeals } from './getAllMeals'

export async function deleteMealById(id: string) {
  try {
    const allMeals = await getAllMeals()
    const mealIndex = allMeals.findIndex((meal) => meal.id === id)

    if (mealIndex !== -1) {
      allMeals.splice(mealIndex, 1)
    }

    AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(allMeals))
  } catch (error) {
    throw error
  }
}
