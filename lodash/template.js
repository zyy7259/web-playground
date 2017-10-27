const template = require('lodash/template');

const compiled = template(`
  <div class='behavior-list'>
    <% behaviorList.forEach(function(behavior) {
      %>
        <%= behavior.type %>
        <%= behavior.accumulatedCount %>
        <%= behavior.total %>
      <%
    }) %>
  </div>
`);

const html = compiled({
  behaviorList: [
    {
      type: 'type',
      accumulatedCount: 1,
      total: 2
    }
  ]
});

console.log(html);
