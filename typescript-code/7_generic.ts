const ArrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const ArrayOfStrings: Array<string> = ["Hello", "World"]


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(ArrayOfNumbers)
reverse(ArrayOfStrings)
