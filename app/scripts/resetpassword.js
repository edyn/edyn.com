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
			complete: function (jqXhr) {
				var error = null;

				var response = jqXhr.responseJSON;
				if ((jqXhr.status !== 200) && response.error) {
					error = new Error(response.message);
				}

				callback(error);
			}
		});
	}

	function resetRequest (email, callback) {
		var data = {
			email: email
		};
		sendRequest('/reset', data, callback);
	}

	function updateRequest (resetToken, password, callback) {
		var data = {
			resetToken: resetToken,
			password: password
		};
		sendRequest('/update', data, callback);
	}

	var sels = {
		forgot: {
			start: '#forgot-password',
			success: '#forgot-password-success',
			error: '#forgot-password-error',
			retry: '.forgot-password-retry',
			email: '#forgot-password-email',
			submit: '#forgot-password-submit',
			notFound: '#forgot-password-not-found'
		},
		update: {
			start: '#update-password',
			success: '#update-password-success',
			error: '#update-password-error',
			retry: '#update-password-retry',
			password: '#update-password-new-password',
			confirm: '#update-password-confirm-password',
			submit: '#update-password-submit',
			tokenExpired: '#update-password-token-expired'
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
		var params = Edyn.Utils.queryParams();
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

		// TODO: remove validetta from here since we don't use on order page anymore
		// and it is a total garbage library
		$(sels.forgot.start).validetta({
			realTime: false,
			onValid: function(event) {
				event.preventDefault();

				disableSubmit(sels.forgot.submit);

				var email = $(sels.forgot.email).val();
				resetRequest(email, function (error) {
					var section = sels.forgot.success;
					if (error) {
						var notFound = (error.message === 'No user for that email address');
						section = notFound ? sels.forgot.notFound : sels.forgot.error;
					}
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
					var section = sels.update.success;
					if (error) {
						var tokenExpired = (error.message === 'Token expired');
						section = tokenExpired ? sels.update.tokenExpired : sels.update.error;
					}
					showSection(section);
				});
			}
		});
	});
}());
