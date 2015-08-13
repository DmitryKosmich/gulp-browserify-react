(function (module) {
    'use strict';


    var get = function (url, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                error(xhr.status, xhr.statusText);
            } else {
                success(JSON.parse(xhr.responseText));
            }
        }
    };

    module.exports = {
        get: get
    };

})(module);