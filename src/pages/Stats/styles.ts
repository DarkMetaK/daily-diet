import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Material from '@expo/vector-icons/MaterialIcons'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px 0 0 ;

  background-color: ${({ theme }) => theme.COLORS.GREEN_100};
`

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE['2XL']}px;
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const ReturnIcon = styled(Material).attrs(() => ({
  size: 32,
}))`
  position: absolute;
  left: 24px;
`

export const Card = styled.View`
  flex: 1;
  margin-top: 32px;
  padding: 32px 24px;
  border-radius: 20px 20px 0 0;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Column = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
`
