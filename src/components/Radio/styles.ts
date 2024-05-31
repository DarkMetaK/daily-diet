import styled, { css } from 'styled-components/native'

type Status = {
  status: 'success' | 'failure'
}

interface ContainerProps extends Status {
  selected: boolean
}

interface StatusProps extends Status {}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  padding: 16px;
  border: 1px solid;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${({ theme, status, selected }) => {
    if (selected) {
      return css`
        background-color: ${
          status === 'success' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100
        };
        border-color: ${
          status === 'success' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500
        };
    `
    }
    else {
      return css`
        background-color: ${theme.COLORS.GRAY_200};
        border-color: transparent;
      `
    }
  }}
`

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;

  background-color: ${({ theme, status }) => 
    status === 'success' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500
  };
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
