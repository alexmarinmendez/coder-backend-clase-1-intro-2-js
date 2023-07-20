class Persona {
    constructor(nombre) {
        console.log("Se ha creado una persona");

        this.name = nombre
        this.age = 30
        // this.speak = this.speak.bind(this)
    }

    speak = () => {
        console.log("My name is ", this.name);
    }

    walk = () => {
        console.log("Like moon walk!!");
    }

}

const lucas = new Persona("Lucas") 

lucas.speak()