(function(){
	'use strict';
	var $ = jQuery;

	function showSection (selector) {
		$(selector)
			.show()
			.siblings()
			.hide();
	}

	function sendRequest (path, data, callback) {
		var baseUrl = 'https://api.identity.prod.edyn.com/users/password';
		var url = baseUrl + path;
		$.ajax({
			url: url,
			data: data,
			type: 'POST',
			dataType: 'json'
		})
		.done(function (response) {
			callback(null, response);
		})
		.fail(function (jqXHR, textStatus) {
			var error = null;
			if (parseInt(jqXHR.statusCode) !== 200) {
				error = new Error(textStatus);
			}
			callback(error, null);
		});
	}

	function resetRequest (email, callback) {
		var data = {
			email: email
		};
		sendRequest('/reset', data, callback);
	}

	function updateRequest (token, password, callback) {
		var data = {
			token: token,
			password: password
		};
		sendRequest('/update', data, callback);
	}

	function queryParams () {
		var query = window.location.search.substring(1);
		var params = {};

		var parts = query.split('&');
		parts.forEach(function (part) {
			var pair = part.split('=').map(decodeURIComponent);
			var key = pair[0];
			var value = pair[1];
			params[key] = value;
		});

		return params;
	}

	var sels = {
		forgot: {
			start: '#forgot-password',
			success: '#forgot-password-success',
			error: '#forgot-password-error',
			retry: '.forgot-password-retry',
			email: '#forgot-password-email',
			submit: '#forgot-password-submit'
		},
		update: {
			start: '#update-password',
			success: '#update-password-success',
			error: '#update-password-error',
			retry: '#update-password-retry',
			password: '#update-password-new-password',
			confirm: '#update-password-confirm-password',
			submit: '#update-password-submit'
		}
	};

	var enabledTextAttr = 'data-enabled-text';
	var disabledTextAttr = 'data-disabled-text';

	function disableSubmit (sel) {
		var submit = $(sel);

		// save text for refilling later
		if (!submit.is('[' + enabledTextAttr + ']')) {
			submit.attr(enabledTextAttr, submit.val());
		}

		var disabledText = submit.attr(disabledTextAttr);

		submit
		.val(disabledText)
		.attr('disabled', 'disabled');
	}

	function enableSubmit (sel) {
		var submit = $(sel);
		var enabledText = submit.attr(enabledTextAttr);

		submit
			.val(enabledText)
			.attr('disabled', null);
	}

	$(document).ready(function () {
		var params = queryParams();
		var initialSection = params.token ? sels.update.start : sels.forgot.start;
		showSection(initialSection);

		$(sels.forgot.retry).click(function (event) {
			event.preventDefault();
			$(sels.forgot.email).val('');
			enableSubmit(sels.forgot.submit);
			showSection(sels.forgot.start);
		});

		$(sels.update.retry).click(function (event) {
			event.preventDefault();
			$(sels.update.password).val('');
			$(sels.update.confirm).val('');
			enableSubmit(sels.update.submit);
			showSection(sels.update.start);
		});

		$(sels.forgot.start).validetta({
			realTime: false,
			onValid: function(event) {
				event.preventDefault();

				disableSubmit(sels.forgot.submit);

				var email = $(sels.forgot.email).val();
				resetRequest(email, function (error) {
					console.log('ok got an error');
					console.log(error);
					var section = error ? sels.forgot.error : sels.forgot.success;
					console.log('showing ' + section);
					showSection(section);
				});
			}
		});

		$(sels.update.start).validetta({
			realTime: false,
			validators: {
				// this library is lulz. 'equalTo' didn't actually work
				// and so we gotta do this garbage
				callback: {
					confirm: {
						callback: function (el, confirmVal) {
							var val = $(sels.update.password).val();
							return (confirmVal === val);
						},
						errorMessage: 'Confirmation does not match password'
					}
				}
			},
			onValid: function(event) {
				event.preventDefault();

				disableSubmit(sels.update.submit);

				var token = params.token;
				var password = $(sels.update.password).val();
				updateRequest(token, password, function (error) {
					var section = error ? sels.update.error : sels.update.success;
					showSection(section);
				});
			}
		});
	});
}());
