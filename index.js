const baseAPI = 'https://pokeapi.co/api/v2/pokemon/'

const name_div = document.querySelector('#name-pokemon')
const description_div = document.querySelector('description-pokemon')
const figure_div = document.querySelector('img')


const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}

document.addEventListener('DOMContentLoaded', () => {
    const random = getRandom(1, 151)
    fetchData(random)
})


const fetchData = async (id) => {
    try {
        const response = await fetch(`${baseAPI}${id}`)
        const data = await response.json()

        printCard(data)



    } catch (error) {
        alert("HA OCURRIDO UN ERROR \n\n" + error)
    }
}


const printCard = (data) => {
    const name = data.name
    name_div.append(name)

    const figure = data.sprites.other.dream_world.front_default
    figure_div.src = `${figure}`

}