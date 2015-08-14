(function (module) {
    'use strict';

    var eventFunction;
    var defaultPage;
    var routs = [];
    var self;

    /**
     * This method returns page component by url string
     * @param {string} routeString
     * @returns {*} Page component
     */
    var page = function (routeString) {
        var i, length = routs.length;
        for (i = 0; i < length; i += 1) {
            if (routs[i].regExp.test(routeString)) {
                return routs[i].page;
            }
        }
        return defaultPage;
    };

    /**
     * This method sets accordance between regular expression and page component
     * @param {string} regExpString
     * @param {Object} page - page component
     * @returns {*} Returns self
     */
    var route = function (regExpString, page) {
        routs.push({
            regExp: new RegExp(regExpString),
            page: page
        });
        return self;
    };

    /**
     * This method sets default page component
     * @param {Object} page
     */
    var defaultRoute = function (page) {
        defaultPage = page;
        return self;
    };

    /**
     * This method sets callback on hashchange event
     * @param {Function} cb
     */
    var callback = function (cb) {
        eventFunction = function () {
            cb(window.location.hash.substr(1));
        };
        window.addEventListener('hashchange', eventFunction);
    };

    /**
     * This method runs first routing event
     */
    var start = function () {
        eventFunction();
    };

    /**
     * This method should convert params from url to object
     * @param {string} routeString
     * @returns {Object}
     */
    var getUrlParams = function (routeString) {
        var result = {};
        var arr = routeString.split('?');
        if (arr[1]) {
            var i, pairs = arr[1].split('&');
            for (i = 0; i < pairs.length; i += 1) {
                var param = pairs[i].split('=');
                result[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
            }
        }
        return result;
    };

    module.exports = self = {
        page: page,
        route: route,
        callback: callback,
        defaultRoute: defaultRoute,
        start: start,
        getUrlParams: getUrlParams
    };

})(module);