import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px 0 0 ;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Card = styled.View`
  flex: 1;
  margin-top: 32px;
  padding: 32px 24px;
  border-radius: 20px 20px 0 0;
  gap: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Column = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
