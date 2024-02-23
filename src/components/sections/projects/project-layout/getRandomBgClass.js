export const getRandomBgClass = (excludedClasses = []) => {
  const bgClasses = [
    'bgLight',
    'bg-blue',
    'bg-red',
    'bg-violet',
    'bg-yellow',
    'bg-green',
    'bg-pink',
  ]
  const filteredClasses = bgClasses.filter(
    (bgClass) => !excludedClasses.includes(bgClass)
  )

  return filteredClasses[Math.floor(Math.random() * filteredClasses.length)]
}
