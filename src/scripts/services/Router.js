(function (module) {
    'use strict';

    var eventFunction;
    var defaultPage;
    var routs = [];
    var self;

    var page = function (routeString) {
        var i, length = routs.length;
        for (i = 0; i < length; i += 1) {
            console.log(routeString);
            console.log(routs[i].regExp);
            if (routs[i].regExp.test(routeString)) {
                return routs[i].page;
            }
        }
        return defaultPage;
    };

    var route = function (regExpString, page) {
        routs.push({
            regExp: new RegExp(regExpString),
            page: page
        });
        return self;
    };

    var defaultRoute = function (page) {
        defaultPage = page;
        return self;
    };

    var callback = function (cb) {
        eventFunction = function () {
            cb(window.location.hash.substr(1));
        };
        window.addEventListener('hashchange', eventFunction);
    };

    var start = function () {
        eventFunction();
    };

    module.exports = self = {
        page: page,
        route: route,
        callback: callback,
        defaultRoute: defaultRoute,
        start: start
    };

})(module);