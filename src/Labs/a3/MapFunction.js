let numberArray1 = [1, 2, 3, 4, 5, 6];
const square = a => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

function MapFunction() {
    return <>
    <h1>Map</h1>
    squares = {squares.join('')};<br/>
    cubes = {cubes.join('')};

    
    </>
}

export default MapFunction;