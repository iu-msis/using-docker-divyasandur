var UserApp = new Vue({
  el: '#userdata',
  data: {
      user:[]
  },
  methods: {
    fetchUserData() {
      //fetch('https://randomuser.me/api/')
 /*     .then(results => results.json())
      .then(json => {UserApp.user = json});
*/
      //Means the same at this
       fetch('https://randomuser.me/api/')
      .then(function(response) {return response.json()})
      .then(function(json) {UserApp.user = json});

    },

  },
  created: function() {
    this.fetchUserData();
  }, 
    

})
