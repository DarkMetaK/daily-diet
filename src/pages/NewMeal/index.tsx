import { useState } from 'react'
import { View } from 'react-native'

import { 
  Card,
  Column,
  Container,
  Text
} from './styles'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Calendar } from '@/components/Calendar'
import { Radio } from '@/components/Radio'
import { Button } from '@/components/Button'

export function NewMeal() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<Date | undefined>(undefined)
  const [mealFitsTheDiet, setMealFitsTheDiet] = useState<boolean | undefined>(undefined)

  function handleChangeDate(_: any, selectedDate: Date | undefined) {
    setDate(selectedDate)
  }

  function handleChangeTime(_: any, selectedTime: Date | undefined) {
    setTime(selectedTime)
  }

  return (
    <Container>
      <Header title="Nova refeição" />

      <Card>
        <Input
          label="Nome"
        />

        <Input
          label="Descrição"
          multiline
          numberOfLines={5}
        />

        <Column>
          <Calendar
            id="date-input"
            inputValue={date}
            onChange={handleChangeDate}
            label="Data"
            style={{ width: '47%' }}
          />

          <Calendar
            id="time-input"
            inputValue={time}
            onChange={handleChangeTime}
            mode="time"
            label="Hora"
            style={{ width: '47%' }}
          />
        </Column>

        <View>
          <Text>Está dentro da dieta?</Text>

          <Column>
            <Radio
              title="Sim"
              selected={mealFitsTheDiet}
              onPress={() => setMealFitsTheDiet(true)}
              style={{ width: '47%' }}
            />

            <Radio
              title="Não"
              status="failure"
              selected={mealFitsTheDiet === false}
              onPress={() => setMealFitsTheDiet(false)}
              style={{ width: '47%' }}
            />
          </Column>        
        </View>

        <Button
          title="Cadastrar refeição"
          style={{ marginTop: 'auto' }}
        />

      </Card>
    </Container>
  )
}
