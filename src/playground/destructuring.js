// const book = {
//     title:'cool book',
//     auther:'Ryan Holiday',
//     publisher: {
//         // name:'Penguin'
//     }
// }

// const {name:publisherName = "Self Published"} = book.publisher

// console.log(publisherName)

const item = ['Coffee','$2','$2.5','$2.75']

const [name,small,medium,large] = item

console.log(`A medium ${name} costs ${medium}`)