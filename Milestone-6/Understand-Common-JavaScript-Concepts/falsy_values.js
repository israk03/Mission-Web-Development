// A falsy value is a value that is considered false when evaluated in a Boolean context.

// false — The Boolean false itself.
if (false){
    console.log('Falsy');
}


// 0 — The number 0 (both positive and negative zero).
if (0) {
    console.log('Falsy');
}


// "" (empty string) — Any string with zero characters, both single ('') and double ("") quotes.
if ("") {
    console.log('Falsy');
}


// null — Represents an intentional absence of any object value.
if (null) {
    console.log('Falsy');
}


// undefined — Represents a value that has not been assigned yet.
if(undefined){
    console.log('Falsy');
}


// NaN (Not-a-Number) — Represents a computational error (e.g., result of 0/0).
if (NaN){
    console.log('Falsy');
}