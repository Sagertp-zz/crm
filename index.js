'use strict'

const 
	app = require('./app'),
	port = process.env.PORT || 4000

app
	.listen(port, () => {
		console.log(`Server running in http://localhost:${port}`)
	})