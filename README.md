# Type Error with Array in Function Parameter
This repo demonstrates a common type error in TypeScript when working with arrays and function parameters.  The bug showcases an example where a function expecting a string argument is passed an array of strings, which leads to a type error. The solution shows how to correctly handle this scenario by either modifying the function signature to accept an array or by iterating over the array and processing the strings individually.  This example highlights the importance of ensuring type compatibility between function parameters and arguments in TypeScript.

## How to Reproduce
1. Clone the repo.
2. Run `tsc bug.ts` to compile the code. You will encounter a type error.
3. Run `tsc bugSolution.ts` to see the corrected code that compiles without errors.