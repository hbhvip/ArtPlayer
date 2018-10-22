!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.artplayer={})}(this,function(t){"use strict";var o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var a=e(function(e){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t){return"function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?e.exports=n=function(t){return i(t)}:e.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)},n(t)}e.exports=n});var s=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var c=function(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?s(t):e},u=e(function(e){function i(t){return e.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}e.exports=i}),l=e(function(i){function n(t,e){return i.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}i.exports=n});var i=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)};var h=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")},f=e(function(n){function o(t,e,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?n.exports=o=function(t,e,i){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return i&&l(o,i.prototype),o}:n.exports=o=Reflect.construct,o.apply(null,arguments)}n.exports=o}),d=function(t){function n(t,e){var i;return o(this,n),i=c(this,u(n).call(this,t)),"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(s(s(i)),e||i.constructor),i.name="ArtPlayerError",i}return i(n,t),n}(e(function(e){function n(t){var i="function"==typeof Map?new Map:void 0;return e.exports=n=function(t){if(null===t||!h(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==i){if(i.has(t))return i.get(t);i.set(t,e)}function e(){return f(t,arguments,u(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l(e,t)},n(t)}e.exports=n})(Error));function p(t,e){if(!t)throw new d(e)}function y(t,e,i){return Math.max(Math.min(t,Math.max(e,i)),Math.min(e,i))}function v(t){return t.includes("?")?v(t.split("?")[0]):t.includes("#")?v(t.split("#")[0]):t.trim().toLowerCase().split(".").pop()}function m(t,e){return e instanceof Element?t.appendChild(e):t.insertAdjacentHTML("beforeend",e),t}function g(e,i){return Object.keys(i).forEach(function(t){e.style[t]=i[t]}),e}var b={mimeCodec:{mp4:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',webm:'video/webm; codecs="vorbis, vp8"',ts:'video/mp2t; codecs="avc1.42E01E, mp4a.40.2"'},mse:{mediaSource:{propertys:["activeSourceBuffers","duration","readyState","sourceBuffers"],methods:["addSourceBuffer","endOfStream","removeSourceBuffer","clearLiveSeekableRange","setLiveSeekableRange"],events:["sourceclose","sourceended","sourceopen"]},sourceBuffer:{propertys:["mode","updating","buffered","timestampOffset","audioTracks","videoTracks","textTracks","appendWindowStart","appendWindowEnd","trackDefaults"],methods:["appendBuffer","appendStream","abort","remove"],events:["abort","error","update","updateend","updatestart"]},sourceBufferList:{propertys:["length"],events:["addsourcebuffer","removesourcebuffer"]}},video:{propertys:["audioTracks","autoplay","buffered","controller","controls","crossOrigin","currentSrc","currentTime","defaultMuted","defaultPlaybackRate","duration","ended","error","loop","mediaGroup","muted","networkState","paused","playbackRate","played","preload","readyState","seekable","seeking","src","startDate","textTracks","videoTracks","volume"],methods:["addTextTrack","canPlayType","load","play","pause"],events:["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"]}};function k(){}k.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var n=this;function o(){n.off(t,o),e.apply(i,arguments)}return o._=e,this.on(t,o,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=i.length;n<o;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],o=[];if(n&&e)for(var r=0,a=n.length;r<a;r++)n[r].fn!==e&&n[r].fn._!==e&&o.push(n[r]);return o.length?i[t]=o:delete i[t],this}};var x=k,w=function(){function e(t){o(this,e),this.art=t,this.init()}return r(e,[{key:"init",value:function(){var t=this.art.refs;t.$container.innerHTML='\n        <div class="artplayer-video-player">\n          <video class="artplayer-video" webkit-playsinline playsinline></video>\n          <div class="artplayer-subtitle"></div>\n          <div class="artplayer-layers"></div>\n          <div class="artplayer-mask"></div>\n          <div class="artplayer-bottom">\n            <div class="artplayer-progress"></div>\n            <div class="artplayer-controls">\n              <div class="artplayer-controls-left"></div>\n              <div class="artplayer-controls-right"></div>\n            </div>\n          </div>\n          <div class="artplayer-loading"></div>\n          <div class="artplayer-notice"></div>\n        </div>\n      ',t.$player=t.$container.querySelector(".artplayer-video-player"),t.$video=t.$container.querySelector(".artplayer-video"),t.$subtitle=t.$container.querySelector(".artplayer-subtitle"),t.$bottom=t.$container.querySelector(".artplayer-bottom"),t.$progress=t.$container.querySelector(".artplayer-progress"),t.$controls=t.$container.querySelector(".artplayer-controls"),t.$controlsLeft=t.$container.querySelector(".artplayer-controls-left"),t.$controlsRight=t.$container.querySelector(".artplayer-controls-right"),t.$layers=t.$container.querySelector(".artplayer-layers"),t.$loading=t.$container.querySelector(".artplayer-loading"),t.$notice=t.$container.querySelector(".artplayer-notice"),t.$mask=t.$container.querySelector(".artplayer-mask")}}]),e}(),$={"zh-cn":{"About author":"关于作者","Video info":"视频统计信息",Close:"关闭","Video load failed":"视频加载失败","Fast forward 10 seconds":"快进10秒","Rewind 10 seconds":"快退10秒","10% increase in volume":"音量增加10%","10% reduction in volume":"音量减少10%"},"zh-tw":{"About author":"關於作者","Video info":"影片統計訊息",Close:"關閉","Video load failed":"影片載入失敗","Fast forward 10 seconds":"快進10秒","Rewind 10 seconds":"快退10秒","10% increase in volume":"音量增加10%","10% reduction in volume":"音量減少10%"}},S=function(){function i(t){var e=t.option;o(this,i),this.language=$[e.lang.toLowerCase()]||{}}return r(i,[{key:"get",value:function(t){return this.language[t]||t}}]),i}(),T=function(){function e(t){o(this,e),this.art=t,this.init(),this.eventBind()}return r(e,[{key:"init",value:function(){var t=this.art.option,e=this.art.refs.$video;e.controls=!1,e.poster=t.poster,e.volume=y(t.volume,0,1),e.autoplay=t.autoplay,e.preload=t.preload,e.src=t.url}},{key:"eventBind",value:function(){var e=this,t=this.art,i=t.events.proxy,n=t.refs.$video;b.video.events.forEach(function(t){i(n,t,function(t){e.art.emit("video:".concat(t.type),t)})}),this.art.on("video:loadstart",function(){e.art.loading.show()}),this.art.on("video:loadeddata",function(){e.art.loading.hide()}),this.art.on("video:waiting",function(){e.art.loading.show()}),this.art.on("video:seeking",function(){e.art.loading.show()}),this.art.on("video:canplay",function(){if(e.art.controls.show(),e.art.mask.show(),e.art.loading.hide(),e.art.option.autoplay){var t=e.play();void 0!==t&&t.then().catch(function(t){console.warn(t)})}}),this.art.on("video:playing",function(){e.art.isPlaying=!0,e.art.controls.hide(),e.art.mask.hide()}),this.art.on("video:pause",function(){e.art.isPlaying=!1,e.art.controls.show(),e.art.mask.show()}),this.art.on("video:ended",function(){e.art.isPlaying=!1,e.art.controls.show(),e.art.mask.show()}),this.art.on("video:error",function(){e.art.isPlaying=!1})}},{key:"play",value:function(){var t=this.art.refs.$video,e=t.play();return this.art.emit("play",t),e}},{key:"pause",value:function(){var t=this.art.refs.$video;t.pause(),this.art.emit("pause",t)}},{key:"toggle",value:function(){this.art.isPlaying?this.pause():this.play()}},{key:"seek",value:function(t){var e=this.art.refs.$video,i=Math.max(t,0);e.duration&&(i=Math.min(i,e.duration)),e.currentTime=i,this.art.emit("seek",i)}},{key:"volume",value:function(t){var e=this.art.refs.$video;t&&(e.volume=y(t,0,1)),this.art.emit("volume",e.volume)}},{key:"switchVolumeIcon",value:function(){}},{key:"switchVideo",value:function(){}},{key:"switchQuality",value:function(){}},{key:"resize",value:function(){}},{key:"speed",value:function(t){this.art.refs.$video.playbackRate=t,this.art.emit("speed",t)}}]),e}();var E=function t(e,i){o(this,t),this.art=e,this.option=i},q=function t(e,i){o(this,t),this.art=e,this.option=i},C=function t(e,i){o(this,t),this.art=e,this.option=i},L=function t(e,i){o(this,t),this.art=e,this.option=i},P=function(){function i(t,e){o(this,i),this.art=t,this.option=e,this.isDroging=!1,this.getLoaded=this.getLoaded.bind(this),this.getPlayed=this.getPlayed.bind(this),this.getPos=this.getPos.bind(this),this.set=this.set.bind(this),this.init()}return r(i,[{key:"init",value:function(){var o=this,t=this.art,e=t.option,i=e.highlight,n=e.theme,r=t.events.proxy,a=t.refs.$video,s=t.player;m(this.option.ref,'\n      <div class="art-control-progress-inner">\n        <div class="art-progress-loaded"></div>\n        <div class="art-progress-played" style="background: '.concat(n,'"></div>\n        <div class="art-progress-highlight">\n          <div class="highlight-text"></div>\n        </div>\n        <div class="art-progress-screenshot"></div>\n        <div class="art-progress-indicator" style="background: ').concat(n,'"></div>\n        <div class="art-progress-timer">00:00</div>\n      </div>\n    ')),this.$loaded=this.option.ref.querySelector(".art-progress-loaded"),this.$played=this.option.ref.querySelector(".art-progress-played"),this.$highlight=this.option.ref.querySelector(".art-progress-highlight"),this.$screenshot=this.option.ref.querySelector(".art-progress-screenshot"),this.$indicator=this.option.ref.querySelector(".art-progress-indicator"),this.$timer=this.option.ref.querySelector(".art-progress-timer"),this.art.on("video:canplay",function(){o.set("loaded",o.getLoaded()),i.forEach(function(t){var e=Number(t.time)/a.duration;m(o.$highlight,'\n          <span data-text="'.concat(t.text,'" data-time="').concat(t.time,'" style="left: ').concat(100*e,'%"></span>\n        '))})}),this.art.on("video:progress",function(){o.set("loaded",o.getLoaded())}),this.art.on("video:timeupdate",function(){o.set("played",o.getPlayed())}),this.art.on("video:ended",function(){o.set("played",1)}),r(this.option.ref,"mousemove",function(t){-1<t.path.indexOf(o.$highlight)?(o.$timer.style.visibility="hidden",o.showHighlight(t)):(o.$timer.style.visibility="visible",o.showTime(t))}),r(this.option.ref,"click",function(t){if(t.target!==o.$indicator){var e=o.getPos(t),i=e.second,n=e.percentage;o.set("played",n),s.seek(i)}}),r(this.$indicator,"mousedown",function(){o.isDroging=!0}),r(document,"mousemove",function(t){if(o.isDroging){var e=o.getPos(t),i=e.second,n=e.percentage;o.$indicator.classList.add("show-indicator"),o.set("played",n),s.seek(i)}}),r(document,"mouseup",function(){o.isDroging&&(o.isDroging=!1,o.$indicator.classList.remove("show-indicator"))})}},{key:"showHighlight",value:function(t){console.log("showHighlight")}},{key:"showTime",value:function(t){var e=this.getPos(t),i=e.width,n=e.time;i<=20?this.$timer.style.left=0:i>this.option.ref.clientWidth-20?this.$timer.style.left="".concat(this.option.ref.clientWidth-40,"px"):this.$timer.style.left="".concat(i-20,"px"),this.$timer.innerHTML=n}},{key:"showScreenshot",value:function(){}},{key:"getPos",value:function(t){var e,i,n,o,r=this.art.refs.$video,a=this.option.ref.getBoundingClientRect().left,s=y(t.x-a,0,this.option.ref.clientWidth),c=s/this.option.ref.clientWidth*r.duration;return{second:c,time:(e=c,i=Math.floor(e/3600),n=Math.floor((e-3600*i)/60),o=Math.floor(e-3600*i-60*n),(0<i?[i,n,o]:[n,o]).map(function(t){return t<10?"0".concat(t):String(t)}).join(":")),width:s,percentage:y(s/this.option.ref.clientWidth,0,1)}}},{key:"getPlayed",value:function(){var t=this.art.refs.$video;return t.currentTime/t.duration}},{key:"getLoaded",value:function(){var t=this.art.refs.$video;return t.buffered.length?t.buffered.end(t.buffered.length-1)/t.duration:0}},{key:"set",value:function(t,e){this["$".concat(t)].style.width="".concat(100*e,"%"),"played"===t&&(this.$indicator.style.left="calc(".concat(100*e,"% - 6.5px)"))}}]),i}(),M=function t(e,i){o(this,t),this.art=e,this.option=i},A=function t(e,i){o(this,t),this.art=e,this.option=i},O=function t(e,i){o(this,t),this.art=e,this.option=i},j=function t(e,i){o(this,t),this.art=e,this.option=i},R=0,D=function(){function e(t){o(this,e),this.art=t,this.$map={top:[],left:[],right:[]},this.init(),this.mount()}return r(e,[{key:"init",value:function(){var e=this;this.add({control:P,disable:!1,position:"top",index:10}),this.add({control:L,disable:!1,position:"left",index:10}),this.add({control:O,disable:!1,tooltip:"Volume",position:"left",index:20}),this.add({control:A,disable:!1,tooltip:"Volume",position:"left",index:30}),this.add({control:E,disable:!1,tooltip:"Danmu",position:"right",index:10}),this.add({control:M,disable:!1,tooltip:"Subtitle",position:"right",index:20}),this.add({control:j,disable:!1,tooltip:"Setting",position:"right",index:30}),this.add({control:C,disable:!1,tooltip:"Pip",position:"right",index:40}),this.add({control:q,disable:!1,tooltip:"Fullscreen",position:"right",index:50}),this.art.option.controls.forEach(function(t){e.add(t)})}},{key:"add",value:function(t){var e;if(p("function"==typeof(e=t).control,"'control' option require 'function' type, but got '".concat(a(e.control),"'.")),p("boolean"==typeof e.disable,"'disable' option require 'boolean' type, but got '".concat(a(e.disable),"'.")),p(-1<["top","left","right"].indexOf(e.position),"'position' option require one of 'top、left、right', but got '".concat(e.position,"'.")),p("number"==typeof e.index,"'index' option require 'number' type, but got '".concat(a(e.index),"'.")),!t.disable){R++;var i=t.control.name.toLowerCase()||"control".concat(R),n=document.createElement("div");n.setAttribute("class","art-control art-control-".concat(i)),n.setAttribute("data-control-index",String(t.index)||R),t.ref=n,this.commonMethod(t),this[i]=new t.control(this.art,t),this.$map[t.position].push(n)}}},{key:"mount",value:function(){var t=this,e=this.art.refs,i=e.$progress,n=e.$controlsLeft,o=e.$controlsRight;Object.keys(this.$map).forEach(function(e){t.$map[e].sort(function(t,e){return Number(t.dataset.controlIndex)-Number(e.dataset.controlIndex)}).forEach(function(t){switch(e){case"top":i.appendChild(t);break;case"left":n.appendChild(t);break;case"right":o.appendChild(t)}})})}},{key:"commonMethod",value:function(t){var e=this;Object.defineProperty(t.control.prototype,"hide",{value:function(){t.ref.style.display="none",e.art.emit("control:hide",t.ref)}}),Object.defineProperty(t.control.prototype,"show",{value:function(){t.ref.style.display="top"===t.position?"block":"inline-block",e.art.emit("control:show",t.ref)}}),Object.defineProperty(t.control.prototype,"addMenu",{value:function(t){console.log(t)}})}},{key:"show",value:function(){this.art.refs.$player.classList.add("controls-show")}},{key:"hide",value:function(){this.art.refs.$player.classList.remove("controls-show")}}]),e}(),N=function(){function e(t){o(this,e),this.art=t,this.init()}return r(e,[{key:"init",value:function(){var e=this,t=this.art,i=t.option,n=t.i18n,o=t.refs,r=t.events.proxy;i.contextmenu.push({text:n.get("Video info"),click:function(){e.art.info.show()}},{text:n.get("About author"),link:"https://github.com/zhw2590582"},{text:"ArtPlayer 1.0.0",link:"https://github.com/zhw2590582/artplayer"},{text:n.get("Close"),click:function(){e.hide()}}),r(o.$player,"contextmenu",function(t){t.preventDefault(),e.art.isFocus=!0,o.$contextmenu||e.creatMenu(),e.show(),e.setPos(t)}),r(o.$player,"click",function(t){o.$contextmenu&&!t.path.includes(o.$contextmenu)&&e.hide()})}},{key:"creatMenu",value:function(){var i=this,t=this.art,e=t.option,n=t.refs,o=t.events.proxy;n.$contextmenu=document.createElement("div"),n.$contextmenu.classList.add("artplayer-contextmenu"),e.contextmenu.forEach(function(e){var t=document.createElement("a");t.innerHTML=e.text,t.classList.add("art-menu"),e.link?(t.target="_blank",t.href=e.link):e.click&&(t.href="#",o(t,"click",function(t){t.preventDefault(),e.click(i.art,t),i.hide()})),m(n.$contextmenu,t)}),m(n.$player,n.$contextmenu)}},{key:"setPos",value:function(t){var e=this.art.refs,i=t.clientX,n=t.clientY,o=e.$player.getBoundingClientRect(),r=o.height,a=o.width,s=o.left,c=o.top,u=e.$contextmenu.getBoundingClientRect(),l=u.height,h=u.width,f=i-s,d=n-c;s+a<i+h&&(f=a-h),c+r<n+l&&(d=r-l),e.$contextmenu.style.left="".concat(f,"px"),e.$contextmenu.style.top="".concat(d,"px")}},{key:"hide",value:function(){var t=this.art.refs.$contextmenu;t&&(t.style.display="none",this.art.emit("contextmenu:hide",t))}},{key:"show",value:function(){var t=this.art.refs.$contextmenu;t&&(t.style.display="block",this.art.emit("contextmenu:show",t))}}]),e}(),H=function t(e){o(this,t),this.art=e},B=function(){function e(t){o(this,e),this.art=t}return r(e,[{key:"show",value:function(){console.log("info show")}},{key:"hide",value:function(){console.log("info hide")}}]),e}();var _=function(t){if(Array.isArray(t))return t};var F=function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return i};var V=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var z=function(t,e){return _(t)||F(t,e)||V()},W=function(){function e(t){o(this,e),this.art=t,this.art.option.subtitle&&(p("vtt"===v(this.art.option.subtitle.url),"'url' option require 'vtt' format, but got '".concat(v(this.art.option.subtitle.url),"'.")),this.init())}return r(e,[{key:"init",value:function(){var i=this,t=this.art,e=t.events.proxy,n=t.option.subtitle,o=t.refs,r=o.$video,a=o.$subtitle;g(a,n.style||{});var s=document.createElement("track");if(s.default=!0,s.kind="metadata",s.src=n.url,r.appendChild(s),this.art.refs.$track=s,r.textTracks&&r.textTracks[0]){var c=z(r.textTracks,1)[0];e(c,"cuechange",function(){var t=z(c.activeCues,1)[0];if(a.innerHTML="",t){var e=document.createElement("div");e.appendChild(t.getCueAsHTML()),a.innerHTML=e.innerHTML.split(/\r?\n/).map(function(t){return"<p>".concat(t,"</p>")}).join("")}i.art.emit("subtitle:update",a)})}}},{key:"show",value:function(){var t=this.art.refs.$subtitle;t.style.display="block",this.art.emit("subtitle:show",t)}},{key:"hide",value:function(){var t=this.art.refs.$subtitle;t.style.display="none",this.art.emit("subtitle:hide",t)}},{key:"switch",value:function(t){var e=this.art.refs.$track;p("vtt"===v(t),"'url' option require 'vtt' format, but got '".concat(v(t),"'.")),p(e,"You need to initialize the subtitle option first."),e.src=t,this.art.emit("subtitle:switch",t)}}]),e}(),I=function(){function e(t){o(this,e),this.art=t,this.destroyEvents=[],this.proxy=this.proxy.bind(this)}return r(e,[{key:"proxy",value:function(e,t,i){var n=this,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};Array.isArray(t)&&t.forEach(function(t){return n.proxy(e,t,i,o)}),e.addEventListener(t,i,o);var r=function(){e.removeEventListener(t,i,o)};return this.destroyEvents.push(r),r}},{key:"destroy",value:function(){this.destroyEvents.forEach(function(t){return t()})}}]),e}(),U=function(){function e(t){o(this,e),this.art=t,this.art.option.hotkey&&this.init()}return r(e,[{key:"init",value:function(){var o=this,t=this.art,r=t.player,a=t.notice,s=t.i18n,e=t.refs.$player,i=t.events.proxy;i(document,"click",function(t){o.art.isFocus=-1<t.path.indexOf(e)}),i(window,"keydown",function(t){if(o.art.isFocus){var e,i=document.activeElement.tagName.toUpperCase(),n=document.activeElement.getAttribute("contenteditable");if("INPUT"!==i&&"TEXTAREA"!==i&&""!==n&&"true"!==n)switch(t.keyCode){case 39:t.preventDefault(),r.seek(r.currentTime()+10),a.show(s.get("Fast forward 10 seconds"),!0);break;case 37:t.preventDefault(),r.seek(r.currentTime()-10),a.show(s.get("Rewind 10 seconds"),!0);break;case 38:t.preventDefault(),e=r.volume()+.1,r.volume(e),a.show(s.get("10% increase in volume"),!0);break;case 40:t.preventDefault(),e=r.volume()-.1,r.volume(e),a.show(s.get("10% reduction in volume"),!0);break;case 32:t.preventDefault(),r.toggle()}}})}}]),e}(),Y=0,X=function(){function e(t){o(this,e),this.art=t,this.add=this.add.bind(this),this.art.option.layers.forEach(this.add),this.init()}return r(e,[{key:"init",value:function(){var t=this.art,e=t.refs,i=t.player;(0,t.events.proxy)(e.$layers,"click",function(t){t.path[0]===e.$layers&&i.pause()})}},{key:"add",value:function(t,e){var i=this.art.refs;Y++;var n=document.createElement("div");n.setAttribute("data-art-layer-id",Y),n.setAttribute("class","art-layer art-layer-".concat(t.name||Y)),n.style.zIndex=t.index||Y,m(n,t.html),g(n,t.style||{}),i.$layers.appendChild(n),this.art.emit("layers:add",n),e&&e(n)}},{key:"show",value:function(){var t=this.art.refs.$layers;t.style.display="block",this.art.emit("layers:show",t)}},{key:"hide",value:function(){var t=this.art.refs.$layers;t.style.display="none",this.art.emit("layers:hide",t)}}]),e}();var G,Q,J=(G={loading:'<svg class="lds-spinner" width="80px" height="80px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(30 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(60 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(90 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(150 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(180 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(210 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(270 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(300 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(330 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#ffffff">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g></svg>\n',play:'<svg id="plyr-play" width="16px" height="18px">\n  <path d="M15.562 8.1L3.87.225C3.052-.337 2 .225 2 1.125v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"></path>\n</svg>\n'},Q={},Object.keys(G).forEach(function(t){var e=document.createElement("div");e.innerHTML='<i class="art-icon art-icon-'.concat(t,'">').concat(G[t],"</i>");var i=z(e.childNodes,1);Q[t]=i[0]}),Q),K=function(){function e(t){o(this,e),this.art=t,this.init()}return r(e,[{key:"init",value:function(){var t=this.art,e=t.option;m(t.refs.$loading,e.loading||J.loading)}},{key:"hide",value:function(){var t=this.art.refs.$loading;t.style.display="none",this.art.emit("loading:hide",t)}},{key:"show",value:function(){var t=this.art.refs.$loading;t.style.display="flex",this.art.emit("loading:show",t)}}]),e}(),Z=function(){function e(t){o(this,e),this.art=t,this.timer=null}return r(e,[{key:"show",value:function(t,e){var i=this,n=this.art.refs.$notice;n.style.display="block",n.innerHTML=t instanceof Error?t.message.trim():t,e&&(clearTimeout(this.timer),this.timer=setTimeout(function(){i.hide()},1e3)),this.art.emit("notice:show",n)}},{key:"hide",value:function(){var t=this.art.refs.$notice;t.style.display="none",this.art.emit("notice:hide",t)}}]),e}(),tt=function(){function e(t){o(this,e),this.art=t,this.init()}return r(e,[{key:"init",value:function(){var t=this,e=this.art,i=e.player,n=e.option,o=e.refs,r=e.events.proxy,a=J.play.cloneNode(!0);a.style.backgroundColor=n.theme,m(o.$mask,a),r(o.$mask,"click",function(){i.play(),t.hide()})}},{key:"show",value:function(){var t=this.art.refs.$mask;t.style.display="flex",this.art.emit("mask:show",t)}},{key:"hide",value:function(){var t=this.art.refs.$mask;t.style.display="none",this.art.emit("mask:show",t)}}]),e}(),et=0,it=[],nt=function(t){function n(t){var e,i;return o(this,n),(e=c(this,u(n).call(this))).emit("init:start"),e.option=Object.assign({},n.DEFAULTS,t),p((i=e.option).container,"'container' option is required."),p(i.url,"'url' option is required."),p("string"==typeof i.container||i.container instanceof Element,"'container' option require 'string' or 'Element' type, but got '".concat(a(i.container),"'.")),p("string"==typeof i.url,"'url' option require 'string' type, but got '".concat(a(i.url),"'.")),p("string"==typeof i.poster,"'poster' option require 'string' type, but got '".concat(a(i.poster),"'.")),p("number"==typeof i.volume,"'volume' option require 'number' type, but got '".concat(a(i.volume),"'.")),p("boolean"==typeof i.autoplay,"'autoplay' option require 'boolean' type, but got '".concat(a(i.autoplay),"'.")),p(-1<["none","metadata","auto"].indexOf(i.preload),"'preload' option require one of 'none、metadata、auto', but got '".concat(i.preload,".")),p("string"==typeof i.lang,"'lang' option require 'string' type, but got '".concat(a(i.lang),"'.")),p("string"==typeof i.type,"'type' option require 'string' type, but got '".concat(a(i.type),"'.")),p("string"==typeof i.mimeCodec,"'mimeCodec' option require 'string' type, but got '".concat(a(i.mimeCodec),"'.")),p(Array.isArray(i.layers),"'layers' option require 'array' type, but got '".concat(a(i.layers),"'.")),p(Array.isArray(i.contextmenu),"'contextmenu' option require 'array' type, but got '".concat(a(i.contextmenu),"'.")),p("string"==typeof i.loading||i.loading instanceof Element,"'loading' option require 'string' type, but got '".concat(a(i.loading),"'.")),p("string"==typeof i.theme,"'theme' option require 'string' type, but got '".concat(a(i.theme),"'.")),p("boolean"==typeof i.hotkey,"'hotkey' option require 'boolean' type, but got '".concat(a(i.hotkey),"'.")),p("[object Object]"===Object.prototype.toString.call(i.subtitle),"'subtitle' option require 'object' type, but got '".concat(a(i.subtitle),"'.")),p(Array.isArray(i.controls),"'controls' option require 'array' type, but got '".concat(a(i.controls),"'.")),p(Array.isArray(i.highlight),"'highlight' option require 'array' type, but got '".concat(a(i.highlight),"'.")),e.init(),e.emit("init:end"),e}return i(n,x),r(n,[{key:"init",value:function(){return this.isFocus=!1,this.isPlaying=!1,this.refs={},this.option.container instanceof Element?this.refs.$container=this.option.container:this.refs.$container=document.querySelector(this.option.container),this.template=new w(this),this.i18n=new S(this),this.events=new I(this),this.player=new T(this),this.layers=new X(this),this.controls=new D(this),this.contextmenu=new N(this),this.danmu=new H(this),this.subtitle=new W(this),this.info=new B(this),this.loading=new K(this),this.notice=new Z(this),this.hotkey=new U(this),this.mask=new tt(this),this.id=et++,it.push(this),this}},{key:"destroy",value:function(){this.events.destroy(),this.refs.$container.innerHTML="",it.splice(it.indexOf(this),1),this.emit("destroy")}}],[{key:"use",value:function(t){var e=this.plugins||(this.plugins=[]);if(-1<e.indexOf(t))return this;var i=Array.from(arguments).slice(1);return i.unshift(this),"function"==typeof t.install?t.install.apply(t,i):"function"==typeof t&&t.apply(null,i),e.push(t),this}},{key:"version",get:function(){return"1.0.0"}},{key:"config",get:function(){return b}},{key:"DEFAULTS",get:function(){return{container:".artplayer",url:"",poster:"",volume:.7,autoplay:!1,preload:"auto",type:"",mimeCodec:"",layers:[],contextmenu:[],loading:"",theme:"#f00",hotkey:!0,subtitle:{url:"",style:{}},controls:[],highlight:[],lang:navigator.language.toLowerCase()}}}]),n}();window.Artplayer=nt,t.instances=it,t.default=nt,Object.defineProperty(t,"__esModule",{value:!0})});