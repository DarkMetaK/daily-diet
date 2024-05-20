import styled, { css } from 'styled-components/native'
import Material from '@expo/vector-icons/MaterialIcons'

export const Container = styled.TouchableHighlight`
  width: 100%;
  padding: 20px 16px;
  margin-bottom: 40px;
  border-radius: 8px;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.GREEN_100};
`

export const Icon = styled(Material).attrs(({ theme }) => ({
  size: 24,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_700};
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE['2XL']}px;
  `}

  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
      color: ${theme.COLORS.GRAY_600};
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.SM}px;
  `}

  text-align: center;
`
