(function(doc, win) {
    var docEl = doc.documentElement
      , resizeEvt = "orientationchange"in window ? "orientationchange" : "resize"
      , recalc = function() {
        var clientWidth = docEl.clientWidth;
        //var foot = document.getElementById("foot");
        if (!clientWidth)
            return;
        if (clientWidth < 640) {
            docEl.style.fontSize = 120 * (clientWidth / 640) + "px";
            console.log(120 * (clientWidth / 640) + "px");
        } else {
            docEl.style.fontSize = "120px";
        }
    };

    if (!doc.addEventListener)
        return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
)(document, window);