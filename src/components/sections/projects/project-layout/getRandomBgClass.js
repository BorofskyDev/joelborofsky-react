export const getRandomBgClass = ( excludedClasses = []) => {
    const bgClasses = ['bgLight', 'bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6']
    const filteredClasses = bgClasses.filter(bgClass => !excludedClasses.includes(bgClass))

    return filteredClasses[Math.floor(Math.random() * filteredClasses.length)]
}