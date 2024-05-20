import { SectionList } from 'react-native'

import logo from '@/assets/logo.png'

import {
  Container,
  Header,
  Logo,
  MealListTitle,
} from './styles'
import { Hero } from './components/Hero'
import { Button } from '@/components/Button'
import { MealItem } from '@/components/MealItem'

export function Home() {
  const data = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

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
          <></>
        )}
        ListHeaderComponent={() => (
          <>
            <MealListTitle>Refeições</MealListTitle>

            <Button
              title="Nova Refeição"
              icon="add"
            />          
          </>
        )}
      />

    </Container>
  )
}
