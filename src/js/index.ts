let Inputfield: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
let input: string = Inputfield.value;
let choice: HTMLSelectElement = <HTMLSelectElement>document.getElementById("selection");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
let colorElement: HTMLDivElement = <HTMLDivElement>document.getElementById("colorContent")
let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content")
buttonElement.addEventListener("click", ToLowerAndUpperCase)

function ToLowerAndUpperCase():void{
    colorElement.innerHTML = "";
    let selection: string = choice.value;
    let userInput: string = Inputfield.value;

    if(selection==="UPPER CASE")
    element.innerHTML = String(userInput).toUpperCase();

    if(selection==="lower case")
    element.innerHTML = String(userInput).toLowerCase();

    if(selection=== "Blue")
    ToColor();

function ToColor():void{
    element.innerHTML = "";
    let userInput: string = Inputfield.value;
    colorElement.innerHTML = String(userInput)

}
};










