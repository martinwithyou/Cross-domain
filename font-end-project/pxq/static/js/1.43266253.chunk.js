webpackJsonp([1],{513:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(5),i=n.n(c),s=n(52),l=(n.n(s),n(76)),A=n(184),m=n(520),p=n(523),f=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),d=function(e){function t(){var e,n,a,c;r(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.state={flagBarPos:"17%"},a.setFlagBarPos=function(e){var t=void 0;switch(e){case"passed":t="17%";break;case"audited":t="50%";break;case"failed":t="83%";break;default:t="17%"}a.setState({flagBarPos:t})},c=n,o(a,c)}return a(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.pathname.split("/")[2],n=e.location.pathname.split("/")[2];t!==n&&this.setFlagBarPos(n)}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(s.is)(Object(s.fromJS)(this.props),Object(s.fromJS)(e))||!Object(s.is)(Object(s.fromJS)(this.state),Object(s.fromJS)(t))}},{key:"componentWillMount",value:function(){var e=this.props.location.pathname.split("/")[2];this.setFlagBarPos(e)}},{key:"render",value:function(){return i.a.createElement("main",{className:"common-con-top"},i.a.createElement(A.a,{title:"\u8bb0\u5f55"}),i.a.createElement("section",{className:"record-nav-con"},i.a.createElement("nav",{className:"record-nav"},i.a.createElement(l.c,{to:this.props.match.path+"/passed",className:"nav-link"},"\u5df2\u901a\u8fc7"),i.a.createElement(l.c,{to:this.props.match.path+"/audited",className:"nav-link"},"\u5f85\u5ba1\u6838"),i.a.createElement(l.c,{to:this.props.match.path+"/failed",className:"nav-link"},"\u672a\u901a\u8fc7")),i.a.createElement("i",{className:"nav-flag-bar",style:{left:this.state.flagBarPos}})),i.a.createElement(l.f,null,i.a.createElement(l.e,{path:this.props.match.path+"/:type",component:m.a}),i.a.createElement(l.d,{from:""+this.props.match.path,to:this.props.match.path+"/passed",exact:!0,component:m.a})))}}]),t}(c.Component);t.default=d},520:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var c=t[o](a),i=c.value}catch(e){return void n(e)}if(!c.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(59),s=n.n(i),l=n(5),A=n.n(l),m=n(52),p=(n.n(m),n(114)),f=n(521),d=(n.n(f),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),u=function(e){function t(){var e,n,c,i,l=this;o(this,t);for(var A=arguments.length,m=Array(A),f=0;f<A;f++)m[f]=arguments[f];return n=c=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(m))),c.state={recordData:[]},c.getRecord=function(){var e=r(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.getRecord({type:t});case 3:n=e.sent,c.setState({recordData:n.data||[]}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,l,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),i=n,a(c,i)}return c(t,e),d(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.pathname.split("/")[2],n=e.location.pathname.split("/")[2];t!==n&&this.getRecord(n)}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(m.is)(Object(m.fromJS)(this.props),Object(m.fromJS)(e))||!Object(m.is)(Object(m.fromJS)(this.state),Object(m.fromJS)(t))}},{key:"componentWillMount",value:function(){var e=this.props.location.pathname.split("/")[2];this.getRecord(e)}},{key:"render",value:function(){return A.a.createElement("div",null,A.a.createElement("ul",{className:"record-list-con"},this.state.recordData.map(function(e,t){return A.a.createElement("li",{className:"record-item",key:t},A.a.createElement("section",{className:"record-item-header"},A.a.createElement("span",null,"\u521b\u5efa\u65f6\u95f4\uff1a",e.created_at),A.a.createElement("span",null,e.type_name)),A.a.createElement("section",{className:"record-item-content"},A.a.createElement("p",null,A.a.createElement("span",null,"\u7528\u6237\u540d\uff1a"),e.customers_name," \u2003 ",e.customers_phone),A.a.createElement("p",null,A.a.createElement("span",null,"\u5546\u2003\u54c1\uff1a"),e.product[0].product_name),A.a.createElement("p",null,A.a.createElement("span",null,"\u91d1\u2003\u989d\uff1a"),e.sales_money," \u2003 \u4f63\u91d1\uff1a",e.commission)),A.a.createElement("p",{className:"record-item-footer"},"\u7b49\u5f85\u7ba1\u7406\u5458\u5ba1\u6838\uff0c\u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u4f63\u91d1\u5c06\u7ed3\u7b97\u81f3\u8d26\u6237"))})))}}]),t}(l.Component);t.a=u},521:function(e,t,n){var r=n(522);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(511)(r,o);r.locals&&(e.exports=r.locals)},522:function(e,t,n){t=e.exports=n(183)(!0),t.push([e.i,".record-list-con .record-item{background-color:#fff;margin-top:.266667rem}.record-list-con .record-item .record-item-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:1.333333rem;padding:0 .266667rem;border-bottom:1px solid #eee}.record-list-con .record-item .record-item-header span:first-of-type{font-size:.4rem;color:#999;text-align:left}.record-list-con .record-item .record-item-header span:nth-of-type(2){font-size:.48rem;color:#f20500;text-align:left}.record-list-con .record-item .record-item-content{padding:.266667rem}.record-list-con .record-item .record-item-content p{font-size:.4rem;color:#000;text-align:left;line-height:.666667rem}.record-list-con .record-item .record-item-footer{padding:.266667rem;font-size:.373333rem;color:#000;text-align:left;border-top:1px solid #eee}","",{version:3,sources:["/Users/dezhu/project/react-pxq/src/pages/record/components/recordList.less"],names:[],mappings:"AAAA,8BACE,sBAAuB,AACvB,qBAAwB,CACzB,AAED,kDACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,8BAA+B,AAC/B,sBAAuB,AACvB,mBAAoB,AACpB,mBAAoB,AACpB,qBAAuB,AACvB,4BAA8B,CAC/B,AAED,qEACE,gBAAkB,AAClB,WAAY,AACZ,eAAiB,CAClB,AAED,sEACE,iBAAmB,AACnB,cAAe,AACf,eAAiB,CAClB,AAED,mDACE,kBAAqB,CACtB,AAED,qDACE,gBAAkB,AAClB,WAAY,AACZ,gBAAiB,AACjB,sBAAyB,CAC1B,AAED,kDACE,mBAAqB,AACrB,qBAAuB,AACvB,WAAY,AACZ,gBAAiB,AACjB,yBAA2B,CAC5B",file:"recordList.less",sourcesContent:[".record-list-con .record-item {\n  background-color: #fff;\n  margin-top: 0.266667rem;\n}\n\n.record-list-con .record-item .record-item-header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 1.333333rem;\n  padding: 0 0.266667rem;\n  border-bottom: 1PX solid #eee;\n}\n\n.record-list-con .record-item .record-item-header span:nth-of-type(1) {\n  font-size: 0.4rem;\n  color: #999;\n  text-align: left;\n}\n\n.record-list-con .record-item .record-item-header span:nth-of-type(2) {\n  font-size: 0.48rem;\n  color: #F20500;\n  text-align: left;\n}\n\n.record-list-con .record-item .record-item-content {\n  padding: 0.266667rem;\n}\n\n.record-list-con .record-item .record-item-content p {\n  font-size: 0.4rem;\n  color: #000;\n  text-align: left;\n  line-height: 0.666667rem;\n}\n\n.record-list-con .record-item .record-item-footer {\n  padding: 0.266667rem;\n  font-size: 0.373333rem;\n  color: #000;\n  text-align: left;\n  border-top: 1PX solid #eee;\n}"],sourceRoot:""}])},523:function(e,t,n){var r=n(524);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(511)(r,o);r.locals&&(e.exports=r.locals)},524:function(e,t,n){t=e.exports=n(183)(!0),t.push([e.i,".record-nav-con{height:1.466667rem;position:relative}.record-nav-con .record-nav{height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-color:#fff}.record-nav-con .record-nav .nav-link{font-size:.48rem;color:#333;text-align:center;-ms-flex:1 1;flex:1 1;height:.8rem;line-height:.8rem;-webkit-transition:color .3s;-o-transition:color .3s;transition:color .3s}.record-nav-con .record-nav a:first-of-type,.record-nav-con .record-nav a:nth-of-type(2){border-right:1px solid #ddd}.record-nav-con .record-nav .active{color:#975ec9}.record-nav-con .nav-flag-bar{width:1.733333rem;height:2px;border-radius:.013333rem;background-color:#975ec9;position:absolute;bottom:0;left:17%;margin-left:-.866667rem;-webkit-transition:left .3s;-o-transition:left .3s;transition:left .3s}","",{version:3,sources:["/Users/dezhu/project/react-pxq/src/pages/record/record.less"],names:[],mappings:"AAAA,gBACE,mBAAoB,AACpB,iBAAmB,CACpB,AAED,4BACE,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AACtB,uBAAwB,AACxB,sBAAuB,AACvB,mBAAoB,AACpB,qBAAuB,CACxB,AAED,sCACE,iBAAmB,AACnB,WAAY,AACZ,kBAAmB,AACnB,aAAc,AACd,SAAU,AACV,aAAe,AACf,kBAAoB,AACpB,6BAAgC,AAChC,wBAA2B,AAC3B,oBAAwB,CACzB,AAED,yFAEE,2BAA6B,CAC9B,AAED,oCACE,aAAe,CAChB,AAED,8BACE,kBAAmB,AACnB,WAAY,AACZ,yBAA2B,AAC3B,yBAA0B,AAC1B,kBAAmB,AACnB,SAAU,AACV,SAAU,AACV,wBAA0B,AAC1B,4BAA+B,AAC/B,uBAA0B,AAC1B,mBAAuB,CACxB",file:"record.less",sourcesContent:[".record-nav-con {\n  height: 1.466667rem;\n  position: relative;\n}\n\n.record-nav-con .record-nav {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background-color: #fff;\n}\n\n.record-nav-con .record-nav .nav-link {\n  font-size: 0.48rem;\n  color: #333;\n  text-align: center;\n  -ms-flex: 1 1;\n  flex: 1 1;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  -webkit-transition: color 300ms;\n  -o-transition: color 300ms;\n  transition: color 300ms;\n}\n\n.record-nav-con .record-nav a:nth-of-type(1),\n.record-nav-con .record-nav a:nth-of-type(2) {\n  border-right: 1Px solid #ddd;\n}\n\n.record-nav-con .record-nav .active {\n  color: #975ec9;\n}\n\n.record-nav-con .nav-flag-bar {\n  width: 1.733333rem;\n  height: 2PX;\n  border-radius: 0.013333rem;\n  background-color: #975ec9;\n  position: absolute;\n  bottom: 0;\n  left: 17%;\n  margin-left: -0.866667rem;\n  -webkit-transition: left 300ms;\n  -o-transition: left 300ms;\n  transition: left 300ms;\n}"],sourceRoot:""}])}});