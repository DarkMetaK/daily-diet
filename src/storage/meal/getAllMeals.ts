import AsyncStorage from '@react-native-async-storage/async-storage'

import { MealProps, MEAL_COLLECTION } from '../config'

export async function getAllMeals(): Promise<MealProps[]> {
  try {
    const response = await AsyncStorage.getItem(MEAL_COLLECTION)

    if (response) {
      return JSON.parse(response)
    }
    
    return []
  } catch (error) {
    throw error
  }
}
