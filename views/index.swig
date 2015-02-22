<!DOCTYPE html>
<html>
  <head>
    <title>Coconut Milk Ice Cream!</title>
  </head>

  <body>
    
    <h1>My African Adventures!</h1>

    {% for location in locations %}
    <div>
    <h2>{{location.name}} - {{location.country}}</h2>
    <a href="http://en.wikipedia.org/wiki/Capetown" target="_blank">
      <img src="/images/{{location.image_name}}" alt="Capetown">    
    </a>
    <p>{{location.description}}</p>
    <p>{{location.rating}} (out of 5)</p>
    </div>
    {% endfor %}


  </body>

</html>
