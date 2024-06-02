export interface MealProps {
  id: string
  name: string
  description: string
  date: string
  time: string
  isWithinDiet: boolean
}

export const MEAL_COLLECTION = '@daily-diet:meals'
