export const styles = {
  label: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 700,
    height: 19,
    lineHeight: '19px',
    marginBottom: 8,
  },
  input: {
    fontSize: 14,
    height: 42,
    fontFamily: 'Inter',
  },
  item: {
    fontSize: 14,
    fontFamily: 'Inter',
    '&[data-selected]': {
      backgroundColor: 'rgba(172, 173, 185, 1)',
      color: '#ffffff',
    },

    '&[data-hovered]': {
      backgroundColor: 'rgba(94, 150, 252, 1)',
      color: '#ffffff',
    },
  },
};
