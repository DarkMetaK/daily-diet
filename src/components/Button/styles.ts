import styled, { css } from 'styled-components/native'
import Material from '@expo/vector-icons/MaterialIcons'

export const Container = styled.TouchableOpacity`
  padding: 16px 24px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Icon = styled(Material).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
`

export const Title = styled.Text`
  ${({ theme }) => css`
      color: ${theme.COLORS.WHITE};
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
