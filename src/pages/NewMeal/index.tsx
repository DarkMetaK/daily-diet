import { useState } from 'react'

import { 
  Card,
  Column,
  Container
} from './styles'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Calendar } from '@/components/Calendar'

export function NewMeal() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<Date | undefined>(undefined)

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
            style={{ width: '47%', marginRight: 10 }}
          />

          <Calendar
            id="time-input"
            inputValue={time}
            onChange={handleChangeTime}
            mode="time"
            label="Hora"
            style={{ width: '47%', marginLeft: 10 }}
          />
        </Column>
      </Card>
    </Container>
  )
}
