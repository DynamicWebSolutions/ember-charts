`import DS from 'ember-data'`
`import Ember from 'ember'`

DailyCurrValue = DS.Model.extend
  time: DS.attr 'date' 
  value: DS.attr 'number' 




DailyCurrValue.reopenClass
  FIXTURES: [
    id: 1
    time: d3.time.format('%Y-%m-%d').parse "2013-05-01"
    value: 43642.83058384
  ,
    id: 2
    time: d3.time.format('%Y-%m-%d').parse "2013-05-02"
    value: 43682.88915361
  ,
    id: 3
    time: d3.time.format('%Y-%m-%d').parse "2013-05-03"
    value: 44073.26541992
  ,
    id: 4
    time: d3.time.format('%Y-%m-%d').parse "2013-05-04"
    value: 43960.89079724
  ,
    id: 5
    time: d3.time.format('%Y-%m-%d').parse "2013-05-05"
    value: 43830.11730889
  ]
  # init: ->
  #   @_super()
  #   dates = []
  #   i = 0
  #   start = moment().subtract('days', 60)
  #   end = moment()
  #   while start <= end
  #     dates.push
  #       id: i
  #       time: d3.time.format('%Y-%m-%d').parse(moment(start).format('Y-m-d'))
  #       value: Math.random() * (4400 - 4000) + min
  #     start.add 'days', 1
  #     i++
  #   @set 'FIXTURES', dates
  #   return



`export default DailyCurrValue`  