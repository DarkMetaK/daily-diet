import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/pages/Home'
import { Stats } from '@/pages/Stats'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="stats"
        component={Stats}
      />
    </Navigator>
  )
}
