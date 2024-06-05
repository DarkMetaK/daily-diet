import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealProps, MEAL_COLLECTION } from '../config'
import { getAllMeals } from './getAllMeals'

export async function putMeal(meal: MealProps) {
  try {
    const existingMeals = await getAllMeals()
    const currentMealIndex = existingMeals.findIndex(
      (item) => item.id === meal.id,
    )

    if (currentMealIndex > -1) {
      existingMeals[currentMealIndex] = meal
    }

    AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(existingMeals))
  } catch (error) {
    throw error
  }
}
