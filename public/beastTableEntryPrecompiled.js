(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['beastTableEntry'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"beast-entry\" is-open=\"false\">\r\n    <p class=\"beast-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":26},"end":{"line":2,"column":34}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-challenge-rating\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"challenge_rating") || (depth0 != null ? lookupProperty(depth0,"challenge_rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"challenge_rating","hash":{},"data":data,"loc":{"start":{"line":3,"column":38},"end":{"line":3,"column":58}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-size\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"size") || (depth0 != null ? lookupProperty(depth0,"size") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"size","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":34}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-environments\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"environments") || (depth0 != null ? lookupProperty(depth0,"environments") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"environments","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":50}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-hit-points\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"hit_points") || (depth0 != null ? lookupProperty(depth0,"hit_points") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hit_points","hash":{},"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":6,"column":46}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-armor-class\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"armor_class") || (depth0 != null ? lookupProperty(depth0,"armor_class") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"armor_class","hash":{},"data":data,"loc":{"start":{"line":7,"column":33},"end":{"line":7,"column":48}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-strength\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"strength") || (depth0 != null ? lookupProperty(depth0,"strength") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strength","hash":{},"data":data,"loc":{"start":{"line":8,"column":30},"end":{"line":8,"column":42}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-dexterity\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dexterity") || (depth0 != null ? lookupProperty(depth0,"dexterity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dexterity","hash":{},"data":data,"loc":{"start":{"line":9,"column":31},"end":{"line":9,"column":44}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-constitution\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"constitution") || (depth0 != null ? lookupProperty(depth0,"constitution") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"constitution","hash":{},"data":data,"loc":{"start":{"line":10,"column":34},"end":{"line":10,"column":50}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-intelligence\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"intelligence") || (depth0 != null ? lookupProperty(depth0,"intelligence") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"intelligence","hash":{},"data":data,"loc":{"start":{"line":11,"column":34},"end":{"line":11,"column":50}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-wisdom\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"wisdom") || (depth0 != null ? lookupProperty(depth0,"wisdom") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wisdom","hash":{},"data":data,"loc":{"start":{"line":12,"column":28},"end":{"line":12,"column":38}}}) : helper)))
    + "</p>\r\n    <p class=\"beast-charisma\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"charisma") || (depth0 != null ? lookupProperty(depth0,"charisma") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"charisma","hash":{},"data":data,"loc":{"start":{"line":13,"column":30},"end":{"line":13,"column":42}}}) : helper)))
    + "</p>\r\n</article>";
},"useData":true});
})();