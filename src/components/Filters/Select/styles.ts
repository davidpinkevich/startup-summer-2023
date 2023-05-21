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
    whiteSpace: 'initial',
    fontFamily: 'Inter',
    '&[data-selected]': {
      backgroundColor: 'rgba(222, 236, 255, 1)',
      color: 'rgba(35, 33, 52, 1)',
    },

    '&[data-hovered]': {
      backgroundColor: 'rgba(94, 150, 252, 1)',
      color: '#ffffff',
    },
  },
};
