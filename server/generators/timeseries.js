var moment = require('moment');

module.exports = function timeseriesGenerator(obj, callback) {


	this.period = obj.period;
	this.series = obj.series;
	this.groups = obj.groups || false;
	this.min    = obj.min;
	this.max    = obj.max;


	(function generate() {
		var i     = 0;
				data  = [];
	      start = moment().subtract(this.series, this.period),
	      end   = moment();

    while (start <= end) {

			if(this.groups) {

				this.groups.forEach(function(group) {

					data.push({
						id: i,
						label: group,
						time: moment(start).format('YYYY-MM-DD'),
            value: Math.random() * (this.max - this.min) + this.min
					});
					
		      i++;

				});

			}
			else {

				data.push({
					id: i,
					time: moment(start).format('YYYY-MM-DD'),
          value: Math.random() * (this.max - this.min) + this.min
				});

	      i++;

			}
      
      start.add(this.series, 1);

    }

    return callback(data);
  })();  

}