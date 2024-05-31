import { SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logo from '@/assets/logo.png'

import {
  Container,
  Header,
  Logo,
  ListTitle,
  SectionTitle,
} from './styles'
import { Hero } from './components/Hero'
import { Button } from '@/components/Button'
import { MealItem } from '@/components/MealItem'

export function Home() {
  const navigation = useNavigation()

  const data = [
    {
      title: '12/05/2024',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: '11/05/2024',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: '08/05/2024',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: '07/05/2024',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  function handleAddNewMeal() {
    navigation.navigate('meal')
  }

  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>

      <Hero
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        variant="success"
      />

      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <MealItem
            time="20:00"
            title={item}
            status="success"
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>
            {title}
          </SectionTitle>
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
        showsVerticalScrollIndicator={false}
      />

    </Container>
  )
}
