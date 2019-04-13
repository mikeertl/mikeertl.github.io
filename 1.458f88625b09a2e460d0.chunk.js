(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var r=n("deb1edf8e03fc2092ec7"),o={cardBackdrop:"#444"},a=r.a.div.withConfig({displayName:"FillScreenContainer"})(["min-height:calc(100vh - 200px);padding-top:30px;background:",";"],o.cardBackdrop),i=n("8af190b70a6bc55c6f1b"),s=n.n(i),l=n("ab039aecd4a1d4fedc0e"),u=Object(l.defineMessages)({mon:{id:"app.components.DaysOfWeek.mon",defaultMessage:"Mon"},tue:{id:"app.components.DaysOfWeek.tues",defaultMessage:"Tue"},wed:{id:"app.components.DaysOfWeek.wed",defaultMessage:"Wed"},thu:{id:"app.components.DaysOfWeek.thu",defaultMessage:"Thu"},fri:{id:"app.components.DaysOfWeek.fri",defaultMessage:"Fri"},sat:{id:"app.components.DaysOfWeek.sat",defaultMessage:"Sat"},sun:{id:"app.components.DaysOfWeek.sun",defaultMessage:"Sun"},friSatSun:{id:"app.components.DaysOfWeek.friSatSun",defaultMessage:"Fri Sat Sun"}}),c=r.a.div.withConfig({displayName:"DaySection"})(["position:relative;top:0px;width:20%;display:inline-block;text-align:center;background:",";color:white;font-size:10px;border-color:lightgrey;border-left-style:solid;border-width:1px;&:first-child{border-left-style:none;}"],o.cardBackdrop),f=r.a.div.withConfig({displayName:"Day7Section"})(["position:relative;top:0px;width:14.28%;display:inline-block;text-align:center;background:",";color:white;font-size:10px;border-color:lightgrey;border-left-style:solid;border-width:1px;&:first-child{border-left-style:none;}"],o.cardBackdrop),d=r.a.div.withConfig({displayName:"SubDaySection"})(["position:relative;top:0px;width:33.33%;display:inline-block;background:",";color:white;font-size:10px;border-color:grey;border-right-style:solid;border-width:1px;&:last-child{border-right-style:none;}"],o.cardBackdrop),p=r.a.div.withConfig({displayName:"FixedContainer"})(["position:fixed;top:30px;width:100%;height:0px;display:inline-block;"]),y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),h=["mon","tue","wed","thu","friSatSun"].map(function(e){return"friSatSun"===e?y(c,{},e,y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.fri)),y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.sat)),y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.sun))):y(c,{},e,s.a.createElement(l.FormattedMessage,u[e]))}),b=[y(f,{},1,y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.mon))),y(f,{},2,y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.tue))),y(f,{},3,y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.wed))),y(f,{},4,y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.thu))),y(f,{},5,y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.fri))),y(f,{},6,y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.sat))),y(f,{},7,y(d,{},void 0,s.a.createElement(l.FormattedMessage,u.sun)))],v=function(){return[y(p,{className:"small-only"},1,h),y(p,{className:"big-only"},2,b)]},g=n("8a2d1b95e05b6a321e74"),m=n.n(g),w=n("d7dd51e1bf6bfc2c9c3d"),k=n("f968931eafafcffb4f48"),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var x={getAssociativeArrayWithKey:function(e,t){var n=Object.keys(e),r={},o=t||"key";return n.map(function(t){return r[t]=D(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},o,t),e[t]),null}),r},getAssociativeArrayWithNameFromArray:function(e){var t={};return e&&e.map(function(n,r){return t[n.Name]=D({},e[r]),null}),t},unique:function(e){return e.sort().filter(function(e,t,n){return!t||e!==n[t-1]})}},C=n("04e2ad1a95f4dec21423");var O={setNowKeyDate:function(e){return{type:C.a.SET_NOW_KEY_DATE,payload:{nowKeyDate:e}}},setFirstMonKeyDate:function(e){return{type:C.a.SET_FIRST_MON_KEY_DATE,payload:{firstMonKeyDate:e}}}},S=m.a.shape({eventId:m.a.string.isRequired,description:m.a.string.isRequired,fgCol:m.a.string.isRequired,bgCol:m.a.string.isRequired,allDay:m.a.bool.isRequired,isoDate:m.a.string.isRequired}),_=m.a.shape({isoDate:m.a.string.isRequired,day:m.a.string.isRequired,events:m.a.arrayOf(S),dotsColoursL:m.a.arrayOf(m.a.string),dotsColoursM:m.a.arrayOf(m.a.string),dotsColoursR:m.a.arrayOf(m.a.string)}),j=(m.a.shape({mon:_,tue:_,wed:_,thu:_,fri:_,sat:_,sun:_}),n("ab4cb61bcb2dc161defb")),P={maxWidthIPhone5:"320px",maxWidthXs:"768px",maxWidthSm:"992px",maxWidthMd:"1200px"},T={dayBorderColour:"grey",dayBgColour1:"#eee",dayBgColour2:"#fff",todayBgColour:"#fcfbed",weekendOpacity:.85},E=r.a.div.withConfig({displayName:"DayBoxContainer"})(["position:relative;flex:",";word-break:",";display:inline-block;text-align:center;background:",";border-color:",";border-top-style:",";border-right-style:",";border-bottom-style:solid;border-left-style:solid;border-width:1px;min-height:4em;@media screen and (min-width:","){min-height:8em;}&:last-child{border-right-style:solid;}&:nth-child(6){border-left-width:4px;}@media only screen and (max-width:400px){opacity:",";}"],function(e){return e.wideView?3.5:1},function(e){return e.wideView?"break-word":"break-all"},function(e){return e.bg},T.dayBorderColour,function(e){return"sat"===e.day||e.day,"solid"},function(e){return"sun"===e.day?"solid":"none"},P.maxWidthXs,function(e){return"sat"===e.day||"sun "===e.day?T.weekendOpacity:1}),M=r.a.div.withConfig({displayName:"DotSetContainer"})(["position:relative;top:-10px;width:33.3333%;height:5px;display:inline-block;background:",";opacity:",";"],function(e){return e.bg},function(e){return e.hide?.2:1}),A=r.a.div.withConfig({displayName:"DotFlexContainer"})(["position:relative;height:100%;margin-left:4px;margin-right:4px;display:flex;"]),K=r.a.div.withConfig({displayName:"Dot"})(["flex:auto;height:100%;background:",";"],function(e){return e.background}),N=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var B=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),W(t,[{key:"render",value:function(){var e=this.props,t=e.dotsColoursL,n=e.dotsColoursM,r=e.dotsColoursR,o=e.satBg,a=e.sunBg,i=e.day,s=e.hideL,l=e.hideM,u=t?x.unique(t):[],c=n?x.unique(n):[],f=r?x.unique(r):[],d=u.map(function(e,t){return N(K,{background:e,className:"small-only"},e.concat(t))}),p=c.map(function(e,t){return N(K,{background:e},e.concat(t))}),y=f.map(function(e,t){return N(K,{background:e,className:"small-only"},e.concat(t))}),h=void 0,b=void 0;return"fri"===i&&(h=o,b=a),N("div",{className:this.props.className},void 0,N(M,{hide:s},void 0,N(A,{},void 0,d)),N(M,{bg:h,hide:l},void 0,N(A,{},void 0,p)),N(M,{bg:b},void 0,N(A,{},void 0,y)))}}]),t}(),F=r.a.div.withConfig({displayName:"TextHalfContainer"})(["position:relative;top:",";width:50%;height:13px;display:inline-block;font-size:",";background:",";}"],function(e){return e.loweredText,"-16px"},function(e){return e.fontSize?e.fontSize:"10px"},function(e){return e.bg}),R=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var $=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),V(t,[{key:"render",value:function(){var e=this.props,t=e.textL,n=e.textR,r=e.loweredText,o=e.hideL,a=e.day;return R("span",{},void 0,R(F,{loweredText:r,hide:"fri"===a&&o,bg:"none",fontSize:"12px",style:{textAlign:"left",paddingLeft:"3px"}},void 0,t),R(F,{loweredText:r,bg:"none",fontSize:"12px",style:{textAlign:"right",paddingRight:"3px"}},void 0,n))}}]),t}(),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var H=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return I(e,null,[{key:"hexToRgbA",value:function(e,t){var n=void 0;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)?(3===(n=e.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x".concat(n.join("")))>>16&255,n>>8&255,255&n].join(",")+","+t+")"):""}}]),e}(),q=r.a.div.withConfig({displayName:"EventsContainer"})(["margin-top:-1em;font-size:12px;text-align:left;opacity:",";}@media screen and (min-width:","){font-size:1em;}"],function(e){return e.hide?.2:1},P.maxWidthXs),z=r.a.div.withConfig({displayName:"Event"})(["color:",";background:",";margin-top:2px;margin-bottom 2px;padding-left:2px;padding-right:2px;"],function(e){return e.fgCol},function(e){return e.bgCol}),L=r.a.div.withConfig({displayName:"ScrollableSection"})(["white-space:unset;overflow-x:scroll;word-break:break-word;font-size:",";"],function(e){return e.wideView?"1.5em":"unset"}),J=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),Y(t,[{key:"render",value:function(){var e=this.props,t=e.events,n=e.inPast,r=e.wideView,o=e.excludedCalendars,a=(t||[]).map(function(e){var t=e.description,n=e.eventId,a=e.fgCol,i=e.bgCol,s=e.calId,l=e.allDay,u=e.startValue,c=o.includes(s),f=a,d=i;l||(d="transparent",f=i);l&&(d=H.hexToRgbA(i,.25),f="black");var p=e.dummy,y=e.alreadyShown;return p&&(f="transparent",d="transparent"),y&&(f="transparent"),c?null:J(z,{fgCol:f,bgCol:d},n,J(L,{wideView:r},void 0,!l&&k.a.getTimeStr(u).concat(" "),t))});return J(q,{hide:n},void 0,a)}}]),t}(),U=Object(j.compose)(Object(w.connect)(function(e){return{excludedCalendars:e.toJS().google.excludedCalendars}}))(X),G={show3DatesOnFri:!1},Q=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var ee=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={wideView:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),Z(t,[{key:"toggleWideView",value:function(){this.setState({wideView:!this.state.wideView})}},{key:"render",value:function(){var e=this.props,t=e.weekCardData,n=e.renderDay,r=e.excludedCalendars,a=this.state.wideView,i=t[n],s=i.isoDate,l=i.events,u=i.day,c=t.sat.events?t.sat.events:[],f=t.sun.events?t.sun.events:[],d=(l||[]).filter(function(e){return!r.includes(e.calId)}).map(function(e){return e.bgCol}),p=c.filter(function(e){return!r.includes(e.calId)}).map(function(e){return e.bgCol}),y=f.filter(function(e){return!r.includes(e.calId)}).map(function(e){return e.bgCol}),h=[],b=[],v=[],g="fri"===u,m="sat"===u||"sun"===u,w=!(!g||!(t.fri.events||t.sat.events||t.sun.events)),D=void 0,x=void 0,C=void 0,O=function(e,t,n){return t?T.todayBgColour:e?o.cardBackdrop:n?T.dayBgColour2:T.dayBgColour1},S=k.a.inPast(t[u].isoDate),_=O(S,k.a.isToday(t[u].isoDate),k.a.isEvenMonth(t[u].isoDate)),j=O(k.a.inPast(t.sat.isoDate),k.a.isToday(t.sat.isoDate),k.a.isEvenMonth(t.sat.isoDate)),P=O(k.a.inPast(t.sun.isoDate),k.a.isToday(t.sun.isoDate),k.a.isEvenMonth(t.sun.isoDate)),M=!1,A=S;if(g&&G.show3DatesOnFri){var K=t.sat,N=t.sun;D=k.a.dateKeyToDate(s),x=k.a.dateKeyToDate(K.isoDate),C=k.a.dateKeyToDate(N.isoDate),k.a.inPast(t.fri.isoDate)&&(M=!0),k.a.inPast(t.sat.isoDate)||(A=!1)}else m?(D=k.a.dateKeyToDate(s),C=k.a.dateKeyToMonth(s)):(b=d,D=k.a.dateKeyToDate(s),C=k.a.dateKeyToMonth(s));return g&&(h=d,b=p,v=y),Q(E,{day:u,inPast:S,bg:_,wideView:a,className:this.props.className},void 0,Q(B,{className:"big-only",dotsColoursL:[],dotsColoursM:d,dotsColoursR:[],day:u,satBg:j,sunBg:P,hideL:M,hideM:A}),Q(B,{className:"small-only",dotsColoursL:h,dotsColoursM:b,dotsColoursR:v,day:u,satBg:j,sunBg:P,hideL:M,hideM:A}),Q($,{textL:D,textM:x,textR:C,loweredText:w,hideL:M,hideM:A,day:u,satBg:j,sunBg:P}),Q(U,{events:l,inPast:S,wideView:a}))}}]),t}(),te=Object(j.compose)(Object(w.connect)(function(e){return{excludedCalendars:e.toJS().google.excludedCalendars}}))(ee);var ne={numWeekCards:53,cumulativeFraction:[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(53).keys())).map(function(e){return(53-e)/742}).reduce(function(e,t){return e.length>0&&(t+=e[e.length-1]),e.push(t),e},[]),minTabHeight:3,maxExtraHeight:33,screenHeadingsHeight:48,weekendSliceStickyDiff:9,firstWeekHeight:21},re=r.a.div.withConfig({displayName:"WeekCardContainer"})(["width:100%;min-height:1em;margin-bottom:1px;position:sticky;top:",";&:first-child{margin-bottom:","px;}@media only screen and (max-height:401px){top:","px;}"],function(e){return e.stickyTop.toString().concat("px")},ne.firstWeekHeight,ne.screenHeadingsHeight+8),oe=r.a.div.withConfig({displayName:"SubWeekSlice"})(["display:flex;word-break:break-all;position:sticky;top:",";&:first-child{margin-bottom:",";}@media only screen and (max-width:400px){height:",";}"],function(e){return e.stickyTop.toString().concat("px")},function(e){return e.inPast?"8px":"0px"},function(e){return e.inPast?0:"unset"}),ae=r.a.div.withConfig({displayName:"WeekendGapContainer"})(["position:relative;min-height:1px;text-align:center;flex:1.5;background:",";color:",";font-size:1.5em;opacity:",";"],o.cardBackdrop,function(e){return e.color},T.weekendOpacity),ie=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),se=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var le=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),se(t,[{key:"render",value:function(){var e=this.props,t=e.cardNum,n=e.weekCardData,r=(e.excludedCalendars,ne.weekendSliceStickyDiff),o=ne.screenHeadingsHeight+t*ne.minTabHeight+ne.maxExtraHeight*ne.cumulativeFraction[t],a=k.a.dateKeyToYear(n.sun.isoDate),i=k.a.dateKeyToMonth(n.sun.isoDate),s=0===t&&k.a.inPast(n.fri.isoDate),l=k.a.getDateKeyWithOffset(n.mon.isoDate,-1,6),u=0===t||k.a.dateKeyToMonth(n.sun.isoDate)!==k.a.dateKeyToMonth(l),c=0===t||k.a.dateKeyToYear(n.sun.isoDate)!==k.a.dateKeyToYear(l),f=k.a.isEvenMonth(n.sun.isoDate),d=void 0;d=0===t?T.todayBgColour:f?T.dayBgColour2:T.dayBgColour1;var p=n;return[ie(re,{stickyTop:o},"weekday",ie(oe,{stickyTop:o,inPast:s},void 0,ie(te,{weekCardData:p,renderDay:"mon"}),ie(te,{weekCardData:p,renderDay:"tue"}),ie(te,{weekCardData:p,renderDay:"wed"}),ie(te,{weekCardData:p,renderDay:"thu"}),ie(te,{weekCardData:p,renderDay:"fri"}),ie(te,{weekCardData:p,renderDay:"sat",className:"big-only"}),ie(te,{weekCardData:p,renderDay:"sun",className:"big-only"}))),ie(re,{stickyTop:o+r,className:"small-only"},"weekend",ie(oe,{stickyTop:o},void 0,ie(ae,{color:d},void 0,c?a:null),ie(te,{weekCardData:p,renderDay:"sat"}),ie(te,{weekCardData:p,renderDay:"sun"}),ie(ae,{color:d},void 0,u?i:null)))]}}]),t}(),ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function ce(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var fe={fixOverlaps:function(e,t,n){if(!e)return e;var r=ue({},e),o=Object.keys(r),a=o.length;o.forEach(function(e){var t=r[e].events;t&&t.sort(function(e,t){return e.startValue<t.startValue?-1:e.startValue>t.startValue?1:0})});for(var i=function(e,t,n,r){var o=Array(e).fill([]),a=Array(e).fill([]);return t.forEach(function(e,t){var i=n[e].events;i&&i.forEach(function(e){e.allDay&&!r.includes(e.calId)&&(o[t]=[].concat(ce(o[t]),[e.eventId]),a[t]=[].concat(ce(a[t]),[e]))})}),{allDayEventIds:o,allDayEvents:a}}(a,o,r,t),s=i.allDayEvents,l=i.allDayEventIds,u=0;u<l.length;u+=1){var c=l[u],f=s[u];if(u>0)for(var d=l[u-1],p=0;p<c.length;p+=1){var y=c[p],h=d.indexOf(y);if(-1!==h){if(f[p].isoDate!==n){var b=s[u][p],v=Object.assign({},b,{alreadyShown:!0});r[o[u]].events[p]=v}var g=void 0;for(g=p;g<h;g+=1){var m=Object.assign({},ue({},s[u-1][g],{dummy:!0}));s[u].splice(g,0,m),l[u].splice(g,0,m.eventId),r[o[u]].events.splice(g,0,m)}}}}return r}},de=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),pe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var ye=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={weekCardDataArr:[]},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),pe(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setNowKeyDate,n=e.setFirstMonKeyDate;0===this.state.weekCardDataArr.length&&this.refresh(),this.interval=setInterval(function(){var e=new Date,r=k.a.toDateKey(e),o=k.a.getMonAsDateKey(e);n(o),t(r)},1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidUpdate",value:function(e){this.props.eventData!==e.eventData&&this.refresh(),this.props.nowKeyDate===e.nowKeyDate&&this.props.firstMonKeyDate===e.firstMonKeyDate||this.refresh()}},{key:"refresh",value:function(){var e=this.props,t=e.firstMonKeyDate,n=e.eventData,r=e.excludedCalendars,o=e.nowKeyDate,a=function(e,r){var o=k.a.getDateKeyWithOffset(t,e,r);return n[o]?n[o]:{isoDate:o}},i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(ne.numWeekCards).keys())).map(function(e){var t=a(e,0),n=a(e,1),r=a(e,2),o=a(e,3),i=a(e,4),s=a(e,5),l=a(e,6);return x.getAssociativeArrayWithKey({mon:t,tue:n,wed:r,thu:o,fri:i,sat:s,sun:l},"day")});i.map(function(e){return fe.fixOverlaps(e,r,o)}),this.setState({weekCardDataArr:i})}},{key:"render",value:function(){var e=this.state.weekCardDataArr,t=this.props.excludedCalendars;return e.map(function(e,n){return de(le,{cardNum:n,weekCardData:e,excludedCalendars:t},e.mon.isoDate)})}}]),t}(),he=Object(w.connect)(function(e){var t=e.toJS();return{firstMonKeyDate:t.app.firstMonKeyDate,nowKeyDate:t.app.nowKeyDate,eventData:t.google.eventData,excludedCalendars:t.google.excludedCalendars}},function(e){return{dispatch:e,setNowKeyDate:function(t){var n=O.setNowKeyDate(t);e(n)},setFirstMonKeyDate:function(t){var n=O.setFirstMonKeyDate(t);e(n)}}})(ye),be=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),ve=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var ge=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.a.PureComponent),ve(t,[{key:"render",value:function(){return be("span",{},void 0,be(v,{}),be(a,{},void 0,be(he,{})))}}]),t}();t.default=ge}}]);