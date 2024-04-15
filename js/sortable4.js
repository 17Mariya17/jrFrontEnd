// Used: https://github.com/SortableJS/Sortable?tab=readme-ov-file#cdn
// Exercise 4  - Sortable list
Sortable.create(simpleList, {
  /* options */
  sort: true, // sorting inside list
  // Called by any change to the list (add / update / remove)
  onSort: function (/**Event*/ event) {
    // event.newIndex - new index of the element in the list
    // event.item.id - id shows the correct position of the element in the list
    // If the index of the element is equal to the correct position of the element
    if (event.item.id == event.newIndex) {
      // Remove the old background
      document
        .getElementById(event.item.id)
        .classList.remove("bg-body-secondary");
      // Add class to show the right answer
      document.getElementById(event.item.id).classList.add("bg-success");
      document.getElementById(event.item.id).classList.add("text-light");
    } else {
      // If there is class to show the right answer
      if (
        document.getElementById(event.item.id).classList.contains("bg-success")
      ) {
        // Remove it
        document.getElementById(event.item.id).classList.remove("bg-success");
        document.getElementById(event.item.id).classList.remove("text-light");
        // Add class with the normal background
        document
          .getElementById(event.item.id)
          .classList.add("bg-body-secondary");
      }
    }
  },
});
