const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

// ""がないから
try {
    console.log(str1)
    console.log(JSON.parse(str1))
} catch (error) {
    console.log (error)
}
// ''は認められないから
try {
    console.log(str2)
    console.log(JSON.parse(str2))
} catch (error) {
    console.log (error)
}

try {
    console.log(str3)
    console.log(JSON.parse(str3))
} catch (error) {
    console.log (error)
}

// undefindedは使えないから
try {
    console.log(str4)
    console.log(JSON.parse(str4))
} catch (error) {
    console.log (error)
}

try {
    console.log(str5)
    console.log(JSON.parse(str5))
} catch (error) {
    console.log (error)
}

// ""がないから
try {
    console.log(str6)
    console.log(JSON.parse(str6))
} catch (error) {
    console.log (error)
}