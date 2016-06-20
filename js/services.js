camcan.service('TitleParser', function() {
	var title = "~ $ Campbell_Hawkes"
	function setTitle(data) {
	  title = "~ $ Campbell_Hawkes" + data
 	}
	function getTitle() {
  return title
 }
	return {
	  setTitle: setTitle,
	  title: getTitle
	}
})


camcan.service('PortfolioSelection', function() {
 var sections = []
 var item = {}
 function setSections(data) {
	var index = sections.indexOf(data)
	if (index > -1) {
		sections.splice(index, 1)
	} else {
		sections.push(data)
	}
 }
 function getSections() {
  return sections
 }
 function setItem(data) {
   item = data
 }
 function getItem() {
  return item
 }
 return {
  setSections: setSections,
  sections: getSections,
  setItem: setItem,
  item: getItem
 }
})

camcan.service('ProjectDatabase', function() {
  var projects = {
    'Static Websites': [
	    {
	      title: 'Old Personal Site',
	      desc: 'Basic front end interface using jQuery, HTML5 & CSS3',
	       tech: ['jQuery'],
	      imgs: ['img/old-site-screenshot.png']
	    },
	    {
	      title: 'Apex Art',
	      desc: 'Profile site for designer Bella Cole',
	       tech: ['Angular', 'Browserify'],
	      imgs: ['img/apex-screenshot.png']
	    }],
		'Ruby on Rails': [],
		'Node.js': []
	}
  var getProjects = function(){
	  return projects
	}
	return {
	  projects: getProjects
	}
})