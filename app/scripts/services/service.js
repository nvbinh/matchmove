app.service('post', function(){
	'use strict';
	var self = this;

	/*Begin: Get information for like, post, comment numbers*/
	this.getTotalPost = function (posts){
		return posts.length > 0 ? posts.length : 0;
	};

	this.getLikeCommentNumber = function (posts){
		var count = {
			like: 0,
			comment: 0
		};
		for (var i = 0; i < posts.length; i++) {
			count.like += posts[i].like;
			count.comment += posts[i].comment;
		}

		return count;
	};

	this.actionLike = function(postId, postArray) {
		postArray.posts[postId - 1].like = postArray.posts[postId - 1].like + 1;
		return postArray;
	};
	/*End: Get information for like, post, comment numbers*/

	/*Begin: Popup and actions*/
	this.showPopup = function(comment, id) {
		if (comment === true) {
			$('#newcomment').removeClass('hide');
			$('#newcomment').find('.btn-comment').attr('data-id', id);
		} else {
			$('#newpost').removeClass('hide');
		}
	};

	this.hidePopup = function() {
		$('#newcomment').addClass('hide');
		$('#newpost').addClass('hide');
	};

	this.hidePopupByBodyClick = function(event) {
		var target = $(event.target),
			that = target.closest('.content') || target;
		if (that.hasClass('content')) {
			return false;
		}
		self.hidePopup();
	};

	this.addPost = function(post, posts) {
		posts.push(post);
		return posts;
	};
	/*End: Popup and actions*/

	/*Add comment to his post*/
	this.actionComment = function(postId, comment, postArray) {
		$('.post-msg').append('<p>' + comment + '</p>');
		postArray.posts[postId - 1].comment = postArray.posts[postId - 1].comment + 1;
		return postArray;
	};
});