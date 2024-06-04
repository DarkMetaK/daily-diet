import styled, { css } from 'styled-components/native'

interface ErrorProps {
  errorExists: boolean
}

export const Container = styled.View`
  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const InputStyle = styled.TextInput<ErrorProps>`
  padding: 14px;
  min-height: 48px;
  border-radius: 6px;
  border: 1px solid transparent;

  ${({ theme, errorExists }) => css`
    color: ${theme.COLORS.GRAY_700};
    border-color: ${errorExists ? theme.COLORS.RED_500 : theme.COLORS.GRAY_300};
  `}
`

export const ErrorText = styled.Text<ErrorProps>`
  ${({ theme, errorExists }) => css`
    color: ${errorExists ? theme.COLORS.RED_500 : 'transparent'};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`
