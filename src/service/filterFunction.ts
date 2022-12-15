import { TODO } from "../models/TODO"

export default function filterToDo (array: TODO[], searchParametr: any, input: string) {
    switch (searchParametr) {
        case 'name': {
            return array.filter(item => {
                if (item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                    return item 
                }
            })
        }
        case 'description': {
            return array.filter(item => {
                if (item.description.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                    return item 
                }
            })
        }
        case 'date': {
            return array.filter(item => {
                if (item.date?.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
                    return item 
                }
            })
        }
    }

} 

