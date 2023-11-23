export const formatGapRace = (gap: string) => {
    if(gap.includes('+')) {
        return  'red-500'
    }
    
    if(gap.includes('-')) {
        return 'green-500'
    }

    return 'white'
}