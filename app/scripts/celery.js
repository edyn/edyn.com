// Celery JS Library
;
(function(root, undefined) {
    var Celery = function(options, request) {
        options = options || {};
        this.request = request || (jQuery && jQuery.ajax);

        if (!this.request) {
            return console.error('Celery requires jQuery or another AJAX library');
        }

        this._setUserId = $.proxy(this._setUserId, this);

        var config = this.config = {};

        config.apiHost = options.apiHost || 'https://api-sandbox.trycelery.com';
        config.apiVersion = options.apiVersion || 'v2';
        config.apiUrl = config.apiHost + '/' + config.apiVersion;
        config.slug = options.slug || '';
        config.userId = options.userId || '';
    }

    Celery.prototype.serializeOrder = function(order, callback) {
        return this._post('orders', 'serialize', order, callback);
    };

    Celery.prototype.createOrder = function(order, callback) {
        return this._post('orders', 'checkout', order, callback);
    };

    Celery.prototype._setUserId = function(id) {
        this.config.userId = id;
        return this;
    };

    Celery.prototype._ensureUserId = function(options) {
        if (!this.config.userId && (!options || !options.userId)) {
            throw new Error('userId is required');
        }

        var userId = this.config.userId || options.userId || options.user_id;

        if (typeof options === 'object') {
            options.user_id = userId;
        }

        return userId;
    };

    Celery.prototype._post = function(resource, endpoint, data, callback) {
        callback = callback || function() {};

        var url = this.config.apiUrl + '/' + resource;

        if (endpoint) {
            url += '/' + endpoint;
        }

        return this.request({
            type: 'POST',
            url: url,
            data: data ? JSON.stringify(data) : null,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            context: this
        })
        .done(this._generateSuccessCb(callback))
        .fail(this._generateErrorCb(callback));
    }

    Celery.prototype._createError = function(res) {
        var msg = '';

        if (res && res.responseText) {
            msg = res.responseText;
        }

        if (res && res.responseJSON) {
            msg = res.responseJSON.meta.error.message;
        }

        return new Error(msg);
    };

    Celery.prototype._generateSuccessCb = function(callback) {
        return function(data, textStatus, jqXHR) {
            if (typeof callback !== 'function') return;
            callback(null, data);
        }
    };

    Celery.prototype._generateErrorCb = function(callback) {
        var self = this;
        return function(jqXHR, textStatus, errorThrown) {
            if (typeof callback !== 'function') return;
            var err = self._createError(jqXHR);
            callback(err);
        }
    }

    // UMD
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function() {
            return Celery;
        });
    } else if (typeof exports === 'object') {
        exports = Celery;
    } else {
        root.Celery = Celery;
    }
})(this);
