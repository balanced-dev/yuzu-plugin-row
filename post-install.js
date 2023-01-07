const fs = require('fs');
const path = require('path');
const core = require('yuzu-plugin-core');
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

console.log(`Yuzu Definition Row Plugin PostInstall`);

core.postInstallManageFiles(fs, path, files);