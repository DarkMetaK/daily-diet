import styled, { css } from 'styled-components/native'
import Material from '@expo/vector-icons/MaterialIcons'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
`

export const ReturnIcon = styled(Material).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600,
}))``

export const Title = styled.Text`
  flex: 1;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`
