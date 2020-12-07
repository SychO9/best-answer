module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},,function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Post"]},function(t,e){t.exports=flarum.core.compat["components/PostMeta"]},function(t,e){t.exports=flarum.core.compat["helpers/userOnline"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},,function(t,e,n){"use strict";n.r(e);var s=n(0),r=n(2),o=n.n(r),a=n(1),i=n.n(a),c=n(3),u=n.n(c),p=n(11),f=n.n(p);function d(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var l=n(4),b=n.n(l),w=function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-comment-dots"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){return app.translator.trans("fof-best-answer.forum.notification.content")},e}(b.a),A=n(7),h=n.n(A),y=n(12),v=n.n(y),x=n(13),P=n.n(x),_=n(5),B=n.n(_),O=n(14),j=n.n(O),N=n(15),S=n.n(N),g=n(8),U=n.n(g),k=n(16),I=n.n(k),C=n(6),T=n.n(C),D=n(17),H=n.n(D),M=n(9),z=n.n(M),G=n(18),L=n.n(G),q=function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var n=e.prototype;return n.view=function(){var t=this.attrs,e=t.post,n=t.discussion;return m("div",{className:"Post--BestAnswer"},e?m("span",null,z()("fas fa-check"),app.translator.trans("fof-best-answer.forum.best_answer_button")):m(T.a,{href:app.route.post(e),"data-number":e.number()},z()("fas fa-check"),app.translator.trans("fof-best-answer.forum.best_answer_button")),m("span",{className:"BestAnswer--User"},app.translator.trans("fof-best-answer.forum.best_answer_label",{user:n.bestAnswerUser(),time_set:this.getSetTime(n),a:m("a",{onclick:function(){return m.route.set(app.route.user(n.bestAnswerUser()))}})})))},n.getSetTime=function(t){if(null!==t.bestAnswerSetAt())return L()(t.bestAnswerSetAt())},e}(H.a),E=n(19),F=n.n(E),J=function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-check"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("fof-best-answer.forum.notification.awarded",{user:t})},e}(b.a),K=function(t){function e(){return t.apply(this,arguments)||this}d(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-check"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("fof-best-answer.forum.notification.best_answer_in_discussion",{user:t})},e}(b.a);o.a.initializers.add("fof/best-answer",(function(){var t,e,n,r,a;i.a.prototype.bestAnswerPost=u.a.hasOne("bestAnswerPost"),i.a.prototype.bestAnswerUser=u.a.hasOne("bestAnswerUser"),i.a.prototype.hasBestAnswer=u.a.attribute("hasBestAnswer"),i.a.prototype.startUserId=u.a.attribute("startUserId",Number),i.a.prototype.firstPostId=u.a.attribute("firstPostId",Number),i.a.prototype.canSelectBestAnswer=u.a.attribute("canSelectBestAnswer"),i.a.prototype.bestAnswerSetAt=u.a.attribute("bestAnswerSetAt",u.a.transformDate),o.a.notificationComponents.selectBestAnswer=w,o.a.notificationComponents.awardedBestAnswer=J,o.a.notificationComponents.bestAnswerInDiscussion=K,Object(s.extend)(i.a.prototype,"badges",(function(t){this.hasBestAnswer()&&!t.has("hidden")&&t.add("bestAnswer",F.a.component({type:"bestAnswer",icon:"fas fa-check",label:o.a.translator.trans("fof-best-answer.forum.answered_badge")}))})),t=function(t,e){return e.isHidden()||1===e.number()||!t.canSelectBestAnswer()||!app.session.user},e=function(t){return!app.forum.attribute("canSelectBestAnswerOwnPost")&&t.user()&&t.user().id()===app.session.user.id()},n=function(t,e){return t.bestAnswerPost()&&t.bestAnswerPost().id()===e.id()},r=function(t){return app.translator.trans(t?"fof-best-answer.forum.remove_best_answer":"fof-best-answer.forum.this_best_answer")},a=function(t,e,n){t.save({bestAnswerPostId:e?n.id():0,bestAnswerUserId:app.session.user.id(),relationships:e?{bestAnswerPost:n,bestAnswerUser:app.session.user}:delete t.data.relationships.bestAnswerPost}).then((function(){app.current instanceof P.a&&app.current.stream.update(),m.redraw(),e&&m.route.set(app.route.discussion(t))}))},Object(s.extend)(v.a,"moderationControls",(function(s,o){if(!app.forum.attribute("useAlternativeBestAnswerUi")){var i=o.discussion(),c=n(i,o);o.pushAttributes({isBestAnswer:c}),"comment"===o.contentType()&&(t(i,o)||e(o)||s.add("bestAnswer",h.a.component({icon:"fa"+(c?"s":"r")+" fa-comment-dots",onclick:function(){a(i,c=!c,o)}},r(c))))}})),Object(s.extend)(B.a.prototype,"actionItems",(function(s){if(app.forum.attribute("useAlternativeBestAnswerUi")){var o=this.attrs.post,i=this.attrs.post.discussion(),c=n(i,o),u=!1!==i.bestAnswerPost();o.pushAttributes({isBestAnswer:c}),t(i,o)||e(o)||s.add("bestAnswer",h.a.component({className:u?c?"Button Button--primary":"Button Button--link":"Button Button--primary",onclick:function(){u=!u,a(i,c=!c,o)}},r(c)))}})),Object(s.extend)(B.a.prototype,"headerItems",(function(t){var e=this.attrs.post;e.discussion().bestAnswerPost()&&e.discussion().bestAnswerPost().id()===e.id()&&!e.isHidden()&&t.add("isBestAnswer",q.component({post:e,discussion:e.discussion()}))})),Object(s.extend)(B.a.prototype,"footerItems",(function(t){var e=this.attrs.post,n=e.discussion(),s=n.bestAnswerPost();if(s&&!s.isHidden()&&1===e.number()&&!e.isHidden()){var r=s.user();t.add("bestAnswerPost",m("div",{className:"CommentPost",onclick:function(){return app.current.get("stream").goToNumber(s.number())}},m("div",{className:"Post-header"},m("ul",null,m("li",{className:"item-user"},m("div",{className:"PostUser"},r&&I()(r),m("h3",null,r?m(T.a,{href:app.route.user(r)},U()(r)):U()(r)))),s.discussion()&&m("li",{className:"item-meta"},S.a.component({post:s})),q.component({post:s,discussion:n}))),m("div",{className:"Post-body"},m.trust(s.contentHtml()))),-10)}})),Object(s.extend)(j.a.prototype,"attrs",(function(t){var e=this.attrs.post;e.discussion().bestAnswerPost()&&e.discussion().bestAnswerPost().id()===e.id()&&!e.isHidden()&&(t.className+=" Post--bestAnswer")})),Object(s.extend)(f.a.prototype,"notificationTypes",(function(t){t.add("awardedBestAnswer",{name:"awardedBestAnswer",icon:"fas fa-check",label:o.a.translator.trans("fof-best-answer.forum.notification.preferences.awarded_best_answer")}),t.add("bestAnswerInDiscussion",{name:"bestAnswerInDiscussion",icon:"fas fa-check",label:o.a.translator.trans("fof-best-answer.forum.notification.preferences.best_answer_in_discussion")})}))}))}]);
//# sourceMappingURL=forum.js.map