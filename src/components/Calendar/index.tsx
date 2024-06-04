import { useState } from 'react'
import { Pressable } from 'react-native'
import DateTimePicker, {
  DateTimePickerEvent,
  BaseProps,
} from '@react-native-community/datetimepicker'

import { Container, ErrorText, InputStyle, Label } from './styles'

interface CalendarProps extends Omit<BaseProps, 'value'> {
  label: string
  inputValue: Date | undefined
  mode?: 'date' | 'time'
  error?: string
}

export function Calendar({
  label,
  style,
  inputValue,
  mode = 'date',
  error,
  onChange,
  ...rest
}: CalendarProps) {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  function handleChangeCalendar(
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) {
    setShow(false)

    if (selectedDate) {
      setDate(selectedDate)
    }

    if (onChange) {
      onChange(event, selectedDate)
    }
  }

  function handleShowDateTimePicker() {
    setShow(true)
  }

  return (
    <Container style={style}>
      <Label>{label}</Label>

      <Pressable onPress={handleShowDateTimePicker}>
        <InputStyle
          value={
            mode === 'time'
              ? inputValue?.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : inputValue?.toLocaleDateString('pt-BR')
          }
          errorExists={!!error}
          readOnly
        />
      </Pressable>

      <ErrorText errorExists={!!error}>{error}</ErrorText>

      {show && (
        <DateTimePicker
          value={date}
          onChange={handleChangeCalendar}
          mode={mode}
          {...rest}
        />
      )}
    </Container>
  )
}
