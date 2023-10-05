// Set the active effect of the side bar
// Get all list items
document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('#SideBar ul li');
  const listItemsSubBar = document.querySelectorAll('#SubBar ul li');
  const listItemsSubBarHome = document.querySelectorAll('#SubBarHome ul li');

  listItems.forEach((item, index) => {
    if (localStorage.getItem(index) != null) {
      item.classList.toggle('active');
    }
  });

  listItemsSubBar.forEach((item, index) => {
    if (localStorage.getItem(index + "sub") != null) {
      item.classList.toggle('active');
    }
  });

  listItemsSubBarHome.forEach((item, index) => {
    if (localStorage.getItem(index + "home") != null) {
      item.classList.toggle('active');
    }
  });

  // Add click event listeners to each list item
  listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Toggle the "active" class on the clicked list item
      localStorage.setItem(index, 'active');

      item.classList.toggle('active');

      listItems.forEach((otherItem, idx) => {
        if (idx != index && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          localStorage.removeItem(idx);
        }
      })
    });
  });


  listItemsSubBar.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Toggle the "active" class on the clicked list item
      localStorage.setItem(index + "sub", 'John');
      item.classList.toggle('active');
      listItems.forEach((otherItem, idx) => {

        if (idx != index && localStorage.getItem(idx + "sub") != null) {
          otherItem.classList.remove('active');
          localStorage.removeItem(idx + "sub");
        }
      })
    });
  });

  listItemsSubBarHome.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Toggle the "active" class on the clicked list item
      localStorage.setItem(index + "home", 'John');
      item.classList.toggle('active');
      listItems.forEach((otherItem, idx) => {

        if (idx != index && localStorage.getItem(idx + "home") != null) {
          otherItem.classList.remove('active');
          localStorage.removeItem(idx + "home");
        }
      })
    });
  });

});


// Get the innerhtml