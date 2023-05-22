export const styles = {
  input: { fontSize: 14, height: 42 },
  description: {
    color: 'black',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '19px',
    fontFamily: 'Inter',
  },
  control: {
    border: 'none',
    cursor: 'pointer',
    color: 'rgba(172, 173, 185, 1)',
  },
  controlUp: {
    ':hover': { borderRadius: '8px' },
    top: 3,
  },
  controlDown: {
    ':disabled': { color: '#D5D6DC' },
    ':hover': { borderRadius: '8px' },
    bottom: 3,
  },
};
