export function getAvatar(item){
    if(item?.details?.sprites.other.dream_world.front_default !== null)
        return item?.details?.sprites.other.dream_world.front_default

    if(item?.details?.sprites.front_default !== null)
        return item?.details?.sprites.front_default

    if(item?.details?.sprites.other.home.front_default !== null)
        return item?.details?.sprites.other.home.front_default

    if(item?.details?.sprites.other['official-artwork'].front_default !== null)
        return item?.details?.sprites.other['official-artwork'].front_default

    return require('@/assets/unk.png')
}