(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),s=a(6),i=a(1),o=a(2),u=a(4),m=a(3),h=a(5),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Notes"),l.a.createElement("strong",null,"Instructions"),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"Assume dimensions are in centimetres"),l.a.createElement("li",{className:"collection-item"},"Cubic meter multiplied by 250 factor gives ",l.a.createElement("strong",null,"cubic weight"))),l.a.createElement("strong",null,"My Assumptions"),l.a.createElement("ul",{className:"collection"},l.a.createElement("li",{className:"collection-item"},"Measurements need to be converted into meters (/100)"),l.a.createElement("li",{className:"collection-item"},"Number of pages is variable"),l.a.createElement("li",{className:"collection-item"},"A product may not have any dimensions, dimensions can be empty or null"),l.a.createElement("li",{className:"collection-item"},"A page may not have a next page, pages can be null"),l.a.createElement("li",{className:"collection-item"},"The api validates/serializes before sending the response, therefore numbers cannot be strings")))}}]),t}(n.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.category,a=e.title,n=e.weight,c=e.size,r=c.width,s=c.length,i=c.height;return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,a),l.a.createElement("td",null,t),l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,s),l.a.createElement("td",null,i),l.a.createElement("td",null,r/100*(s/100)*(i/100)*250*1e3)))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Products"),l.a.createElement("p",null,"Found ",l.a.createElement("span",{className:"chip orange white-text"},this.props.products.length," products"),". Average weight for these products ",l.a.createElement("span",{className:"chip pink white-text"},this.props.average," grams")),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Category"),l.a.createElement("th",null,"Weight"),l.a.createElement("th",null,"Width"),l.a.createElement("th",null,"Length"),l.a.createElement("th",null,"Height"),l.a.createElement("th",null,"Cubic weight (grams)"))),l.a.createElement("tbody",null,this.props.products.map(function(e,t){return l.a.createElement(d,{item:e,key:t})}))))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={products:[],filtered_products:[],next_page:null,filter:"",extension:"/api/products/1",avg:null},a.fetchData=function(e){var t="".concat("https://cors-anywhere.herokuapp.com/").concat("http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com").concat(e);fetch(t).then(function(e){return e.json()}).then(function(t){a.setState({products:[].concat(Object(s.a)(a.state.products),Object(s.a)(t.objects)),filtered_products:[].concat(Object(s.a)(a.state.products),Object(s.a)(t.objects)),next_page:t.next}),a.filterProducts(),a.setState({current_extension:e})}).catch(function(e){return console.log("API CALL ERROR: ".concat(e))})},a.nextPage=function(){var e=a.state.next_page;a.fetchData(e)},a.storeFilter=function(e){var t=e.target.value.toLowerCase();a.setState({filter:t}),a.filterProducts()},a.filterProducts=function(){if(a.state.filter.length>0){var e=a.state.products.filter(function(e){return e.category.toLowerCase().includes(a.state.filter)});a.setState({filtered_products:e})}else a.setState({filtered_products:Object(s.a)(a.state.products)});var t=a.calculateWeights();a.setState({avg:t})},a.calculateWeights=function(){for(var e=a.state.filtered_products,t=e.length,n=0,l=0,c=0;c<e.length;c++){if(Object.entries(e[c].size).length>0)n+=e[c].size.height/100*(e[c].size.length/100)*(e[c].size.width/100)*250*1e3;else l+=1}return n/(t-l)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(this.state.extension)}},{key:"render",value:function(){return l.a.createElement("section",{className:"section"},l.a.createElement("section",{className:"container"},l.a.createElement(p,null),l.a.createElement("h3",null,"Filter By"),l.a.createElement("p",null,"Filters by product category on the current page. Case insensitive. When empty, all results are returned."),l.a.createElement("input",{placeholder:"Enter a product category",type:"text",onChange:this.storeFilter}),l.a.createElement(g,{products:this.state.filtered_products,average:this.state.avg}),this.state.next_page?l.a.createElement("button",{style:{marginTop:"1rem"},className:"btn-large waves-effect waves-light indigo",onClick:this.nextPage},"Load More"):l.a.createElement("button",{style:{marginTop:"1rem"},className:"btn-large waves-effect waves-light indigod"},"No more products ")))}}]),t}(n.Component);r.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.7ebaa255.chunk.js.map