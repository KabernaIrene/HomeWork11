const client = prompt ("Write elements");
const array = [...client.split(" ")];
const element = prompt(`${array} What element do you want to delete?`);

function removeElement (array, item) {
    array.splice(array.indexOf(item), 1);
}

removeElement(array, element);
alert(array);








