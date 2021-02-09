class People{

    constructor(){
        this._type = 'Person'
        this._date = new Date().getTime()
    }
    
    static createEnginer(id,name,type){
        class Enginer extends People{
            constructor(name, id){
                super(id, name, type)
                this._name = name
                this._id = id
                this._type = 'Enginner'
            }
        }

        return new Enginer(id,name,type);
    }

    static createStudent(id, name, course,type){
        class Student extends People{
            constructor(id, name, course){
                super(id,name,type)
                this._id = id 
                this._name = name 
                this._course = course 
                this._type = 'Student'
            }

        }
        return new Student(id, name, course);
    }
}

const novaPessoa1 = People.createStudent('33','Rafael','Medicina')
const novaPessoa2 = People.createEnginer('Andressa','2')
const novaPessoa3 = People.createEnginer('Rafael','26')

console.log(novaPessoa1)
console.log(novaPessoa2)


