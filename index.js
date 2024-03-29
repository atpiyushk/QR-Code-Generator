import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([{
		message: "Type in your URL: ",
		name: "URL"
	},]).then((answers) => {
	const url = answers.URL;
	var qr_svg = qr.image(url);
	qr_svg.pipe(fs.createWriteStream("qr_img.png"));

	fs.writeFile("URL.txt", url, (err) => {
		if (err) 
			throw err;
		
		console.log("The file has been saved!");
	});
}).catch((error) => {
	if (error.isTtyError) {
		console.error("Error: Prompt couldn't be rendered.");
	} else {
		console.error("Error:", error.message);
	}
});

/* 
1. Used the inquirer npm package to get user input.
2. Used the qr-image npm package to turn the user entered URL into a QR code image.
3. Created a txt file to save the user input using the native fs node module.
*/
