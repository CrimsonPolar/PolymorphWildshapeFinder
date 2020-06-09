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
},"3":function(container,depth0,helpers,partials,data) {
    return "            <h2>No results!</h2>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n\r\n    <meta charset=\"utf-8\">\r\n    <title>Beast Finder</title>\r\n\r\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:100,400,700\" rel=\"stylesheet\">\r\n\r\n    <link rel=\"stylesheet\" href=\"/style.css\" media=\"screen\">\r\n\r\n    <script src=\"https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.runtime.js\"></script>\r\n\r\n    <script src=\"/public/indexPrecompiled.js\"></script>\r\n    <script src=\"/public/beastTableEntryPrecompiled.js\"></script>\r\n\r\n    <script src=\"/index.js\" charset=\"utf-8\" defer></script>\r\n\r\n</head>\r\n\r\n<body>\r\n    <h1>Weclome to Beast Finder!</h1>\r\n    <main class=\"table-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"beastData") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"error") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "    </main>\r\n</body>\r\n\r\n</html>";
},"usePartial":true,"useData":true});
})();