# How to run project

---

- Node version: 18.15.0 (mentioned in `.nvmrc`. If you are using
  nvm, [see this](https://collabnix.com/how-to-install-and-configure-nvm-on-mac-os/))
- First, install project dependencies with `yarn install` or `npm install` (in this project, yarn is used)
- To run only the server, use `npm run server`
- To run the project and the server at the same time, use `npm run dev`


# About libraries

---

1. I have used the concurrently module for running multiple tasks in parallel. concurrently is a tool that allows you to
   execute multiple commands simultaneously in one terminal window. It simplifies the management and execution of
   multiple processes during development, saving time and streamlining workflow.
2. For making HTTP requests, I have chosen to use Axios as the HTTP client. Axios is a widely used JavaScript library
   that provides a simple and efficient way to send HTTP requests from both the browser and Node.js. It supports major
   browsers and offers an easy-to-use API for asynchronous requests and response handling.
3. To compile Sass code, I opted for Node-sass. Node-sass provides better performance and supports all the features of
   Sass. I chose to use SCSS (Sass) instead of plain CSS because it offers additional features and benefits such as
   nested syntax for improved readability and organization, as well as support for variables and mixins, promoting code
   reusability.
4. I utilized JSON Server, a tool that enables the creation of a mock RESTful API using JSON data. JSON Server allows me
   to quickly set up a fake API server by defining routes and endpoints based on a JSON file acting as the database.
   This allows for simulating API responses and testing frontend applications without the need for a real backend
   server.
5. To manage the application state in a predictable and centralized manner, I incorporated Redux. Redux is a state
   container designed for JavaScript applications. It stores the application state in a single JavaScript object called
   the "store," facilitating organized state management.
6. I made the decision to use TypeScript instead of JavaScript due to TypeScript's advantages in static typing. With
   TypeScript, explicit types can be defined for variables, function parameters, and return values. This feature helps
   catch potential errors during development, resulting in more robust code. Additionally, static typing improves code
   documentation, enhances code readability, and promotes collaboration within a team by clearly indicating expected
   data types.
7. To generate unique identifiers, I employed the UUID library. The UUID library provides a straightforward and reliable
   way to create universally unique identifiers.
8. I integrated the React-Toastify plugin into my project for its comprehensive notification capabilities.
   React-Toastify is a popular notification library specifically designed for React applications. It offers an
   effortless and visually appealing method of displaying notifications or toasts to users. These notifications inform
   users about important actions, provide feedback on their interactions, or notify them of updates or errors within the
   application. React-Toastify excels at capturing users' attention through visually appealing notifications, ensuring
   prompt notice and acknowledgment of conveyed information.
9. I utilized the classnames library to handle conditional class names in my React components. The classnames library
   provides a convenient way to apply class names based on specific conditions or dynamic variables. This allows for
   dynamic styling or appearance adjustments of elements based on user interactions, data changes, or component states.
   By using conditional class names, I can create more flexible and responsive UI components that adapt to different
   scenarios and user interactions.
10. For simplifying form validations, including chat message validations, I chose to use the React Hook Form library.
    React Hook Form offers simplicity and ease of use in implementing form validations, providing an intuitive API for
    handling form-related tasks.
11. I utilized regular expressions (regex) to map chat messages for emulating a conversation with the GPT model.
    Specifically, I used regex to identify and match specific words or phrases such as "hello" or "How are you" within
    the chat messages. Regular expressions help with pattern matching and text manipulation, allowing for the
    identification and processing of specific content within the chat messages.









