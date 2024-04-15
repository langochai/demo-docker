const express = require("express");
const app = express();
app.get("/", function (req, res) {
	res.send("testing and shiet, see if we can access this shit online");
});
app.get('/:someshit', (req, res) => {
	const { someshit } = req.params
	console.log(someshit);
	res.send(`the params is ${someshit}`)
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("listening to some shiet");
});
