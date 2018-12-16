# Test Assignment

This project is created for share some of my ReactJS/Redux/SCSS/Webpack/Typescript skills.  

## Getting Started

Clone the project and run `npm install && npm start` and project will start running on [http://localhost:8080](http://localhost:8080)

## Assignment

1. You are working on a project that is a typical SPA application. It also has navigation through a typical menu.
2. Each menu item leads to a section (Section1, Section2), in which you can also go to a subsection (Section1.n, Section2.n, ..).
3. The number of subsections is dynamic, the configuration can come from the server (this is not directly related to the task itself).
4. Thus, there are root sections that are referenced by the menu, and subsections in each root, into which you can move from the root.
5. Each section contains a typical auto-loadable data list (List) when navigating to it.
6. Clicking on the list item will navigate to a subsection in which there is a automatically loaded list.
7. A typical list is a linear list of data — an array in which entities are stored, for example, {id: 1, name: ‘Peter’}.
8. Each list in a subsection is loaded by identifier when you click on an entity in the parent section.
9. From the subsection, you can go back to the parent section with the browser back button. When going back, the parent list should NOT be reloaded, but if go to the parent, and then click again on the same Entity, the list in the subsection should be reloaded.
10. A menu is always available.
11. When you click on any root section in the menu at any time, the list in this root section should be overloaded, even if we already went there and loaded this list last time.


