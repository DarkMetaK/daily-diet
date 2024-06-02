import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ContainerProps {
  status: 'success' | 'failure'
}

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  padding: 32px 0 0 ;

  background-color: ${({ theme, status }) => 
      status === 'success' ? theme.COLORS.GREEN_100: theme.COLORS.RED_100
    };
`

export const Card = styled.View`
  flex: 1;
  margin-top: 32px;
  padding: 32px 24px;
  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`

export const Subtitle = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const Text = styled.Text`
  margin-bottom: 24px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

