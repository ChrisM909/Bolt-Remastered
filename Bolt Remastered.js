// Team Members: Christopher Melbow & Ethan Mingerink 
// Name: Christopher Melbow
// Date: 1.22.2024
// Program: Maze
// Bolt ID: B0D0

async function startProgram() {
	// start maze 
	await scrollMatrixText('Start',{ r:255,g:0,b:255}, 30, true)
	await speak ("Start Maze", true);
	setMainLed ({ r:255,g:0,b:255});

	// Blue LED
	await delay(2)
	setSpeed(100);
	await delay(1.4)
	stopRoll()
	setMainLed({ r: 0, g: 0, b: 255})

	// Sound 1 Played
	setHeading(90)
	setSpeed(37)
	await delay(2.65)
	stopRoll()
	await Sound.EightBit.Error.play(true)

	// Red LED
	setHeading(180)
	setSpeed(33)
	await delay(3)
	stopRoll()
	setHeading(220)
	setSpeed(25)
	await delay(3.05)
	stopRoll()
	setMainLed({ r: 255, g: 0, b: 0})

	// Sound 2 Played
	setHeading(120)
	setSpeed(325
	await delay(2.05)
	stopRoll()
	setHeading(40)
	setSpeed(30)
	await delay(1.77)
	stopRoll()
	await Sound.EightBit.SecretFound.play(true)

	// Green LED
	setHeading(120)
	setSpeed(35)
	await delay(1.25)
	stopRoll()
	setMainLed({ r:0. g:255, b:0 })
	setHeading(90)
	setSpeed(45)
	await delay(2.25)
	stopRoll()


}