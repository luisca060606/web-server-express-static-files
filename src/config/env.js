// import ES6
import env from 'dotenv'
import envvar from 'env-var'

env.config()

// past import
// require('dotenv').config()
// const { get } = require('env-var');

export const envs = {
	PORT: envvar.get('PORT').required().asPortNumber(),
	PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

// past export
// module.exports = {
// 	envs
// }