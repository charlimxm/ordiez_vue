new Vue({
  el: '#app',
  data: function () {
    return {
      getOrders: []
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      // GET /someUrl
      axios.get('http://ordiez-charmaine.herokuapp.com/orders')
        .then(response => {
          // get body data
          this.getOrders = response.data.orders
          console.log(this.getOrders)
        }, (error) => {
          console.log(error)
        })
    }
  },
  mounted: function () {
  this.fetchData()
  }
})
