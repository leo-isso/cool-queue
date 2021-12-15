import colors from '../../styles/colors'

export const variantConfig = {
  default: {
    standard: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      color: colors.white
    },
    onHover: {
      backgroundColor: colors.primaryDark,
      borderColor: colors.primaryDark,
      color: colors.white
    }
  },
  danger: {
    standard: {
      backgroundColor: colors.danger,
      borderColor: colors.danger,
      color: colors.white
    },
    onHover: {
      backgroundColor: colors.dangerDark,
      borderColor: colors.dangerDark,
      color: colors.white
    }
  },
  reverse: {
    standard: {
      backgroundColor: colors.white,
      borderColor: colors.primary,
      color: colors.primary
    },
    onHover: {
      backgroundColor: colors.white,
      borderColor: colors.primaryDark,
      color: colors.primaryDark
    }
  }
}
