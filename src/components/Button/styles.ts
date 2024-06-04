import styled, { css } from 'styled-components/native'
import Material from '@expo/vector-icons/MaterialIcons'

interface VariantProps {
  variant: 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<VariantProps>`
  padding: 16px 24px;
  border: 1px solid transparent;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.COLORS.GRAY_600 : 'transparent'};
  border-color: ${({ theme, variant }) =>
    variant === 'primary' ? 'transparent' : theme.COLORS.GRAY_600};
`

export const Icon = styled<typeof Material.defaultProps & VariantProps>(
  Material,
).attrs(({ theme, variant }) => ({
  size: 18,
  color: variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))``

export const Title = styled.Text<VariantProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'primary'
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_700};

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`
