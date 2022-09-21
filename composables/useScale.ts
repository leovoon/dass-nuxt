export default function () {
  return useState('scales', () => [
    {
      value: 0,
      color: 'success',
    },
    {
      value: 1,
      color: 'info',
    },
    {
      value: 2,
      color: 'warning',
    },
    {
      value: 3,
      color: 'danger',
    },
  ])
}
