const { spawn } = require('child_process')

const terminal = 'bash'
const logBuffer = dataBuffer => console.log(dataBuffer.toString('utf8'))

const runTerminalScript = async (script, arg) => {
  return new Promise((resolve, reject) => {
    console.log('Running:', script)
    if (arg) console.log('with:', arg)
    let ps = spawn(terminal, [script, arg])
    ps.stdout.on('data', logBuffer)
    ps.stdout.on('error', reject)
    ps.stdout.on('end', resolve)
    ps.stdin.end()
  })
}

module.exports = {
  runTerminalScript,
}
