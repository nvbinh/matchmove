'use strict';

/**
 * @ngdoc function
 * @name matchmoveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the matchmoveApp
 */
app.controller('MainCtrl', function ($scope, $http, post, carousel) {
    $http.get('data/test.json').success(function(response) {
    	var count;

    	$scope.profile = response;

    	$scope.totalPost = post.getTotalPost(response.posts);

    	count = post.getLikeCommentNumber(response.posts);

    	$scope.totalLike  = count.like;

    	$scope.totalComment  = count.comment;

    	/*In case, user click on like icon*/
    	$scope.actionLike = function(postId) {
    		var postArray = post.actionLike(postId, response);
    		$scope.profile = postArray;
    		count = post.getLikeCommentNumber(response.posts);

    		$scope.totalLike  = count.like;
    	};

    	/*Process carousel, go to next, prev slide*/
    	$scope.next = carousel.next;
    	$scope.prev = carousel.prev;

    	$scope.showPopup = post.showPopup;
    	$scope.hidePopup = post.hidePopup;

    	/*Add a new post*/
    	$scope.addPost = function() {
    		var data = {};
    		data.id = response.posts.length + 1;
    		data.title = $scope.posttitle;
    		data.content = $scope.postcomment;
    		/*Required fields, user has to enter post comment and post title*/
    		if (data.title === undefined || data.content === undefined || data.title.length <= 0 || data.title.replace(/^\s+|\s+$/g, '').length <= 0 || data.content.length <= 0 || data.content.replace(/^\s+|\s+$/g, '').length <= 0) {
    			return false;
    		}
    		data.like = 0;
    		data.comment = 0;
    		var postArray = post.addPost(data, response.posts);
    		$scope.profile.posts = postArray;
    		$scope.totalPost = post.getTotalPost(response.posts);
    		post.hidePopup();
    	};

    	/*Hide popup when user click on body*/
    	$scope.hidePopupByBodyClick = post.hidePopupByBodyClick;

    	/*Add comment to his post*/
    	$scope.actionComment = function(event) {
    		/*Required field, user has to enter comment*/
    		if ($scope.comment === undefined || $scope.comment.length <= 0 || $scope.comment.replace(/^\s+|\s+$/g, '').length <= 0) {
    			return false;
    		}
    		var postArray = post.actionComment($(event.target).data('id'), $scope.comment, response);
    		$scope.profile = postArray;
    		count = post.getLikeCommentNumber(response.posts);

    		$scope.totalComment  = count.comment;
    	};


    }).error(function(response) {
    	console.log(response);
  	});
    
  });
