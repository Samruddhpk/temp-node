// OS module
const os = require("os")

// get current user info
const user = os.userInfo()
console.log(user)

// get system uptime
console.log(`System uptime is ${os.uptime()} seconds`)

// get current os info

const currentOs = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
}

console.log(currentOs)
