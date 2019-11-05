module.exports=function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=20)}([function(t,e){t.exports=flarum.core.compat.extend},,,function(t,e){t.exports=flarum.core.compat.Component},,,,,,,,,,,,,function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["components/Select"]},function(t,e,s){"use strict";s.r(e);var n=s(0),r=s(16),o=s.n(r),i=s(17),a=s.n(i),p=s(18),l=s.n(p),c=s(3),u=s.n(c);class d extends u.a{init(){this.key=this.props.key,this.cast=this.props.cast||(t=>t)}setting(){return app.modal.component.setting(this.key)}getValue(){return this.cast(this.setting()())}}class f extends d{view(){return l.a.component({state:!!Number(this.getValue()),children:this.props.label||this.props.children,onchange:this.setting()})}}class h extends d{view(){const t=Object.assign({},this.props),e=this.props.label||this.props.children;return t.className="FormControl "+(t.className||""),t.bidi=this.setting(),t.simple?m("input",t):m("div.Form-group",[m("label",e),m("input",t)])}}class b extends h{init(){h.prototype.init.call(this),this.cast=t=>Number(t),this.props.type="number"}}s(19);const w={boolean:f,string:h,integer:b,number:b};class g extends a.a{init(){this.props.items=Array.from(this.props.items||[]),this.settings={},this.setting=this.setting.bind(this),this.props.onsaved&&(this.onsaved=this.props.onsaved.bind(this))}className(){return[this.props.className,this.props.size&&`Modal--${this.props.size}`].filter(Boolean).join(" ")}title(){return this.props.title}form(){return this.props.form||[...this.props.items].map(t=>!t||"div"===t.tag||t.attrs&&t.attrs.className&&t.attrs.className.contains("Form-group")?t:m("div.Form-group",t))}static createItemsFromValidationRules(t,e,s){const n=[];for(const r in t){const o=e+r.toLowerCase(),i=t[r].split("|"),a=i.find(t=>w[t])||"string",p=a&&w[a]||h,l=i.includes("required"),c=s&&(app.translator.trans[`${s}${r.toLowerCase()}-label`]||r)||r,u=app.translator.translations[`${s}${r.toLowerCase()}-description`];n.push(m.prop(`div.Form-group${l?".required":""}`,["boolean"!==a&&m("label",c),p.component({type:a,key:o,required:l,children:c,simple:!0}),u&&m("span",u)]))}return n}}app.initializers.add("fof/best-answer",(function(){app.extensionSettings["fof-best-answer"]=function(){return app.modal.show(new g({title:app.translator.trans("fof-best-answer.admin.settings.title"),type:"small",items:[m(f,{key:"fof-best-answer.allow_select_own_post"},app.translator.trans("fof-best-answer.admin.settings.allow_select_own_post")),m(b,{key:"fof-best-answer.select_best_answer_reminder_days",min:"0",placeholder:"0"},app.translator.trans("fof-best-answer.admin.settings.select_best_answer_reminder_days"))]}))},Object(n.extend)(o.a.prototype,"replyItems",(function(t){t.add("selectBestAnswer",{icon:"far fa-comment",label:app.translator.trans("fof-best-answer.admin.permissions.best_answer"),permission:"discussion.selectBestAnswerOwnDiscussion"}),t.add("selectBestAnswerNotAuthor",{icon:"far fa-comment",label:app.translator.trans("fof-best-answer.admin.permissions.best_answer_not_own_discussion"),permission:"discussion.selectBestAnswerNotOwnDiscussion"})}))}))}]);
//# sourceMappingURL=admin.js.map