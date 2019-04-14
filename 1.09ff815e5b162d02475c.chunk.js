(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=n("deb1edf8e03fc2092ec7"),i=a.a.div.withConfig({displayName:"FillScreenContainer"})(["min-height:calc(100vh - 200px);padding-top:30px;background-color:white;"]),l=n("ab039aecd4a1d4fedc0e"),s=Object(l.defineMessages)({mon:{id:"app.components.DaysOfWeek.mon",defaultMessage:"Mon"},tue:{id:"app.components.DaysOfWeek.tues",defaultMessage:"Tue"},wed:{id:"app.components.DaysOfWeek.wed",defaultMessage:"Wed"},thu:{id:"app.components.DaysOfWeek.thu",defaultMessage:"Thu"},fri:{id:"app.components.DaysOfWeek.fri",defaultMessage:"Fri"},sat:{id:"app.components.DaysOfWeek.sat",defaultMessage:"Sat"},sun:{id:"app.components.DaysOfWeek.sun",defaultMessage:"Sun"},friSatSun:{id:"app.components.DaysOfWeek.friSatSun",defaultMessage:"Fri Sat Sun"}}),u={cardBackdrop:"#444"},f=a.a.div.withConfig({displayName:"DaySection"})(["position:relative;top:0px;width:20%;display:inline-block;text-align:center;background:",";color:white;font-size:10px;border-color:lightgrey;border-left-style:solid;border-width:1px;&:first-child{border-left-style:none;}"],u.cardBackdrop),c=a.a.div.withConfig({displayName:"Day7Section"})(["position:relative;top:0px;width:14.28%;display:inline-block;text-align:center;background:",";color:white;font-size:10px;border-color:lightgrey;border-left-style:solid;border-width:1px;&:first-child{border-left-style:none;}"],u.cardBackdrop),d=a.a.div.withConfig({displayName:"SubDaySection"})(["position:relative;top:0px;width:33.33%;display:inline-block;background:",";color:white;font-size:10px;border-color:grey;border-right-style:solid;border-width:1px;&:last-child{border-right-style:none;}"],u.cardBackdrop),p=a.a.div.withConfig({displayName:"FixedContainer"})(["position:fixed;top:30px;width:100%;height:0px;display:inline-block;"]),y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),h=["mon","tue","wed","thu","friSatSun"].map(function(e){return"friSatSun"===e?y(f,{},e,y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.fri)),y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.sat)),y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.sun))):y(f,{},e,o.a.createElement(l.FormattedMessage,s[e]))}),b=[y(c,{},1,y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.mon))),y(c,{},2,y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.tue))),y(c,{},3,y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.wed))),y(c,{},4,y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.thu))),y(c,{},5,y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.fri))),y(c,{},6,y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.sat))),y(c,{},7,y(d,{},void 0,o.a.createElement(l.FormattedMessage,s.sun)))],g=function(){return[y(p,{className:"small-only"},1,h),y(p,{className:"big-only"},2,b)]},v=n("8a2d1b95e05b6a321e74"),m=n.n(v),w=n("d7dd51e1bf6bfc2c9c3d"),A=n("f968931eafafcffb4f48"),x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var D={getAssociativeArrayWithKey:function(e,t){var n=Object.keys(e),r={},o=t||"key";return n.map(function(t){return r[t]=x(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},o,t),e[t]),null}),r},getAssociativeArrayWithNameFromArray:function(e){var t={};return e&&e.map(function(n,r){return t[n.Name]=x({},e[r]),null}),t},unique:function(e){return e.sort().filter(function(e,t,n){return!t||e!==n[t-1]})}},k=n("04e2ad1a95f4dec21423");var C={setNowKeyDate:function(e){return{type:k.a.SET_NOW_KEY_DATE,payload:{nowKeyDate:e}}},setFirstMonKeyDate:function(e){return{type:k.a.SET_FIRST_MON_KEY_DATE,payload:{firstMonKeyDate:e}}}},O=m.a.shape({eventId:m.a.string.isRequired,description:m.a.string.isRequired,fgCol:m.a.string.isRequired,bgCol:m.a.string.isRequired,allDay:m.a.bool.isRequired,isoDate:m.a.string.isRequired}),E=m.a.shape({isoDate:m.a.string.isRequired,day:m.a.string.isRequired,events:m.a.arrayOf(O),dotsColoursL:m.a.arrayOf(m.a.string),dotsColoursM:m.a.arrayOf(m.a.string),dotsColoursR:m.a.arrayOf(m.a.string)}),S=(m.a.shape({mon:E,tue:E,wed:E,thu:E,fri:E,sat:E,sun:E}),n("ab4cb61bcb2dc161defb")),M={maxWidthIPhone5:"320px",maxWidthXs:"768px",maxWidthSm:"992px",maxWidthMd:"1200px"},P={dayBorderColour:"grey",dayBgColour1:"#eee",dayBgColour2:"#fff",todayBgColour:"#fcfbed"},j=a.a.div.withConfig({displayName:"DayBoxContainer"})(["position:relative;flex:",";word-break:",";display:inline-block;text-align:center;background:",";border-color:",";border-top-style:",";border-right-style:",";border-bottom-style:solid;border-left-style:solid;border-width:1px;min-height:4em;@media screen and (min-width:","){min-height:8em;}&:last-child{border-right-style:solid;}&:nth-child(6){border-left-width:4px;}@media only screen and (max-width:414px){opacity:",";}"],function(e){return e.wideView?3.5:1},function(e){return e.wideView?"break-word":"break-all"},function(e){return e.bg},P.dayBorderColour,function(e){return"sat"===e.day||e.day,"solid"},function(e){return"sun"===e.day?"solid":"none"},M.maxWidthXs,function(e){return"sat"===e.day||"sun "===e.day?P.weekendOpacity:1}),N=a.a.div.withConfig({displayName:"DotSetContainer"})(["position:relative;top:-10px;width:33.3333%;height:5px;display:inline-block;background:",";opacity:",";"],function(e){return e.bg},function(e){return e.hide?.2:1}),T=a.a.div.withConfig({displayName:"DotFlexContainer"})(["position:relative;height:100%;margin-left:4px;margin-right:4px;display:flex;"]),F=a.a.div.withConfig({displayName:"Dot"})(["flex:auto;height:100%;background:",";"],function(e){return e.background}),B=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),I(t,[{key:"render",value:function(){var e=this.props,t=e.dotsColoursL,n=e.dotsColoursM,r=e.dotsColoursR,o=e.satBg,a=e.sunBg,i=e.day,l=e.hideL,s=e.hideM,u=t?D.unique(t):[],f=n?D.unique(n):[],c=r?D.unique(r):[],d=u.map(function(e,t){return B(F,{background:e,className:"small-only"},e.concat(t))}),p=f.map(function(e,t){return B(F,{background:e},e.concat(t))}),y=c.map(function(e,t){return B(F,{background:e,className:"small-only"},e.concat(t))}),h=void 0,b=void 0;return"fri"===i&&(h=o,b=a),B("div",{className:this.props.className},void 0,B(N,{hide:l},void 0,B(T,{},void 0,d)),B(N,{bg:h,hide:s},void 0,B(T,{},void 0,p)),B(N,{bg:b},void 0,B(T,{},void 0,y)))}}]),t}(),z=a.a.div.withConfig({displayName:"TextHalfContainer"})(["position:relative;top:",";width:50%;height:13px;display:inline-block;font-size:",";background:",";}"],function(e){return e.loweredText,"-16px"},function(e){return e.fontSize?e.fontSize:"10px"},function(e){return e.bg}),K=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),L(t,[{key:"render",value:function(){var e=this.props,t=e.textL,n=e.textR,r=e.loweredText,o=e.hideL,a=e.day;return K("span",{},void 0,K(z,{loweredText:r,hide:"fri"===a&&o,bg:"none",fontSize:"12px",style:{textAlign:"left",paddingLeft:"3px"}},void 0,t),K(z,{loweredText:r,bg:"none",fontSize:"12px",style:{textAlign:"right",paddingRight:"3px"}},void 0,n))}}]),t}(),W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var V=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return W(e,null,[{key:"hexToRgbA",value:function(e,t){var n=void 0;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)?(3===(n=e.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x".concat(n.join("")))>>16&255,n>>8&255,255&n].join(",")+","+t+")"):""}}]),e}(),G=a.a.div.withConfig({displayName:"EventsContainer"})(["margin-top:-1em;font-size:12px;text-align:left;opacity:",";}@media screen and (min-width:","){font-size:1em;}"],function(e){return e.hide?.2:1},M.maxWidthXs),H=a.a.div.withConfig({displayName:"Event"})(["color:",";background:",";margin-top:2px;margin-bottom 2px;padding-left:2px;padding-right:2px;"],function(e){return e.fgCol},function(e){return e.bgCol}),Y=a.a.div.withConfig({displayName:"ScrollableSection"})(["white-space:unset;overflow-x:scroll;word-break:break-word;font-size:",";"],function(e){return e.wideView?"1.5em":"unset"}),q=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var U=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),Q(t,[{key:"render",value:function(){var e=this.props,t=e.events,n=e.inPast,r=e.wideView,o=e.excludedCalendars,a=e.smallMode,i=(t||[]).map(function(e){var t=e.description,n=e.eventId,i=e.fgCol,l=e.bgCol,s=e.calId,u=e.allDay,f=e.startValue,c=o.includes(s),d=i,p=l;u||(p="transparent",d=l);u&&(p=V.hexToRgbA(l,.25),d="black");var y=e.dummy,h=e.alreadyShown;return y&&(d="transparent",p="transparent"),h&&!a&&(d="transparent"),c?null:q(H,{fgCol:d,bgCol:p},n,q(Y,{wideView:r},void 0,!u&&q("span",{style:{fontWeight:"bold"}},void 0,A.a.getTimeStr(f).concat(" ")),t))});return q(G,{hide:n},void 0,i)}}]),t}(),J=Object(S.compose)(Object(w.connect)(function(e){return{excludedCalendars:e.toJS().google.excludedCalendars}}))(U),_={show3DatesOnFri:!1},Z=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),$=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var ee=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={wideView:!1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),$(t,[{key:"toggleWideView",value:function(){this.setState({wideView:!this.state.wideView})}},{key:"render",value:function(){var e=this.props,t=e.weekCardData,n=e.renderDay,r=e.excludedCalendars,o=e.smallMode,a=this.state.wideView,i=t[n],l=i.isoDate,s=i.events,f=i.day,c=t.sat.events?t.sat.events:[],d=t.sun.events?t.sun.events:[],p=(s||[]).filter(function(e){return!r.includes(e.calId)}).map(function(e){return e.bgCol}),y=c.filter(function(e){return!r.includes(e.calId)}).map(function(e){return e.bgCol}),h=d.filter(function(e){return!r.includes(e.calId)}).map(function(e){return e.bgCol}),b=[],g=[],v=[],m="fri"===f,w="sat"===f||"sun"===f,x=!(!m||!(t.fri.events||t.sat.events||t.sun.events)),D=void 0,k=void 0,C=void 0,O=function(e,t,n){return t?P.todayBgColour:e?u.cardBackdrop:n?P.dayBgColour2:P.dayBgColour1},E=A.a.inPast(t[f].isoDate),S=O(E,A.a.isToday(t[f].isoDate),A.a.isEvenMonth(t[f].isoDate)),M=O(A.a.inPast(t.sat.isoDate),A.a.isToday(t.sat.isoDate),A.a.isEvenMonth(t.sat.isoDate)),N=O(A.a.inPast(t.sun.isoDate),A.a.isToday(t.sun.isoDate),A.a.isEvenMonth(t.sun.isoDate)),T=!1,F=E;if(m&&_.show3DatesOnFri){var B=t.sat,I=t.sun;D=A.a.dateKeyToDate(l),k=A.a.dateKeyToDate(B.isoDate),C=A.a.dateKeyToDate(I.isoDate),A.a.inPast(t.fri.isoDate)&&(T=!0),A.a.inPast(t.sat.isoDate)||(F=!1)}else w?(D=A.a.dateKeyToDate(l),C=A.a.dateKeyToMonth(l)):(g=p,D=A.a.dateKeyToDate(l),C=A.a.dateKeyToMonth(l));return m&&(b=p,g=y,v=h),Z(j,{day:f,inPast:E,bg:S,wideView:a,className:this.props.className},void 0,Z(R,{className:"big-only",dotsColoursL:[],dotsColoursM:p,dotsColoursR:[],day:f,satBg:M,sunBg:N,hideL:T,hideM:F}),Z(R,{className:"small-only",dotsColoursL:b,dotsColoursM:g,dotsColoursR:v,day:f,satBg:M,sunBg:N,hideL:T,hideM:F}),Z(X,{textL:D,textM:k,textR:C,loweredText:x,hideL:T,hideM:F,day:f,satBg:M,sunBg:N}),Z(J,{events:s,inPast:E,wideView:a,smallMode:o}))}}]),t}(),te=Object(S.compose)(Object(w.connect)(function(e){return{excludedCalendars:e.toJS().google.excludedCalendars}}))(ee);var ne={numWeekCards:53,cumulativeFraction:[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(53).keys())).map(function(e){return(53-e)/742}).reduce(function(e,t){return e.length>0&&(t+=e[e.length-1]),e.push(t),e},[]),minTabHeight:3,maxExtraHeight:33,screenHeadingsHeight:46,weekendSliceStickyDiff:9,firstWeekHeightSmall:16,firstWeekHeightBig:18},re=a.a.div.withConfig({displayName:"WeekCardContainer"})(["width:100%;min-height:1em;margin-bottom:0px;position:sticky;top:",";&:first-child{margin-bottom:","px;@media only screen and (max-height:415px){margin-bottom:","px;}}@media only screen and (max-height:415px){top:","px;}"],function(e){return e.stickyTop.toString().concat("px")},ne.firstWeekHeightBig,ne.firstWeekHeightSmall,ne.screenHeadingsHeight+8),oe=a.a.div.withConfig({displayName:"SubWeekSlice"})(["display:flex;word-break:break-all;position:sticky;top:",";&:first-child{margin-bottom:",";}@media only screen and (max-width:414px){height:",";}"],function(e){return e.stickyTop.toString().concat("px")},function(e){return e.inPast?"8px":"0px"},function(e){return e.inPast?0:"unset"}),ae=a.a.div.withConfig({displayName:"WeekendGapContainer"})(["position:relative;min-height:1px;text-align:center;flex:1.5;background:",";color:",";font-size:1.5em;opacity:",";"],u.cardBackdrop,function(e){return e.color},P.weekendOpacity),ie=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),le=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),le(t,[{key:"render",value:function(){var e=this.props,t=e.cardNum,n=e.weekCardData,r=(e.excludedCalendars,ne.weekendSliceStickyDiff),o=ne.screenHeadingsHeight+t*ne.minTabHeight+ne.maxExtraHeight*ne.cumulativeFraction[t],a=A.a.dateKeyToYear(n.sun.isoDate),i=A.a.dateKeyToMonth(n.sun.isoDate),l=0===t&&A.a.inPast(n.fri.isoDate),s=A.a.getDateKeyWithOffset(n.mon.isoDate,-1,6),u=0===t||A.a.dateKeyToMonth(n.sun.isoDate)!==A.a.dateKeyToMonth(s),f=0===t||A.a.dateKeyToYear(n.sun.isoDate)!==A.a.dateKeyToYear(s),c=A.a.isEvenMonth(n.sun.isoDate),d=void 0;return d=0===t?P.todayBgColour:c?P.dayBgColour2:P.dayBgColour1,[ie(re,{stickyTop:o},"weekday",ie(oe,{stickyTop:o,inPast:l},void 0,ie(te,{weekCardData:n,renderDay:"mon"}),ie(te,{weekCardData:n,renderDay:"tue"}),ie(te,{weekCardData:n,renderDay:"wed"}),ie(te,{weekCardData:n,renderDay:"thu"}),ie(te,{weekCardData:n,renderDay:"fri"}),ie(te,{weekCardData:n,renderDay:"sat",className:"big-only"}),ie(te,{weekCardData:n,renderDay:"sun",className:"big-only"}))),ie(re,{stickyTop:o+r,className:"small-only"},"weekend",ie(oe,{stickyTop:o},void 0,ie(ae,{color:d},void 0,f?a:null),ie(te,{weekCardData:n,renderDay:"sat",smallMode:!0}),ie(te,{weekCardData:n,renderDay:"sun"}),ie(ae,{color:d},void 0,u?i:null)))]}}]),t}(),ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function fe(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var ce={fixOverlaps:function(e,t,n){if(!e)return e;var r=ue({},e),o=Object.keys(r),a=o.length;o.forEach(function(e){var t=r[e].events;t&&t.sort(function(e,t){return e.startValue<t.startValue?-1:e.startValue>t.startValue?1:0})});for(var i=function(e,t,n,r){var o=Array(e).fill([]),a=Array(e).fill([]);return t.forEach(function(e,t){var i=n[e].events;i&&i.forEach(function(e){e.allDay&&!r.includes(e.calId)&&(o[t]=[].concat(fe(o[t]),[e.eventId]),a[t]=[].concat(fe(a[t]),[e]))})}),{allDayEventIds:o,allDayEvents:a}}(a,o,r,t),l=i.allDayEvents,s=i.allDayEventIds,u=0;u<s.length;u+=1){var f=s[u],c=l[u];if(u>0)for(var d=s[u-1],p=0;p<f.length;p+=1){var y=f[p],h=d.indexOf(y);if(-1!==h){if(c[p].isoDate!==n){var b=l[u][p],g=Object.assign({},b,{alreadyShown:!0});r[o[u]].events[p]=g}var v=void 0;for(v=p;v<h;v+=1){var m=Object.assign({},ue({},l[u-1][v],{dummy:!0}));l[u].splice(v,0,m),s[u].splice(v,0,m.eventId),r[o[u]].events.splice(v,0,m)}}}}return r}},de=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),pe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var ye=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={weekCardDataArr:[]},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),pe(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setNowKeyDate,n=e.setFirstMonKeyDate;0===this.state.weekCardDataArr.length&&this.refresh(),this.interval=setInterval(function(){var e=new Date,r=A.a.toDateKey(e),o=A.a.getMonAsDateKey(e);n(o),t(r)},1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidUpdate",value:function(e){this.props.eventData!==e.eventData&&this.refresh(),this.props.nowKeyDate===e.nowKeyDate&&this.props.firstMonKeyDate===e.firstMonKeyDate||this.refresh()}},{key:"refresh",value:function(){var e=this.props,t=e.firstMonKeyDate,n=e.eventData,r=e.excludedCalendars,o=e.nowKeyDate,a=function(e,r){var o=A.a.getDateKeyWithOffset(t,e,r);return n[o]?n[o]:{isoDate:o}},i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Array(ne.numWeekCards).keys())).map(function(e){var t=a(e,0),n=a(e,1),r=a(e,2),o=a(e,3),i=a(e,4),l=a(e,5),s=a(e,6);return D.getAssociativeArrayWithKey({mon:t,tue:n,wed:r,thu:o,fri:i,sat:l,sun:s},"day")});i.map(function(e){return ce.fixOverlaps(e,r,o)}),this.setState({weekCardDataArr:i})}},{key:"render",value:function(){var e=this.state.weekCardDataArr,t=this.props.excludedCalendars;return e.map(function(e,n){return de(se,{cardNum:n,weekCardData:e,excludedCalendars:t},e.mon.isoDate)})}}]),t}(),he=Object(w.connect)(function(e){var t=e.toJS();return{firstMonKeyDate:t.app.firstMonKeyDate,nowKeyDate:t.app.nowKeyDate,eventData:t.google.eventData,excludedCalendars:t.google.excludedCalendars}},function(e){return{dispatch:e,setNowKeyDate:function(t){var n=C.setNowKeyDate(t);e(n)},setFirstMonKeyDate:function(t){var n=C.setFirstMonKeyDate(t);e(n)}}})(ye),be=n("25ad705fe0821f323a10"),ge=n.n(be),ve=n("671ff92a05cd5bb54246"),me=n.n(ve),we=a.a.div.withConfig({displayName:"Absolute"})(["position:absolute;width:100vw;"]),Ae=a.a.div.withConfig({displayName:"Fixed"})(["position:fixed;"]),xe=a.a.div.withConfig({displayName:"Align"})(["text-align:",";",";",";",";",";",";",";",";"],function(e){return e.align},function(e){return e.right&&"right: 0"},function(e){return e.bottom&&"bottom: 0"},function(e){return e.absolute&&"position: absolute"},function(e){return e.bold&&"font-weight: bold"},function(e){return e.margin&&"margin-right: 1em"},function(e){return e.margin&&"margin-left: 1em"},function(e){return e.inline&&"display: inline-block"}),De=a.a.div.withConfig({displayName:"FlexContainer"})(["display:flex;position:relative;background-color:",";height:100%;",";}"],function(e){return e.bg},function(e){return e.bold4th&&"\n    :nth-child(4n + 1) {\n      border-bottom: solid grey 1px;  \n    }\n    :last-child {\n      border-bottom: none;\n    }  \n  "}),ke=a.a.div.withConfig({displayName:"Flex"})(["flex:",";"," !important;"," !important;",";",";",";",";border-right:transparent solid ","px;border-left:transparent solid ","px;height:100%;"],function(e){return e.flex},function(e){return e.red?"color: darkred":""},function(e){return e.green?"color: darkgreen":""},function(e){return e.bold?"font-weight: bold":""},function(e){return e.right?"text-align: right":""},function(e){return e.left?"text-align: left":""},function(e){return e.center?"text-align: center":""},function(e){return e.borderRight},function(e){return e.borderLeft}),Ce=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];n.children=s}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),Oe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var Ee=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.PureComponent),Oe(t,[{key:"render",value:function(){return Ce("span",{},void 0,Ce(g,{}),Ce(Ae,{},void 0,Ce(we,{style:{marginTop:"4em"}},void 0,Ce(De,{bg:"white"},void 0,Ce(ke,{flex:1},void 0,Ce(xe,{align:"left",margin:!0,style:{marginTop:"4.5em"}},void 0,Ce("img",{src:me.a,alt:"head",height:"80"}))),Ce(ke,{style:{fontWeight:"bold",marginTop:"2em",fontSize:"1.5em",position:"absolute",width:"100vw",textAlign:"center"}},void 0,"Year Calendar"),Ce(ke,{flex:1},void 0,Ce(xe,{align:"center",margin:!0,style:{marginTop:"7em"}},void 0,"by ",Ce("img",{src:ge.a,alt:"misi"})))))),Ce(i,{},void 0,Ce(he,{})))}}]),t}();t.default=Ee},"25ad705fe0821f323a10":function(e,t){e.exports="data:image/png;base64,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"},"671ff92a05cd5bb54246":function(e,t){e.exports="data:image/png;base64,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"}}]);