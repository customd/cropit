(function(){var a,b,c,d;d=function(){return this.find("input.cropit-image-input").click()},a=function(){var a;return a=this.cropit("croppedImageData"),window.open(a)},c=function(){return this.find(".slider-wrapper").removeClass("disabled")},b=function(){return this.find(".slider-wrapper").addClass("disabled")},function(){var e;return e=$(".splash"),e.cropit({imageBackground:!0,imageState:{src:"http://scottcheng.github.io/cropit/images/0-1920.jpg",offset:{x:-112,y:0}},onZoomEnabled:c.bind(e),onZoomDisabled:b.bind(e)}),e.on("click",".select-image-btn",d.bind(e)),e.on("click",".download-btn",a.bind(e))}(),function(){var d;return d=$(".demo-wrapper.basic"),d.cropit({imageState:{src:"http://scottcheng.github.io/cropit/images/1-960.jpg",offset:{x:0,y:-125}},onZoomEnabled:c.bind(d),onZoomDisabled:b.bind(d)}),d.on("click",".download-btn",a.bind(d))}(),function(){var e;return e=$(".demo-wrapper.custom-button"),e.cropit({imageState:{src:"http://scottcheng.github.io/cropit/images/2-960.jpg",offset:{x:0,y:-94}},onZoomEnabled:c.bind(e),onZoomDisabled:b.bind(e)}),e.on("click",".select-image-btn",d.bind(e)),e.on("click",".download-btn",a.bind(e))}(),function(){var e;return e=$(".demo-wrapper.image-background"),e.cropit({imageBackground:!0,imageState:{src:"http://scottcheng.github.io/cropit/images/3-960.jpg",offset:{x:0,y:-86}},onZoomEnabled:c.bind(e),onZoomDisabled:b.bind(e)}),e.on("click",".select-image-btn",d.bind(e)),e.on("click",".download-btn",a.bind(e))}(),function(){var e;return e=$(".demo-wrapper.image-background-border"),e.cropit({imageBackground:!0,imageBackgroundBorderWidth:15,imageState:{src:"http://scottcheng.github.io/cropit/images/4-960.jpg",offset:{x:0,y:-140}},onZoomEnabled:c.bind(e),onZoomDisabled:b.bind(e)}),e.on("click",".select-image-btn",d.bind(e)),e.on("click",".download-btn",a.bind(e))}()}).call(this);