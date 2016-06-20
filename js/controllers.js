camcan.controller('mainController', function($scope, $location, TitleParser, ProjectDatabase) {
	$scope.pageTitle = ""
	$scope.titleString = "$_~ Campbell_Hawkes"
	var typeTitle = function(string, i=0, callback){
		$scope.showContent=false
		var title = $scope.pageTitle 
		if (i <= string.length){
			var text = string.slice(0, i)
			console.log(text)
 			setTimeout(function(){
					$scope.pageTitle = text
				$scope.$apply()
				typeTitle(string, i, callback)
 			}, 80)
			i++
			console.log("I: ", i)
		} else {
  			console.log("END")
  	callback()
		}
	}
	$scope.$watch(
		"titleString", 
		function titleChange(oldTitle, newTitle){
			console.log("Old: ", oldTitle, "New: ", newTitle)
  		typeTitle(newTitle, 0, revealContent)
  	}
  )
	$scope.go = function(path, suffix){
		$scope.$apply(
			TitleParser.setTitle(suffix)
			)
	  var titleString = "$_~ Campbell_Hawkes" + suffix
		typeTitle(titleString, 19, revealContent)
		$location.path(path)
	}

	$scope.showContent = false
	var revealContent = function(){
		$scope.showContent = true 
		$scope.$apply()
	} 
	$scope.showEDA = false
	$scope.toggle = function(thing){
		if ($scope[thing] == false){
			$scope[thing] = true
		} else {
			$scope[thing] = false
		}
	}
	$scope.toggleCV = function(){
		$scope.show
	}
	$scope.onDesktop = window.matchMedia("(min-width: 650px)").matches
	$scope.transitionState = false
	$scope.contentTransition = function(){
        if ($scope.transitionState == false) {
	        $scope.transitionState = true
			$scope.$on("$viewContentLoaded" , function (scope, next, current) {
		    	// $scope.$on('$viewContentLoaded', function(){
		    //Here your view content is fully loaded !!
		  		// setTimeout(function() { 
		        	console.log($scope.transitionState)
		        	$scope.transitionState = false 
		        	console.log($scope.transitionState)
		        // }, 01)
			  // })
		    })
		}
	}

	$scope.pageOverlay = false
	$scope.mobileMenu = false
	$scope.selectedSection = {}
	$scope.toggleMenu = function(){
		if ($scope.mobileMenu == true){
			console.log($scope.mobileMenu)
			document.getElementById("mobile-menu").setAttribute('class', '') 
			$scope.mobileMenu = false
			$scope.pageOverlay = false
		} else {
			$scope.mobileMenu = true
			$scope.pageOverlay = true
			document.getElementById("mobile-menu").setAttribute('class', 'open') 
		}
	}

	$scope.isActive = function(route) {
		 return ($location.path().indexOf(route) > -1)
    }

	$scope.back = function(menu){
		console.log("BAAAACK")
		$location.path('/' + menu)
	}


	$scope.projects = ProjectDatabase.projects()
})



camcan.controller('projectsController', function($scope, $location, ProjectDatabase, PortfolioSelection) {
	$scope.selectedSections = PortfolioSelection.sections()
	$scope.selectedItem = PortfolioSelection.item()
	$scope.viewSection = function(section){
			console.log(section)
			PortfolioSelection.setSections(section)
			// PortfolioSelection.setTitle(title)
			$location.path('projects')
	}
	$scope.viewSelected = function(item){
		PortfolioSelection.setItem(item)
		console.log($scope.selectedItem)
		$location.path('projects/view')
	}
}) 