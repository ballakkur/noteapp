const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

let titleOptions = {

    describe: "title of the note",
    demand: true,
    alias: 't'
}
var commond = process.argv[2];

const argv = yargs

    .command('add', 'add a new note', {
        title: titleOptions,
        body: {
            describe: "the body of the note",
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'list all the notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv
// console.log(process.argv);
console.log(argv);
if (commond === 'add') {
    let result = notes.addNote(argv.title, argv.body);
    if (result === "duplicate") {
        console.log("title already exists");
    }
    else {
        console.log(result);
    }
}
else if (commond === 'list') {
    let result = notes.listAll();
    /* for(i=0;i<result.length;i++){
    console.log(`title:${result[i].title}  body:${result[i].body} `);
    } */
    result.forEach(element => {
        console.log(element);
    });
}
else if (commond === 'read') {

    let result = notes.read(argv.title);
    if (result) {
        console.log("title:", result.title);
        console.log("========")
        console.log("body:", result.body);
    }
    else {
        console.log("no note found with the title");

    }
}
else if (commond === 'remove') {
    let result = notes.remove(argv.title);
    if (result) {
        console.log("deletion successful");
    } else {
        console.log("nothing to delete")
    }
}
else {
    console.log("commond not recognized")
}
