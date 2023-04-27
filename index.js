const inquirer = require('inquirer')
const { Circle, Triangle, Square } = require("./lib/shapes")


/* inquire.prompt ([
	{
		name:
		message:
		type:
		validate: (text) => if (text.length <3)
	}
]) */

// Array of Questions for User Input
// txt 3 characters, txt color, shape, shape color

const questions = [
	{
		name: 'logo',
		message: 'Text for Logo',
		type: 'input'
	},

	{
		name: 'textColor',
		message: 'Color for Text',
		type: 'input'
	},

	{
		name: 'shape',
		message: 'Shape of Logo',
		type: 'list',
		choices: ["Circle", "Square", "Triangle",]
	},

	{
		name: 'color',
		message: 'Color of Logo',
		type: 'input'
	}
]

// function to create logo

const fs = require('fs');
function createLogo() {
	inquirer.prompt(questions)
		.then(data => {
			console.log(data)
			let shape = ""
			if (data.shape === "Circle") {
				shape = new Circle()

			}
			if (data.shape === "Triangle") {
				shape = new Triangle()

			}

			if (data.shape === "Square") {
				shape = new Square()

			}
			shape.setColor(data.color)
			console.log(shape)
			return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

		${shape.render()
				}
	
		<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logo}</text>
	
	</svg>`

		})
		.then(svg=>{
			console.log(svg)
			fs.writeFileSync("logo.svg", svg)
		})
}
createLogo()
// initialize function