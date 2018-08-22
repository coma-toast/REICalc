function analyzeProp(zpid) {
    console.log(zpid);
    var configData = {
        url:    '/GetUpdatedPropertyDetails.htm',
        data: {
            'zws-id': zwsid,
            zpid:   zpid,
        },
        success:    pullSuccess,
        //complete:   pullComplete,
    }


    console.log(configData);
    var loadedData = zillow.call(configData)
    console.log(loadedData);
    //pullSuccess(configData)
}

    const pullSuccess = function(loadedData) {
        console.log(loadedData);
        displayProperty(loadedData)

    }

    const pullComplete = function(data) {
        console.log(data);
    }

    function displayProperty(property) {
        let target = $('#result-list')
        target.html('')
        let x = property.getElementsByTagName('message')
        if (x[0].childNodes[1].innerHTML !== "0") {
            var listItem = $('<li>', {
                class: 'list-item',
            });
            var code = $('<a>', {
                html:   'Error code: ' + x[0].childNodes[1].innerHTML,
            });
            var message = $('<p>', {
                html:   x[0].childNodes[0].innerHTML
            })
            listItem.append(code, message)
            target.append(listItem)
        } else {
            var listItem = $('<li>', {
                class: 'list-item',
            });
            var code = $('<a>', {
                html:   'Response code: ' + x[0].childNodes[1].innerHTML,
            });
            var message = $('<p>', {
                html:   x[0].childNodes[0].innerHTML
            });
            listItem.append(code, message)
            target.append(listItem)

        }


    }
