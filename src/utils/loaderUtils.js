export function preloadAssetBlob(url, successFn) {
    const req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'blob';
    req.onload = function() {
        if (this.status === 200) {
            if (successFn) {
                return successFn(URL.createObjectURL(this.response)); // IE10+
            }
        }
    };
    req.send();
}
