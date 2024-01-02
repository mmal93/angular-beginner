import * as Ex1 from "./ex-1"
import {Person, printPerson} from "./ex-2"
import getFirstItem from "./ex-3"
import {Colours, printColour} from "./ex-4"
import Rectangle from "./ex-5"
import runApp6 from "./ex-6"
import runApp7 from "./ex-7"
import runApp8 from "./ex-8"
import runApp9 from "./ex-9"
function runApp1() : void {
    let ex1 : HTMLParagraphElement = document.createElement('p');
    ex1.innerHTML = 'Ex1.sumOfArray([1, 2, 3, 4, 5]) Is: ' + Ex1.sumOfArray([1, 2, 3, 4, 5]);
    document.body.append(ex1);

    const Jim : Person = {
        name: 'Jim',
        age: 30,
        email: 'jim@arrowhitech.com'
    }

    printPerson(Jim);

    let ex3 : HTMLParagraphElement = document.createElement('p');
    ex3.innerHTML = 'First item in [1, 2, 3, 4, 5] is: ' + getFirstItem([1, 2, 3, 4, 5]);
    document.body.append(ex3);
    
    printColour(Colours.RED)
    
    let ex5 : HTMLParagraphElement = document.createElement('p');
    const rectangle = new Rectangle(9, 9);
    ex5.innerHTML = 'Rectangle Area of 9 x 9 is: ' + rectangle.getArea();
    document.body.append(ex5);
    runApp6();
    runApp7();
    runApp8();
    runApp9();
}

export default runApp1
