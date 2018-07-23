#!/usr/bin/env node
const yargs = require('yargs')
const { runTerminalScript } = require('./utils.js')

yargs
    .command(
        'prep',
        'preps folder structure for cherry-pick',
        () => {
            runTerminalScript('./prep.sh')
        } 
    )
    .command(
        'unprep',
        'unpreps folder structure for cherry-pick',
        () => {
            runTerminalScript('./unprep.sh')
        }
    )
    .help(

    )
    .argv