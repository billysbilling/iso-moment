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

	it('returns a DateTime string', function () {
		assert.equal(date.isoDateTime(), '2014-10-30T11:41:42Z')
	})

	it('respects timezones', function () {
		date.zone(8)
		assert.equal(date.isoDateTime(), '2014-10-30T03:41:42-08:00')
	})
})
