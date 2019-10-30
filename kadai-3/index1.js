const day = parseInt(process.argv[2])

if (day % 3 === 1){
    console.log("あなたは天才です。")
}else if (day % 3 === 1){
    console.log("あなたは秀才です。")
}else if (day % 3 === 2){
    console.log("あなたは凡人です。")
}