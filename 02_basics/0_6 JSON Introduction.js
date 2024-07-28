/**
 * 
 * JSON(JavaScript Object notation) is a lightweight data interchange format that is easy for humans to read and write , and easy for machines to parse and generate. It is commonly used for transmitting data in web applications between a server and a client.

Key-Charatersistics of JSON : -
Key Characteristics of JSON:
Text-Based: JSON is a text format that is completely language-independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
Data Structure: JSON is built on two structures:
A collection of name/value pairs: In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
An ordered list of values: In most languages, this is realized as an array, vector, list, or sequence.




JSON Syntax:
Objects: An unordered set of name/value pairs. An object begins with { and ends with }. Each name is followed by : and the name/value pairs are separated by ,.


{
    "name": "John",
    "age": 30,
    "city": "New York"
}


Arrays: An ordered collection of values. An array begins with [ and ends with ]. Values are separated by ,.


[
    "apple",
    "banana",
    "cherry"
]

Values: A value can be a string in double quotes, a number, a boolean (true or false), null, an object, or an array.
{
    "string": "Hello, World!",
    "number": 123,
    "boolean": true,
    "nullValue": null,
    "object": { "key": "value" },
    "array": [1, 2, 3]
}


Example Usage:
JavaScript:


const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); // Output: {"name":"John","age":30,"city":"New York"}


const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John

const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString); // Output: {"name":"John","age":30,"city":"New York"}


 * 
 */

