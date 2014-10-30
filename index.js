var moment

if (require != null) {
	moment = require('moment')
} else {
	moment = this.moment
}

moment.fn.isoDateTime = function () {
	return this.format('YYYY-MM-DDTHH:mm:ssZ').replace("+00:00", 'Z')
}

moment.fn.isoDate = function () {
	return this.format('YYYY-MM-DD')
}

if (module != null) {
	module.exports = moment
} else {
	this.moment = moment
}
