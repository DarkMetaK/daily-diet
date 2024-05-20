import { StatusBar } from 'expo-status-bar'
import { 
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { ThemeProvider } from 'styled-components/native'

import light from '@/themes/light'

import { Routes } from '@/routes'
import { Loading } from '@/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent
      />

      <ThemeProvider theme={light}>
      {
          fontsLoaded ? (
            <Routes />
          ) : (
            <Loading />
          )
        }
      </ThemeProvider>    
    </>
  )
}
