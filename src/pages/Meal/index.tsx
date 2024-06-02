import { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import dayjs from 'dayjs'

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
import { postMeal } from '@/storage/meal/postMeal'

export function Meal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<Date | undefined>(undefined)
  const [isWithinDiet, setIsWithinDiet] = useState<boolean>(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigation = useNavigation()

  async function handleSubmitMeal() {
    if (!name.trim().length || !description.trim().length || !date || !time) {
      return
    }

    try {
      setIsSubmitting(true)
      await postMeal({
        id: Date.now().toString(),
        name: name,
        description: description,
        date: dayjs(date).startOf('day').toISOString(),
        time: time.toISOString(),
        isWithinDiet: isWithinDiet
      })

      navigation.navigate('feedback', {
        status: isWithinDiet ? 'success' : 'failure'
      })
    } catch (error) {
      setIsSubmitting(false)
      console.log(error)
    }
  }

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
          value={name}
          onChangeText={setName}
        />

        <Input
          label="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
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
              selected={isWithinDiet}
              onPress={() => setIsWithinDiet(true)}
              style={{ width: '47%' }}
            />

            <Radio
              title="Não"
              status="failure"
              selected={isWithinDiet === false}
              onPress={() => setIsWithinDiet(false)}
              style={{ width: '47%' }}
            />
          </Column>        
        </View>

        <Button
          title="Cadastrar refeição"
          style={{ marginTop: 'auto' }}
          disabled={isSubmitting}
          onPress={handleSubmitMeal}
        />

      </Card>
    </Container>
  )
}
