class People {

    constructor() {
        this._type = 'Person'
        this._date = new Date().getTime()
    }

    static createEnginer(id, name) {
        class Enginer extends People {
            constructor(id, name, type) {
                super(id, name)
                this._name = name
                this._id = id
                this._type = 'Enginner'
            }
        }

        return new Enginer(id, name);
    }

    static createStudent(id, name, type) {

        class Student extends People {
            constructor(id, name ) {
                //ther order must be respected
                super(id, name, type)
                this._name = name
                this._id = id
                this._type = 'Student'
            }

        }
        return new Student(id, name);
    }
}

