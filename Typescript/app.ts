export {}

interface usersType {
    name: string,
    class: number,
    place: string,
    getNumber:()=>string
}

class App {
    test(){
        let users:usersType = {
            name: 'Vinaya',
            class: 9,
            place: 'Kannur',
            getNumber: function()
            {
                return this.place
            }
        }
        
        users.name = "Vins"
        console.warn("Test Function working fine")
        console.warn(users.getNumber())
    }
}

let a = new App();
a.test();