function indiceRandomico(valor){
    const arr = [...valor]
    const indice = parseInt(Math.random() * 10)
    return (arr[indice])
}

const az =['a','b','c','d','f','g','h','i','j']


console.log(indiceRandomico(az))