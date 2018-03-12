editpanel.addEventListener("mousedown",function (e) {
    console.log("mousedown",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})
editpanel.addEventListener("mousemove",function (e) {
    console.log("mousemove",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})
editpanel.addEventListener("mouseup",function (e) {
    console.log("mouseup",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})
editpanel.addEventListener("mouseleave",function (e) {
    console.log("mouseleave",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})
editpanel.addEventListener("mouseenter",function (e) {
    console.log("mouseenter",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})

editpanel.addEventListener("mouseout",function (e) {
    console.log("mouseout",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})
editpanel.addEventListener("mouseover",function (e) {
    console.log("mouseover",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})
editpanel.addEventListener("mousewheel",function (e) {
    console.log("mousewheel",e.clientX-canvasOffsetLeft , e.clientY-canvasOffsetTop);
})