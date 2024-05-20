import styled, { css } from 'styled-components/native'

interface StatusIndicatorProps {
  status: 'success' | 'failure'
}

export const Container = styled.TouchableOpacity`
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  padding: 14px 16px 14px 12px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const Time = styled.Text`
  padding-right: 12px;
  border-style: solid;
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-right-width: 1px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  width: 14px;
  height: 14px;
  border-radius: 9999px;
  background-color: ${({ theme, status }) => 
    status === 'success' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300
  };
`