webpackJsonp([1],{"/igm":function(e,t,n){"use strict";var o;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/o=function(){var e={},t={};return e.on=function(e,n){var o={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(o),o},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var o,r=t[e];if(r)for(o=r.length;o--;)r[o].handler(n)},e},e.exports=o},"1U8J":function(e,t){var n=1e3,o=60*n,r=60*o,a=24*r,i=365.25*a;function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var u,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var s=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*o;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?s(u=e,a,"day")||s(u,r,"hour")||s(u,o,"minute")||s(u,n,"second")||u+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=o)return Math.round(e/o)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"7UOy":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("kT5t"),a=(o=r)&&o.__esModule?o:{default:o};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},"8umv":function(e,t){},B9Fe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n("pKIK"),a=(o=r)&&o.__esModule?o:{default:o};t.default=function(e){return new Promise(function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",function(t){t&&e.trigger("error",t)});var o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){o&&o(),t(window.YT)}}})},e.exports=t.default},BYFN:function(e,t,n){(function(o){function r(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==o&&"env"in o&&(e=Object({NODE_ENV:"production"}).DEBUG),e}(t=e.exports=n("lHCM")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var r=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&"%c"===e&&(a=++r)}),e.splice(a,0,o)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(r())}).call(t,n("W2nU"))},FRW9:function(e,t){},MMHm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),r=n("p7o8"),a=n.n(r);n("R5w9");o.default.use(a.a);var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-link",{attrs:{to:"/"}},[t("vs-button",[this._v("Hello World")])],1),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(e){n("YHw8")},null,null).exports,u=n("/ocq"),l=n("tUil"),c=n.n(l),d=n("mtWM"),f=n.n(d);o.default.use(a.a),o.default.config.productionTip=!1,o.default.use(c.a);var p={data:function(){return{videoId:"6fiUylbzJhc"}},methods:{playVideo:function(){this.player.playVideo()},playing:function(){f.a.get("https://api.coindesk.com/v1/bpi/currentprice.json")},paused:function(){console.log("paused")},ended:function(){console.log("ended")},createUser:function(){f.a.post("http://localhost:8080/",{email:this.videoId}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("div",[n("youtube",{ref:"youtube",attrs:{"video-id":e.videoId,"player-vars":{autoplay:1}},on:{playing:e.playing,paused:e.paused,ended:e.ended}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"edit me"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.createUser}},[e._v("送信")])],1)])},staticRenderFns:[]};var h=n("VU/8")(p,y,!1,function(e){n("FRW9")},null,null).exports;o.default.use(c.a);var v={data:function(){return{videoId:"6fiUylbzJhc"}},methods:{playVideo:function(){this.player.playVideo()},playing:function(){f.a.get("https://api.coindesk.com/v1/bpi/currentprice.json")},paused:function(){},ended:function(){}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("div",[n("h1",{staticClass:"title"},[e._v("youtubeのテスト")]),e._v(" "),n("youtube",{ref:"youtube",attrs:{"video-id":e.videoId,"player-vars":{autoplay:1}},on:{playing:e.playing,paused:e.paused,ended:e.ended}}),e._v(" "),n("vs-button",{attrs:{"vs-type":"filled"}},[e._v("Primary")])],1)])},staticRenderFns:[]};var g=n("VU/8")(v,m,!1,function(e){n("8umv")},null,null).exports;o.default.use(u.a);var w=new u.a({routes:[{path:"/",name:"HelloWorld",component:h},{path:"/sample",name:"Sample",component:g}]});o.default.config.productionTip=!1,new o.default({el:"#app",router:w,components:{App:s},template:"<App/>"})},QbF1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(n("/igm")),a=s(n("B9Fe")),i=s(n("Qqpv"));function s(e){return e&&e.__esModule?e:{default:e}}var u=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,r.default)();if(u||(u=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var l=new Promise(function(n){"object"===(void 0===e?"undefined":o(e))&&e.playVideo instanceof Function?n(e):u.then(function(o){var r=new o.Player(e,t);return s.on("ready",function(){n(r)}),null})}),c=i.default.promisifyPlayer(l,n);return c.on=s.on,c.off=s.off,c},e.exports=t.default},Qqpv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n("BYFN")),r=s(n("MMHm")),a=s(n("sK1G")),i=s(n("7UOy"));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,o.default)("youtube-player"),l={proxyEvents:function(e){var t={},n=function(n){var o="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[o]=function(t){u('event "%s"',o,t),e.trigger(n,t)}},o=!0,r=!1,i=void 0;try{for(var s,l=a.default[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){n(s.value)}}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},o=function(o){t&&i.default[o]?n[o]=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then(function(e){var t=i.default[o],r=e.getPlayerState(),a=e[o].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(r)?new Promise(function(n){e.addEventListener("onStateChange",function o(){var r=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout(function(){e.removeEventListener("onStateChange",o),n()},t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(r)&&(e.removeEventListener("onStateChange",o),clearTimeout(a),n())})}).then(function(){return a}):a})}:n[o]=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then(function(e){return e[o].apply(e,n)})}},a=!0,s=!1,u=void 0;try{for(var l,c=r.default[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){o(l.value)}}catch(e){s=!0,u=e}finally{try{!a&&c.return&&c.return()}finally{if(s)throw u}}return n}};t.default=l,e.exports=t.default},R5w9:function(e,t){},YHw8:function(e,t){},kT5t:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},lHCM:function(e,t,n){var o;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,a=r-(o||r);e.diff=a,e.prev=o,e.curr=r,o=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,o){if("%%"===n)return n;u++;var r=t.formatters[o];if("function"==typeof r){var a=i[u];n=r.call(e,a),i.splice(u,1),u--}return n}),t.formatArgs.call(e,i),(n.log||t.log||console.log.bind(console)).apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,o=0;for(n in e)o=(o<<5)-o+e.charCodeAt(n),o|=0;return t.colors[Math.abs(o)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length,r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("1U8J"),t.names=[],t.skips=[],t.formatters={}},pKIK:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function o(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:o)(i,r),i.onload||n(i,r),a.appendChild(i)}},sK1G:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},tUil:function(e,t,n){(function(e){(function(t){"use strict";"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var o,r=(function(e,t){e.exports=function(e,t){if(void 0==t&&(t={fuzzy:!0}),/youtu\.?be/.test(e)){var n,o=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(n=0;n<o.length;++n)if(o[n].test(e))return o[n].exec(e)[1];if(t.fuzzy){var r=e.split(/[\/\&\?=#\.\s]/g);for(n=0;n<r.length;++n)if(/^[^#\&\?]{11}$/.test(r[n]))return r[n]}}return null}}(o={exports:{}},o.exports),o.exports),a=n("QbF1"),i={name:"Youtube",props:{videoId:String,playerVars:{type:Object,default:function(){return{}}},height:{type:[Number,String],default:360},width:{type:[Number,String],default:640},resize:{type:Boolean,default:!1},resizeDelay:{type:Number,default:100},fitParent:{type:Boolean,default:!1}},data:function(){return{player:{},events:(e={},e[-1]="unstarted",e[1]="playing",e[2]="paused",e[0]="ended",e[3]="buffering",e[5]="cued",e),resizeTimeout:null};var e},computed:{aspectRatio:function(){return this.width/this.height}},methods:{playerReady:function(e){this.$emit("ready",e.target)},playerStateChange:function(e){null!==e.data&&-1!==e.data&&this.$emit(this.events[e.data],e.target)},playerError:function(e){this.$emit("error",e.target)},updatePlayer:function(e){e?1!==this.playerVars.autoplay?this.player.cueVideoById({videoId:e}):this.player.loadVideoById({videoId:e}):this.player.stopVideo()},resizeProportionally:function(){var e=this;this.player.getIframe().then(function(t){var n=e.fitParent?t.parentElement.offsetWidth:t.offsetWidth,o=n/e.aspectRatio;e.player.setSize(n,o)})},onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.resizeProportionally,this.resizeDelay)}},watch:{videoId:"updatePlayer",resize:function(e){e?(window.addEventListener("resize",this.onResize),this.resizeProportionally()):(window.removeEventListener("resize",this.onResize),this.player.setSize(this.width,this.height))},width:function(e){this.player.setSize(e,this.height)},height:function(e){this.player.setSize(this.width,e)}},beforeDestroy:function(){null!==this.player&&this.player.destroy&&(this.player.destroy(),delete this.player),this.resize&&window.removeEventListener("resize",this.onResize)},mounted:function(){window.YTConfig={host:"https://www.youtube.com/iframe_api"},this.player=a(this.$el,{width:this.width,height:this.height,videoId:this.videoId,playerVars:this.playerVars}),this.player.on("ready",this.playerReady),this.player.on("stateChange",this.playerStateChange),this.player.on("error",this.playerError),this.resize&&window.addEventListener("resize",this.onResize),this.fitParent&&this.resizeProportionally()},render:function(e){return e("div")}};function s(e){e.prototype.$youtube={getIdFromUrl:r},e.component("youtube",i)}"undefined"!=typeof window&&window.Vue&&window.Vue.use(s);t.default=s,t.Youtube=i,t.getIdFromUrl=r,t.version="1.3.5",Object.defineProperty(t,"__esModule",{value:!0})})(t)}).call(t,n("DuR2"))}},["NHnr"]);
//# sourceMappingURL=app.b244cbe59d65926f7f80.js.map