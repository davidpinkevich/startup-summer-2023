export const styles = {
  input: { fontSize: 14, height: 42 },
  description: {
    color: 'black',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '19px',
    fontFamily: 'Inter',
    marginBottom: 8,
  },
  control: {
    border: 'none',
    cursor: 'pointer',
    color: 'rgba(172, 173, 185, 1)',
  },
  controlUp: {
    top: 3,
    ':hover': { borderRadius: '8px' },
  },
  controlDown: {
    ':disabled': { color: '#D5D6DC' },
    ':hover': { borderRadius: '8px' },
    bottom: 3,
  },
};
