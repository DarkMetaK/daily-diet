import styled, { css } from 'styled-components/native'

interface ContainerProps {
  variant: 'default' | 'success' | 'failure'
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme, variant }) =>
    variant === 'default'
      ? theme.COLORS.GRAY_200
      : variant === 'success'
        ? theme.COLORS.GREEN_100
        : theme.COLORS.RED_100};
`

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const Subtitle = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
