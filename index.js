class People{

    constructor(type){
        this._type = type
        this._date = new Date().getTime()
    }
    static createMedician(id,name,type){
        return new People('Medico')
    }
}

const novaPessoa = People.createMedician('1','Paulo')

console.log(novaPessoa)


