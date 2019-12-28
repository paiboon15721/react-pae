let obj1 = {
  name: 'name1',
  log: function() {
    console.log(this.name)
  },
}

obj1.log = obj1.log.bind(obj1)

function onClick(func) {
  // many code
  func()
}

onClick(obj1.log)
