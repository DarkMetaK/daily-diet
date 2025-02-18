import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/pages/Home'
import { Stats } from '@/pages/Stats'
import { Meal } from '@/pages/Meal'
import { Feedback } from '@/pages/Feedback'
import { Details } from '@/pages/Details'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="meal" component={Meal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="details" component={Details} />
    </Navigator>
  )
}
