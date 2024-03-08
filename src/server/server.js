// import ES6
import express from 'express'
import path from 'path'

// past import
// const express = require('express')
// const path = require('path')

export const startServer = (options) => {
	const { port, public_path='public' } = options
	const app = express()
	// para usar middlewares en express es con use
	app.use(express.static(public_path))

	app.get('*', (req, res) => {
		const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
		res.sendFile(indexPath)
	})

	app.listen(port, () => {
		console.log(`Escuchando en el puerto ${port}`)
	})
}

// past export
// module.exports = {
// 	startServer
// }