## React Assignment

1. How can you implement shared functionality across a component tree?

2. Why is the `useState` hook appropriate for handling state in a complex component?

3. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png);

1. Ans -- In ReactJs , there are three ways --
 (i) we create a state in the parent component that can be shared across children;
 (ii) there is a ContextAPI where we store all the data app needs, and then we shared across all children;
 (iii) Also we can use a state-management library, which act as a global store;

2. "useState" hook is used for managing states, it is a simpler option for managing state when we don't 
   want to use an external state-management library ora class based component.
   Nowadays, there will be hardly any components that would not use useState. Even with other state
   managing libraries, We use useState. It's simplest syntax and uses, and integration with others is easier too.