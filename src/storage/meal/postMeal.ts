import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealProps, MEAL_COLLECTION } from '../config'
import { getAllMeals } from './getAllMeals'

export async function postMeal(meal: MealProps) {
  try {
    const existingMeals = await getAllMeals()
    existingMeals.push(meal)

    AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(existingMeals))
  } catch (error) {
    throw error
  }
}
