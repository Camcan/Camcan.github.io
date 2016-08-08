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
	      suffix: '.old',
	      desc: 'Basic front end interface using jQuery, HTML5 & CSS3',
	       tech: ['jQuery', 'HTML5', 'CSS3'],
	       link: {
	       	src: 'http://camcan.github.io/in-color.html',
	       	string: 'camcan.github.io/old'
	       },
	      imgs: ['img/old-site-screenshot.png', 'img/old-site-screenshot.png']
	    },
	    {
	      title: 'Apex Art',
	      suffix: '.apex-art',
	      desc: 'Mobile-first portfolio site for designer Bella Cole. 	This is still in development.',
	       tech: ['Angular', 'Browserify', 'HTML5', 'CSS3'],
	       link: {
	       	src: 'http://apex-art.github.io',
	       	string: 'apex-art.github.io'
	       },
	      imgs: ['img/apex-screenshot.png', 'img/apex-screenshot-desktop.jpg', 'img/apex-screenshot-mobile-menu.jpg']
	    }
	],
	'EDA': [
		{
	      title: 'Book It',
	      subtitle: 'Because why talk to people?',
	      suffix: '.book-it',
	      desc: 'This was an intensive project with MVP achieved within the one week timeframe given. Our entire team had their own experiences of "hell" while work in the hospitality industry. We were motivated by our understanding that bookings, even in the most pristegious of establishments, are often handled by voice-call, pen, & paper. BookIt is a workable concept that eliminates the seemingly limitless possibility of human error through a compact elegant yet succulent web-app. I worked together with Zachary Landes ( zacharylandes.github.io ) to create the client-facing interface of the service, which allows one to make bookings for specific numbers of people at their resteraunts of choice for a given timeframe, automating this entire process. Book It, because why talk to people. ',
	      link: {
	       	src: 'http://ruru-2015.github.io/book-it-client-frontend',
	       	string: 'ruru-2015.github.io/book-it-client-frontend'
	       },
	       tech: ['Rails Backend', 'mySQL Database', 'Angular JS Front-End', 'Grunt'],
	      imgs: ['img/bookit.jpg', 'img/screenshot-book-it.png']
	    }
	],
	}
  var getProjects = function(){
	  return projects
	}
	return {
	  projects: getProjects
	}
})