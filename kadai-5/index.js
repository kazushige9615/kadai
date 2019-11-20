const profile = {
    fistName: "kenta",
    familyName: "maeda",
    age: 22,
    hobby: "singing",
};

const keys = Object.keys(profile);

for (let i = 0; i < keys.length; i = i+1) {
    const key = keys[i];
    const value = profile[key];
    const text = "私の" + key + "は"　+ value + "です。";
    console.log(text);
}

for (let key of keys){
    const value = profile[key];
    const text = "私の"+ key + "は、" + value + "です。";
    console.log(text);
}