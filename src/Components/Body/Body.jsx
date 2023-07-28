/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';

const Body = () => {
    const notes = [
        {
          id: 1,
          title: "Variable",
          description: {
                         mainTitle1:"Always use const if the type should not be changed (Arrays and Objects).",
                         mainTitle2:"Always use const if the type should not be changed (Arrays and Objects).",
                         mainDescription1:"The const keyword was introduced in ES6 (2015).Variables defined with const cannot be re-declared.Variables defined with const cannot be Reassigned.   Variables defined with const have Block Scope.",
                         mainTitle3:"Only use let if you can't use const.",
                         mainDescription2:"The let keyword was introduced in ES6 (2015).  Variables defined with let cannot be Re-declared.                     Variables defined with let have Block Scope"
                       },
        },
        {
          id: 2,
          title: "Operator",
          description: {mainTitle1:"The exponentiation operator (**) raises the first operand to the power of the second operand.  x ** y produces the same result as Math.pow(x,y)."
                        
                       },
        },
        {
          id: 3,
          title: "Data Type",
          description: {mainTitle1:"JavaScript has 8 Datatypes.",
                        mainDescription1:"1. String 2. Number 3. Bigint 4. Boolean  5. Undefined  6. Null 7. Symbol 8. Object",
                        mainTitle2:"The Object Datatype.  The object data type can contain:",
                        mainDescription2:"1. An object   2. An array  3. A date."
                       },
        },
        {
          id: 3,
          title: "Function",
          description: {mainTitle1:"A JavaScript function is a block of code designed to perform a particular task.",
                        mainTitle2:"A JavaScript function is executed when 'something' invokes it (calls it).",
                        mainDescription1:"Why Functions? With functions you can reuse code You can write code that can be used many times. You can use the same code with different arguments, to produce different results.",

                       },
        },
        // Add more objects here if needed
      ];
      
      
    return (
        <div>
            {
                notes.map(singleNote=><Card key={singleNote.id} singleNote={singleNote}></Card>)
            }
        </div>
    );
};

export default Body;