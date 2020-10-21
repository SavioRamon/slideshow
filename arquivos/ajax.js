ajax = (url, method, callBack) => {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");

    xhr.open(method, url, true);

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status == "200") {
            callBack(xhr.responseText);
        }
    }

    xhr.send(null);
}