(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"beastTableEntry"),depth0,{"name":"beastTableEntry","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html>\n\n<head>\n\n    <meta charset=\"utf-8\">\n    <title>Beast Finder</title>\n\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:100,400,700\" rel=\"stylesheet\">\n\n    <link rel=\"stylesheet\" href=\"/style.css\" media=\"screen\">\n\n    <script src=\"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.runtime.js\"></script>\n\n    <script src=\"/index.js\" charset=\"utf-8\" defer></script>\n\n</head>\n\n<body>\n    <h1>Weclome to Beast Finder!</h1>\n    <main class=\"table-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"beastData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":24,"column":17}}})) != null ? stack1 : "")
    + "    </main>\n</body>\n\n</html>";
},"usePartial":true,"useData":true});
})();