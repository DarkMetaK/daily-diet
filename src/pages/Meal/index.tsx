import { Alert, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import dayjs from 'dayjs'

import { Card, Column, Container, Text } from './styles'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Calendar } from '@/components/Calendar'
import { Radio } from '@/components/Radio'
import { Button } from '@/components/Button'
import { postMeal } from '@/storage/meal/postMeal'

const mealForm = z
  .object({
    name: z
      .string({ required_error: 'O nome é obrigatório.' })
      .trim()
      .min(1, 'O nome é obrigatório.'),
    description: z.string().trim().optional(),
    date: z.date({ required_error: 'A data é obrigatória.' }),
    time: z.date({ required_error: 'O horário é obrigatório.' }),
    isWithinDiet: z.boolean(),
  })
  .required()

type MealForm = z.infer<typeof mealForm>

export function Meal() {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<MealForm>({
    resolver: zodResolver(mealForm),
    defaultValues: {
      name: '',
      description: '',
      date: undefined,
      time: undefined,
      isWithinDiet: true,
    },
  })
  const navigation = useNavigation()

  async function handleSubmitMeal(data: MealForm) {
    try {
      await postMeal({
        id: Date.now().toString(),
        name: data.name,
        description: data.description,
        date: dayjs(data.date).startOf('day').toISOString(),
        time: data.time.toISOString(),
        isWithinDiet: data.isWithinDiet,
      })

      reset()
      navigation.navigate('feedback', {
        status: data.isWithinDiet ? 'success' : 'failure',
      })
    } catch (error) {
      Alert.alert(
        'Erro',
        'Um erro inesperado ocorreu, por favor tente novamente.',
      )
      console.log(error)
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" />

      <Card>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              label="Nome*"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              error={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <Input
              label="Descrição"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              error={errors.description?.message}
            />
          )}
        />

        <Column>
          <Controller
            control={control}
            name="date"
            render={({ field }) => (
              <Calendar
                id="date-input"
                label="Data*"
                inputValue={field.value}
                onChange={(_, date) => field.onChange(date)}
                style={{ width: '47%' }}
                error={errors.date?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="time"
            render={({ field }) => (
              <Calendar
                id="time-input"
                label="Hora*"
                inputValue={field.value}
                onChange={(_, date) => field.onChange(date)}
                mode="time"
                style={{ width: '47%' }}
                error={errors.time?.message}
              />
            )}
          />
        </Column>

        <View>
          <Text>Está dentro da dieta?</Text>

          <Column>
            <Controller
              control={control}
              name="isWithinDiet"
              render={({ field }) => (
                <Radio
                  title="Sim"
                  selected={field.value}
                  onPress={() => field.onChange(true)}
                  style={{ width: '47%' }}
                />
              )}
            />

            <Controller
              control={control}
              name="isWithinDiet"
              render={({ field }) => (
                <Radio
                  title="Não"
                  status="failure"
                  selected={!field.value}
                  onPress={() => field.onChange(false)}
                  style={{ width: '47%' }}
                />
              )}
            />
          </Column>
        </View>

        <Button
          title="Cadastrar refeição"
          style={{ marginTop: 'auto' }}
          disabled={isSubmitting}
          onPress={handleSubmit(handleSubmitMeal)}
        />
      </Card>
    </Container>
  )
}
