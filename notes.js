const fs = require('fs');
let readNote = () => {
    try {
        var valueOfFile = fs.readFileSync('./data/notes.json', { encoding: 'utf8' })
        return (JSON.parse(valueOfFile));
    }
    catch (err) { }
}
let writeNote = (notes) => {
    fs.writeFileSync('./data/notes.json', JSON.stringify(notes));
}
let addNote = (title, body) => {
    let notes = readNote();
    let obj = {
        title: title,
        body: body
    }
    let duplicateNote = notes.filter((obj) => obj.title === title)
    if (duplicateNote.length === 0) {
        notes.push(obj);
        writeNote(notes);
        return obj;
    }
        return "duplicate"
}
let listAll = () => {
    return readNote();
}
let read = (title) => {
  let result = readNote().filter((arg)=>arg.title === title);
  return result[0];
}
//to remove note
let remove = (title)=>{
    notes = readNote();
    result =notes.filter((arg)=>arg.title!==title)
    writeNote(result);
    return notes.length !== result.length;
}
module.exports = {
    addNote,
    listAll,
    read,
    remove
}