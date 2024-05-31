import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface TitleProps {
  status: 'success' | 'failure'
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 32px 0 0 ;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Title = styled.Text<TitleProps>`
  margin-bottom: 8px;

  ${({ theme, status }) => css`
    color: ${
      status === 'success' ? theme.COLORS.GREEN_500: theme.COLORS.RED_500
    };
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
  text-align: center;
`

export const Subtitle = styled.Text`
  margin-bottom: 40px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  text-align: center;
`

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin-bottom: 32px;

  object-fit: cover;
`
