let number = 5;
let string = 'pet';
let array = [1, 'dva', 3.14, { cetiri: 4 }, 0b101];

number = 'pet';
string = 5;

console.log(number + string);
console.log(string + number);

if (number && string && array) {
    function process(filter, map, callback) {
        const newArray = array.filter(filter).map(map);
        callback(newArray);
    }

    function execute() {
        process(
            x => typeof x === 'number',
            x => -x,
            negativeNumbers => console.log(negativeNumbers)
        );
    };

    window.onload = execute;
}
