// read data.txt file
const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf8');

// for each line, print the line
const lines = data.split('\n');

const list_a = lines.map((line) => {
    // split the line by triple space
    const parts = line.split('   ');
    // return the first part
    return parseInt(parts[0]);
});

const list_b = lines.map((line) => {
    // split the line by triple space
    const parts = line.split('   ');
    // return the second part
    return parseInt(parts[1]);
});

// sort the lists
list_a.sort((a, b) => a - b);
list_b.sort((a, b) => a - b);

console.log(list_a);

console.log(list_b);

let total_distance = 0;

list_a.forEach((element, index) => {
    total_distance += Math.abs(element - list_b[index]);
});

let total_similarity = 0;

list_a.forEach((element, index) => {
    // count how many times the element appears in list_b
    const count_a = list_b.filter((el) => el === element).length;

    // compute the similarity score by multiplying the element by the count
    total_similarity += element * count_a;
});

console.log(total_distance);
console.log(total_similarity);