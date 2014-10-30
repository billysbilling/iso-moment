var assert = require('assert')
var moment = require('../')

describe('.isoDateTime()', function () {
	var date = moment()
		.zone(0)
		.year(2014)
		.month(9)
		.date(30)
		.hour(11)
		.minute(41)
		.second(42)
		.millisecond(754)

	it('returns a Date string', function () {
		assert.equal(date.isoDate(), '2014-10-30')
	})

	it('respects timezones', function () {
		date.zone(12)
		assert.equal(date.isoDate(), '2014-10-29')
	})
})
