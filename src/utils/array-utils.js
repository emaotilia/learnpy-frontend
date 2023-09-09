import { getRandomInteger } from "./random-utils"

export const getArray = (length) => Array.from(Array(length).keys());

export const getArrayRandomLength = (min, max) => getArray(getRandomInteger(min, max));

export const toggleDifficultyFromArray = (difficulties, difficulty) => {
    if (difficulties.includes(difficulty)) {
        difficulties.splice(difficulties.indexOf(difficulty), 1)
    }
    else {
        difficulties.push(difficulty)
    }
    
    return difficulties
}