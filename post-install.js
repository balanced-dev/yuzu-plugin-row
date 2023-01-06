const fs = require('fs');
const path = require('path');
const files = [ 
    {
        source: './_dev/_templates/blocks/rowBuilder/parRowBuilderItems.schema',
        dest: '../../_dev/_templates/blocks/__row/rowBuilder/parRowBuilderItems.schema',
    },
    {
        source: './_dev/_templates/blocks/rowBuilder/parRowBuilderConfig.schema',
        dest: '../../_dev/_templates/blocks/__row/rowBuilder/parRowBuilderConfig.schema',
    },
    {
        source: './_dev/_templates/_dataStructures/dataRows.schema',
        dest: '../../_dev/_templates/_dataStructures/_row/dataRows.schema'
    }
];

console.log(`Yuzu Definition Grid Plugin PostInstall`);

files.forEach((file) => {
    if(fs.existsSync('../../package.json')) {
        let destPath = path.dirname(file.dest);
        if(fs.existsSync(destPath) && fs.existsSync(file.dest)) {
            console.log(`${file.dest} already installed, not overwriting`);
        }
        else if(!fs.existsSync(file.source))  {
            console.log(`${file.source}, source doesn't exist`);
        }
        else {
            console.log(`Installing file to ${file.dest}`);
            if(!fs.existsSync(destPath)) {
                fs.mkdirSync(destPath, { recursive: true })
            }
            fs.renameSync(file.source, file.dest);
        }
    }
})