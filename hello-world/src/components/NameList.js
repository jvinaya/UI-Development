import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Vinaya',
            age: 24,
            skill: 'all'
        },
        {
            id: 2,
            name: 'Vinayaa',
            age: 24,
            skill: 'all'
        },
        {
            id: 3,
            name: 'Vinayaaa',
            age: 24,
            skill: 'React'
        }
    ]
    // const personList = persons.map(person => ( <Person key={person.id} person={person}></Person>))
    // return <div>{personList}</div>
    const namesList = names.map((name, index) => ( <h2 key={index}>{index} {name}</h2>))
    return <div>{namesList}</div>
}

export default NameList
