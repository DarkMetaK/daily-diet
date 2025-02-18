import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px 0 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Card = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
    gap: 16,
  },
}))`
  margin-top: 32px;
  padding: 32px 24px;
  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Column = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const Text = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
