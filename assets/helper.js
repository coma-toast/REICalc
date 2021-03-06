var zillow = {
    call: function(config) {
        if (typeof config === 'undefined') {
            console.log("config is undefined");
            config = {};
        }

        if (typeof config.url === 'undefined') {
            console.error('url must be set');
            return;
        }

        if (typeof config.data === 'undefined') {
            console.log("config.data is undefined");
            config.data = {};
        }

        //config.data.zws-id = zwsid;

        $.ajax({
            method:      config.method || 'GET',
            url:         'http://www.zillow.com/webservice' + config.url,
            data:        config.data,
            contentType: 'application/x-www-form-urlencoded',
            success:     config.success,
            error:       config.error,
            complete:    config.complete,
            message:     config.message,
        });
    },
}
