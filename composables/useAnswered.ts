export default function () {
  const cookie = useCookie('answered')

  return useState('answers', () => {
    return cookie.value ? cookie.value : []
  })
}
