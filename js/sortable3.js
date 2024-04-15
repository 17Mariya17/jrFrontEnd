// Used: https://github.com/SortableJS/Sortable?tab=readme-ov-file#cdn
// Sortable lists - you can pass element between them
//  Intoxicated
Sortable.create(intoxicatedList, {
  group: "exercise3Lists",
  animation: 100,
  sort: true, // sorting inside list
  // Element is dropped into the list from another list
  onAdd: function (/**Event*/ event) {
    // event.newIndex - new index of the element in the list
    // event.item.id - id shows the correct position of the element in the list

    // If the element contains class intoxicatedList
    if (
      document
        .getElementById(event.item.id)
        .classList.contains("intoxicatedList")
    ) {
      // Remove the old background
      document
        .getElementById(event.item.id)
        .classList.remove("bg-body-secondary");
      // Add class to show the right answer
      document.getElementById(event.item.id).classList.add("bg-success");
      document.getElementById(event.item.id).classList.add("text-light");
    } else if (
      // If there is class to show the right answer
      document.getElementById(event.item.id).classList.contains("bg-success") &&
      document
        .getElementById(event.item.id)
        .classList.contains("notIntoxicatedList")
    ) {
      // Remove it
      document.getElementById(event.item.id).classList.remove("bg-success");
      document.getElementById(event.item.id).classList.remove("text-light");
      // Add class with the normal background
      document.getElementById(event.item.id).classList.add("bg-body-secondary");
    }
  },
});
// Not Intoxicated
Sortable.create(notIntoxicatedList, {
  group: "exercise3Lists",
  animation: 100,
  sort: true, // sorting inside list
  // Element is dropped into the list from another list
  onAdd: function (/**Event*/ event) {
    // event.newIndex - new index of the element in the list
    // event.item.id - id shows the correct position of the element in the list

    // If the element contains class notIntoxicatedList
    if (
      document
        .getElementById(event.item.id)
        .classList.contains("notIntoxicatedList")
    ) {
      // Remove the old background
      document
        .getElementById(event.item.id)
        .classList.remove("bg-body-secondary");
      // Add class to show the right answer
      document.getElementById(event.item.id).classList.add("bg-success");
      document.getElementById(event.item.id).classList.add("text-light");
    } else if (
      // If there is class to show the right answer
      document.getElementById(event.item.id).classList.contains("bg-success") &&
      document
        .getElementById(event.item.id)
        .classList.contains("intoxicatedList")
    ) {
      // Remove it
      document.getElementById(event.item.id).classList.remove("bg-success");
      document.getElementById(event.item.id).classList.remove("text-light");
      // Add class with the normal background
      document.getElementById(event.item.id).classList.add("bg-body-secondary");
    }
  },
});
// Start list
Sortable.create(startList, {
  group: "exercise3Lists",
  animation: 100,
  sort: true,
  // Element is dropped into the list from another list
  onAdd: function (/**Event*/ event) {
    // event.newIndex - new index of the element in the list
    // event.item.id - id shows the correct position of the element in the list
    if (
      // If there is class to show the right answer
      document.getElementById(event.item.id).classList.contains("bg-success")
    ) {
      // Remove it
      document.getElementById(event.item.id).classList.remove("bg-success");
      document.getElementById(event.item.id).classList.remove("text-light");
      // Add class with the normal background
      document.getElementById(event.item.id).classList.add("bg-body-secondary");
    }
  },
});
