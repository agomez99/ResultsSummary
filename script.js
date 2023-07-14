fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Access the JSON data here
    console.log(data);

    // You can iterate over the array and access each object's properties
    data.forEach(item => {
      console.log('Category:', item.category);
      console.log('Score:', item.score);
      console.log('Icon:', item.icon);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });


