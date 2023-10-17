const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

function ImpliedReturn() {
    return <>
    <h1>Implied Return</h1>
    fourTimesFive = {fourTimesFive + ""}<br/>
    multiply(4, 5) = {fourTimesFive + ""}
    </>
}

export default ImpliedReturn;