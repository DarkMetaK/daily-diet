import { getAllMeals } from './getAllMeals'

export async function getMealById(id: string) {
  try {
    const allMeals = await getAllMeals()
    const meal = allMeals.find((meal) => meal.id === id)

    return meal
  } catch (error) {
    throw error
  }
}
