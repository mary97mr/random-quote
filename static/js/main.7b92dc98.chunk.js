(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},17:function(t,e,o){"use strict";o.r(e);var n=o(1),a=o.n(n),c=o(4),s=o.n(c),r=(o(14),o(5)),i=o(6),l=o(2),u=o(9),d=o(8),h=(o(15),o(7)),b=o.n(h),f=o(0),j=["#006d77","#8d99ae","#f6bd60","#f28482","#b08968","#8a817c","#d4e09b","#f28f3b","#723d46","#50514f","#e63946","#f77f00"],m=function(t){return t[Math.floor(Math.random()*t.length)]},x=function(t){Object(u.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(r.a)(this,o),(n=e.call(this,t)).state={quotes:[],text:"",author:"",color:""},n.handleClick=n.handleClick.bind(Object(l.a)(n)),n}return Object(i.a)(o,[{key:"componentDidMount",value:function(){var t=this;b.a.ajax({method:"GET",url:"https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",dataType:"json"}).done((function(e){var o=m(e.quotes),n=m(j);document.body.style.backgroundColor=n,t.setState({quotes:e.quotes,text:o.quote,author:o.author,color:n})}))}},{key:"handleClick",value:function(t){t.preventDefault();var e=m(this.state.quotes),o=m(j);document.body.style.backgroundColor=o,this.setState({text:e.quote,author:e.author,color:o})}},{key:"render",value:function(){var t="https://twitter.com/intent/tweet?hashtags=quotes&text="+encodeURIComponent('"'.concat(this.state.text,'" ').concat(this.state.author)),e=this.state,o=e.color,n=e.text,a=e.author,c={backgroundColor:o,borderCorlor:o};return Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{id:"quote-box",className:"card",children:[Object(f.jsx)("div",{className:"blackquote",children:Object(f.jsxs)("p",{style:{color:o},id:"text",className:"text-center fs-2 fw-light",children:[Object(f.jsx)("i",{className:"fas fa-quote-left fs-3 me-3"})," ",n]})}),Object(f.jsx)("figcaption",{style:{color:o},className:"blackquote-footer text-end",id:"author",children:a}),Object(f.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(f.jsx)("a",{href:t,target:"_top",className:"btn",style:c,children:Object(f.jsx)("i",{className:"fab fa-twitter"})}),Object(f.jsx)("button",{style:c,className:"btn",onClick:this.handleClick,target:"_blank",id:"new-quote",children:"New Quote"})]})]})})}}]),o}(n.Component),g=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,18)).then((function(e){var o=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;o(t),n(t),a(t),c(t),s(t)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.7b92dc98.chunk.js.map