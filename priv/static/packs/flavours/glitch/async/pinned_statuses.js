(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{768:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var s,a,i,o=n(0),c=n(2),u=n(7),r=n(1),l=n(3),d=n.n(l),p=n(13),b=n(5),f=n.n(b),h=n(14),m=n.n(h),j=n(430),O=n(730),g=n(735),w=n(1037),M=n(6),I=n(18),R=Object(M.f)({heading:{id:"column.pins",defaultMessage:"Pinned toot"}}),y=Object(p.connect)((function(t){return{statusIds:t.getIn(["status_lists","pins","items"]),hasMore:!!t.getIn(["status_lists","pins","next"])}}))(s=Object(M.g)((i=a=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,Object(r.a)(Object(c.a)(e),"handleHeaderClick",(function(){e.column.scrollTop()})),Object(r.a)(Object(c.a)(e),"setRef",(function(t){e.column=t})),e}Object(u.a)(e,t);var n=e.prototype;return n.componentWillMount=function(){this.props.dispatch(Object(j.b)())},n.render=function(){var t=this.props,e=t.intl,n=t.statusIds,s=t.hasMore,a=t.multiColumn;return d.a.createElement(O.a,{bindToDocument:!a,icon:"thumb-tack",heading:e.formatMessage(R.heading),ref:this.setRef},Object(o.a)(g.a,{}),Object(o.a)(w.a,{statusIds:n,scrollKey:"pinned_statuses",hasMore:s,bindToDocument:!a}))},e}(I.a),Object(r.a)(a,"propTypes",{dispatch:f.a.func.isRequired,statusIds:m.a.list.isRequired,intl:f.a.object.isRequired,hasMore:f.a.bool.isRequired,multiColumn:f.a.bool}),s=i))||s)||s}}]);
//# sourceMappingURL=pinned_statuses.js.map