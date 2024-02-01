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