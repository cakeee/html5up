'use strict'

Vue.component('loading', {
  template: '#spinner'
  });

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

	new Vue ({

		el: '#app',

		data: {
      		loading: "",
			header: [],
			featureImage: [],
			classNumber: ""
    				
		},


    mounted() {
	  let aitwPostJSON = "http://localhost/head/wp-json/wp/v2/posts";
	  let imageID = "";
	  this.loading = true;
      axios.get(aitwPostJSON).then(response => {
		this.header = response.data
		imageID = response.data.featured_media
        this.loading = false;
	  });
	  
	  let aitwMediaJSON = "http://localhost/head/wp-json/wp/v2/media/";
      this.loading = true;
      axios.get(aitwMediaJSON,{
      	params: {
      		id: imageID
      	}
      }).then(response => {
		this.featureImage = response.data;
        this.loading = false;
      });
	  axios.get(aitwMediaJSON).then(response => console.log(response.data) );
	  axios.get(aitwPostJSON).then(response => console.log(response.data) );
      
	
	this.classNumber = function () {
			return "style" + (Math.floor(Math.random() * (6 - 1 + 1)) + 1).toString();
		}

				
	
	},

	
		



	})	
// jQuery(document).ready(function() {
	
// 	"use strict";
// 	// Your custom js code goes here.

// });