export const blogs = [
 {
  id: "rsa-algorithm-javascript",

  title: "RSA Algorithm and RSA Token Explanation with JavaScript",

  category: "Security",

  cover:
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MXkFgkqis_u0OnNGJnXkTw.png",

  date: "2025-10-02",

  readTime: "7 min read",

  excerpt:
    "Learn how the RSA algorithm works, understand asymmetric encryption, RSA tokens, and implement RSA encryption and decryption with JavaScript examples.",

  content: `
# RSA Algorithm and RSA Token Explanation with JavaScript

RSA (Rivest–Shamir–Adleman) is one of the most widely used asymmetric encryption algorithms. It enables secure communication by using a pair of cryptographic keys: a public key for encryption and a private key for decryption.

## What is Asymmetric Encryption?

Unlike symmetric encryption, asymmetric encryption uses two different keys. The public key can be shared with anyone, while the private key must remain secret.

## How RSA Works

RSA involves three major steps:

1. Key Generation
2. Encryption
3. Decryption

The algorithm relies on the mathematical difficulty of factoring very large prime numbers.

## RSA Tokens

RSA tokens are commonly used in authentication and digital signature systems. They help verify identity, securely exchange information, and protect sensitive data.

## JavaScript Example

The article demonstrates how to generate RSA keys, encrypt plaintext, and decrypt ciphertext using JavaScript libraries and practical examples.

## Applications

- Secure Communication
- HTTPS
- JWT Signing
- Digital Signatures
- Authentication Systems
- Secure API Communication

## Conclusion

Understanding RSA is essential for every web developer interested in authentication, cybersecurity, and modern web applications. This article explains the concepts with practical JavaScript examples to help you get started.
`,

  tags: [
    "JavaScript",
    "RSA",
    "Security",
    "Cryptography",
    "Asymmetric Encryption",
    "Authentication",
  ],

  mediumUrl:
    "https://medium.com/iceapple-tech-talks/rsa-algorithm-and-rsa-token-explaination-and-code-example-with-javascript-43642a930431",
},
 {
  id: "toon-vs-json",

  title: "TOON vs JSON: The Next Evolution of Typed Data for Modern Systems",

  category: "AI",

  cover:
    "data:image/webp;base64,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",

  date: "2025-11-19",

  readTime: "7 min read",

  excerpt:
    "Discover how TOON improves upon JSON by introducing typed data, stronger validation, and AI-friendly structures for modern applications and intelligent systems.",

  content: `
# TOON vs JSON: The Next Evolution of Typed Data for Modern Systems

JSON has been the de facto standard for data exchange on the web for decades. Its simplicity and readability make it ideal for APIs, configuration files, and web applications.

However, as AI systems and complex applications continue to evolve, developers are beginning to encounter the limitations of JSON—particularly its lack of built-in type safety and semantic structure.

## What is JSON?

JavaScript Object Notation (JSON) is a lightweight data-interchange format that represents information using key-value pairs and arrays.

While JSON is easy to parse and language-independent, it treats most values as generic data without enforcing explicit types.

## Introducing TOON

TOON is a modern typed data format designed to overcome many of JSON's limitations. It introduces explicit type definitions, improved validation, and richer metadata while maintaining human readability.

This makes TOON particularly suitable for AI applications, large-scale distributed systems, and enterprise software.

## TOON vs JSON

Some of the major differences include:

- Explicit type definitions
- Better schema validation
- Improved data consistency
- Rich metadata support
- AI-friendly structured representation
- Easier integration with strongly typed languages

## Why AI Needs Typed Data

Large Language Models and AI agents work more reliably when data contains clear semantic meaning and well-defined types.

Typed formats reduce ambiguity, improve validation, and enable safer communication between AI systems and applications.

## Use Cases

- AI Agents
- LLM Applications
- Enterprise APIs
- Microservices
- Configuration Management
- Distributed Systems

## Conclusion

While JSON remains an excellent choice for general-purpose data exchange, TOON represents a promising direction for applications that require stronger typing, validation, and AI-native interoperability.

As modern software becomes increasingly AI-driven, typed data formats like TOON may become an essential part of future system architectures.
`,

  tags: [
    "TOON",
    "JSON",
    "AI",
    "Data Formats",
    "LLM",
    "System Design",
    "Backend",
  ],

  mediumUrl:
    "https://medium.com/@afrin.ashar/toon-vs-json-the-next-evolution-of-typed-data-for-modern-systems-834fb7b050b9",
},

  {
  id: "mastering-regular-expressions-javascript",

  title: "Mastering Regular Expressions in JavaScript: A Complete Guide",

  category: "JavaScript",

  cover:
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*QG2dSgbApBVrjfuaezsK9A.png",

  date: "2025-10-06",

  readTime: "11 min read",

  excerpt:
    "A comprehensive guide to JavaScript regular expressions, covering syntax, flags, character classes, quantifiers, groups, lookaheads, lookbehinds, and practical real-world examples.",

  content: `
# Mastering Regular Expressions in JavaScript: A Complete Guide

Regular Expressions (Regex) are powerful pattern-matching tools used for searching, validating, extracting, and replacing text. They are an essential skill for every JavaScript developer working with user input, forms, APIs, and text processing.

This guide takes you from the basics of regex to advanced concepts with practical JavaScript examples.

## What is a Regular Expression?

A Regular Expression is a sequence of characters that defines a search pattern. JavaScript provides built-in support through the \`RegExp\` object and regex literals.

Regex is commonly used for:

- Form validation
- Email validation
- Password validation
- Finding and replacing text
- Parsing data
- Data extraction

## Regex Syntax

JavaScript regular expressions can be written using:

- Regex literals
- RegExp constructor

Both approaches allow developers to create flexible text-matching patterns.

## Character Classes

Character classes help match specific groups of characters such as:

- Digits
- Letters
- Whitespace
- Word characters
- Custom ranges

These make patterns concise and expressive.

## Quantifiers

Quantifiers specify how many times a character or group should appear.

Examples include:

- Zero or more
- One or more
- Optional matches
- Exact counts
- Range-based repetitions

## Groups and Capturing

Grouping allows multiple expressions to be treated as a single unit while capturing matched values for later use.

Named groups improve readability and maintainability in complex expressions.

## Assertions

Advanced regex features include:

- Word boundaries
- Lookaheads
- Negative lookaheads
- Lookbehinds
- Negative lookbehinds

These enable precise pattern matching without consuming characters.

## JavaScript Regex Methods

JavaScript provides several useful methods including:

- test()
- exec()
- match()
- matchAll()
- replace()
- replaceAll()
- search()
- split()

Each method serves different use cases depending on whether you're validating, extracting, or transforming text.

## Real-World Applications

Regular expressions are widely used for:

- Email validation
- Phone number validation
- URL parsing
- Password strength checks
- Removing unwanted characters
- Syntax highlighting
- Log analysis

## Best Practices

- Keep expressions readable.
- Avoid overly complex patterns.
- Use named capture groups when possible.
- Test regex thoroughly with edge cases.
- Prefer simple expressions over clever ones.

## Conclusion

Regular expressions are one of the most valuable tools in a JavaScript developer's toolkit. By understanding pattern matching, groups, quantifiers, assertions, and JavaScript's regex APIs, you can write cleaner, more efficient, and more reliable code for real-world applications.
`,

  tags: [
    "JavaScript",
    "Regex",
    "Regular Expressions",
    "Frontend",
    "Web Development",
    "Validation",
    "Text Processing",
  ],

  mediumUrl:
    "https://medium.com/iceapple-tech-talks/mastering-regular-expressions-in-javascript-a-complete-guide",
},
{
  id: "javascript-events",

  title: "JavaScript Events: From Basics to Advanced Concepts",

  category: "JavaScript",

  cover:
    "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*WvlN10FJQqaTJR8yZaGobg.gif",

  date: "2025-10-26",

  readTime: "19 min read",

  excerpt:
    "Master JavaScript events from the fundamentals to advanced topics including event propagation, delegation, custom events, asynchronous event handling, and real-world best practices.",

  content: `
# JavaScript Events: From Basics to Advanced Concepts

JavaScript events are the foundation of interactive web applications. Every click, keyboard press, mouse movement, form submission, or API response is driven by events.

This guide explores JavaScript events from beginner concepts to advanced techniques used in modern web development.

## What are JavaScript Events?

An event is an action or occurrence detected by the browser. JavaScript allows developers to listen for these events and execute code in response.

Common examples include:

- Mouse Click
- Double Click
- Keyboard Input
- Form Submission
- Scroll
- Resize
- Drag and Drop

## Event Listeners

The most common way to handle events is using \`addEventListener()\`.

It separates HTML from JavaScript and allows multiple listeners on the same element.

## Event Object

Every event handler receives an Event object containing useful information such as:

- Target element
- Event type
- Mouse position
- Keyboard key
- Timestamp

## Event Propagation

JavaScript events travel through the DOM using three phases:

- Capturing Phase
- Target Phase
- Bubbling Phase

Understanding propagation helps build efficient and predictable applications.

## Event Delegation

Instead of attaching listeners to every element, event delegation allows a parent element to manage events for its children.

This technique improves performance and simplifies dynamic UI development.

## Custom Events

JavaScript also supports creating custom events to improve communication between components and modules.

Custom events make applications more modular and easier to maintain.

## Asynchronous Events

Modern applications frequently combine events with asynchronous operations like:

- Fetch API
- Promises
- Async/Await
- WebSockets

Managing asynchronous event flows is essential for responsive user experiences.

## Best Practices

- Use addEventListener instead of inline handlers.
- Remove unused event listeners.
- Use event delegation for dynamic content.
- Avoid unnecessary DOM updates.
- Keep event handlers lightweight.

## Conclusion

Understanding JavaScript events is essential for every frontend developer. From simple button clicks to advanced event delegation and asynchronous workflows, mastering the event system enables you to build scalable, performant, and interactive web applications.
`,

  tags: [
    "JavaScript",
    "Events",
    "DOM",
    "Event Delegation",
    "Frontend",
    "Web Development",
    "Software Engineering",
  ],

  mediumUrl:
    "https://medium.com/iceapple-tech-talks/javascript-events-from-basics-to-advanced-concepts-c977f47e4662",
},
{
  id: "mastering-react-refs",

  title: "Mastering React Refs: A Beginner's Guide",

  category: "React",

  cover:
    "https://th.bing.com/th/id/OIP.CEGh_8s6eCspfBxUKf5DjgHaFj?w=228&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",

  date: "2024-10-12",

  readTime: "3 min read",

  excerpt:
    "Learn the fundamentals of React Refs, how to access DOM elements, manage focus, interact with uncontrolled components, and understand practical use cases with simple examples.",

  content: `
# Mastering React Refs: A Beginner's Guide

React Refs provide a way to directly access DOM elements or React component instances without triggering a re-render. While React encourages declarative programming, refs are useful when you need imperative control over elements.

This beginner-friendly guide introduces React Refs, explains when to use them, and demonstrates practical examples.

## What are React Refs?

Refs are references to DOM elements or React components. They allow you to access and manipulate elements directly when needed.

React provides the \`useRef()\` Hook for functional components.

## Creating a Ref

A ref is created using the \`useRef()\` Hook.

The returned object persists across renders, making it ideal for storing references to DOM elements or mutable values.

## Accessing DOM Elements

React Refs are commonly used to interact with DOM elements, such as:

- Focusing an input field
- Selecting text
- Scrolling to an element
- Playing or pausing media
- Triggering animations

## Refs vs State

Unlike state, updating a ref does not cause a component to re-render.

Use state when UI updates are required, and refs when you simply need to store or access values without affecting rendering.

## Common Use Cases

React Refs are useful for:

- Form handling
- Managing focus
- Integrating third-party libraries
- Accessing DOM measurements
- Storing previous values
- Managing timers and intervals

## Best Practices

- Use refs only when necessary.
- Prefer state for UI-related data.
- Avoid excessive DOM manipulation.
- Keep components declarative whenever possible.

## Conclusion

React Refs are an essential feature that allows developers to interact directly with the DOM when needed. By understanding when and how to use refs, you can build more interactive and efficient React applications while maintaining clean and maintainable code.
`,

  tags: [
    "React",
    "React Hooks",
    "useRef",
    "JavaScript",
    "Frontend",
    "Web Development",
    "DOM",
  ],

  mediumUrl:
    "https://medium.com/@afrinashar8/mastering-react-refs-a-beginners-guide-06d1df9b630e",
},
{
  id: "javascript-closures-explained",

  title: "JavaScript Closures Explained with Real-World Examples",

  category: "JavaScript",

  cover:
    "https://th.bing.com/th/id/OIP.K1FnPi7W7Gm2QgcF5sTWjQHaHa?w=172&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",

  date: "2024-10-12",

  readTime: "4 min read",

  excerpt:
    "Understand JavaScript closures with simple explanations and real-world examples. Learn how closures work, why they are important, and where they're commonly used in modern JavaScript development.",

  content: `
# JavaScript Closures Explained with Real-World Examples

Closures are one of JavaScript's most powerful and frequently asked interview topics. They allow inner functions to remember and access variables from their outer scope, even after the outer function has finished executing.

This guide explains closures in a simple way with practical examples and real-world use cases.

## What is a Closure?

A closure is created whenever a function is defined inside another function. The inner function retains access to the variables of its outer function through JavaScript's lexical scope.

Closures allow data to persist even after the outer function has returned.

## How Closures Work

When an inner function is returned or passed elsewhere, it maintains a reference to the variables in the scope where it was created.

This enables functions to "remember" values from previous executions.

## Lexical Scope

Closures are based on lexical scoping, meaning a function can access variables from:

- Its own scope
- Its parent scope
- The global scope

This scope chain is preserved when a closure is created.

## Real-World Examples

Closures are commonly used for:

- Data privacy
- Function factories
- Event handlers
- Callbacks
- Timers
- Memoization
- Module patterns

These patterns help developers write cleaner and more maintainable JavaScript code.

## Benefits of Closures

Closures provide several advantages:

- Encapsulation of private variables
- Better code organization
- State preservation
- Reusable functions
- Improved modularity

## Best Practices

- Use closures for data encapsulation.
- Avoid unnecessary nested closures.
- Be mindful of memory usage when retaining large objects.
- Combine closures with modern JavaScript features for cleaner code.

## Conclusion

Closures are a fundamental JavaScript concept that every developer should understand. Mastering closures enables you to write more efficient, modular, and maintainable applications while gaining a deeper understanding of how JavaScript manages scope and execution.
`,

  tags: [
    "JavaScript",
    "Closures",
    "Lexical Scope",
    "Functions",
    "Frontend",
    "Web Development",
    "Software Engineering",
  ],

  mediumUrl:
    "https://medium.com/@afrinashar8/javascript-closures-explained-with-real-world-examples-1f001e4419cb",
},
{
  id: "typescript-with-react",

  title: "TypeScript with React",

  category: "TypeScript",

  cover:
    "data:image/webp;base64,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",

  date: "2024-12-22",

  readTime: "3 min read",

  excerpt:
    "Learn how to integrate TypeScript with React to build type-safe, scalable, and maintainable applications. Explore component props, state, hooks, and best practices for modern React development.",

  content: `
# TypeScript with React

TypeScript has become the preferred choice for building modern React applications because it provides static typing, better tooling, and improved code reliability. By combining React with TypeScript, developers can catch errors early and write more maintainable applications.

This guide introduces the fundamentals of using TypeScript in React projects with practical examples.

## Why Use TypeScript with React?

TypeScript enhances React development by providing:

- Static type checking
- Better IDE support
- Improved code readability
- Safer refactoring
- Early error detection

These features make applications easier to scale and maintain.

## Setting Up TypeScript

Creating a React project with TypeScript is straightforward using modern build tools.

TypeScript configuration allows developers to enforce coding standards and improve project consistency.

## Typing Components

React components can define types for:

- Props
- State
- Event handlers
- Children
- Default values

Well-typed components improve developer experience and reduce runtime bugs.

## Working with Hooks

TypeScript integrates seamlessly with React Hooks such as:

- useState
- useEffect
- useRef
- useContext
- useReducer

Proper typing ensures hooks behave predictably throughout the application.

## Interfaces and Types

TypeScript offers both interfaces and type aliases for defining reusable data structures.

Choosing the appropriate approach helps create clean and maintainable code.

## Best Practices

- Define explicit types for props.
- Avoid using \`any\` whenever possible.
- Create reusable interfaces.
- Use strict TypeScript settings.
- Leverage type inference where appropriate.

## Conclusion

Using TypeScript with React results in more reliable, scalable, and maintainable applications. By embracing strong typing and modern development practices, developers can build robust user interfaces with greater confidence.
`,

  tags: [
    "TypeScript",
    "React",
    "JavaScript",
    "Frontend",
    "Web Development",
    "React Hooks",
    "Software Engineering",
  ],

  mediumUrl:
    "https://medium.com/@afrinashar8/typescript-0d6c91dcc378",
},
{
  id: "all-about-react-query",

  title: "All about React Query",

  category: "React",

  cover:
    "https://th.bing.com/th/id/OIP.QEzgWY_IZp85Fn7v55UKEgHaEK?w=237&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",

  date: "2024-12-22",

  readTime: "3 min read",

  excerpt:
    "Learn the fundamentals of React Query, including data fetching, caching, synchronization, mutations, and best practices for building fast and efficient React applications.",

  content: `
# All about React Query

React Query (now known as TanStack Query) is a powerful library for managing server state in React applications. It simplifies data fetching, caching, synchronization, and background updates, allowing developers to focus on building features instead of managing complex state logic.

This guide introduces React Query and demonstrates how it improves data management in modern React applications.

## What is React Query?

React Query is a data-fetching library that helps manage asynchronous server state efficiently. It provides automatic caching, refetching, retries, and synchronization out of the box.

Unlike traditional state management libraries, React Query is specifically designed for handling server-side data.

## Why Use React Query?

React Query offers several benefits:

- Automatic caching
- Background data synchronization
- Request deduplication
- Built-in loading and error states
- Automatic retries
- Pagination and infinite queries

These features improve both developer experience and application performance.

## Fetching Data

The \`useQuery()\` hook is the primary way to fetch and cache server data.

It automatically handles loading, error, and success states while keeping cached data up to date.

## Mutations

React Query provides the \`useMutation()\` hook for creating, updating, and deleting data.

Mutations can trigger automatic cache invalidation and refetch related queries to keep the UI synchronized.

## Query Caching

One of React Query's strongest features is its intelligent caching mechanism.

Cached data reduces unnecessary API requests and improves application responsiveness while ensuring data remains fresh.

## Best Practices

- Use meaningful query keys.
- Configure stale and cache times appropriately.
- Invalidate queries after successful mutations.
- Keep query functions focused and reusable.
- Use DevTools during development for debugging.

## Conclusion

React Query simplifies server-state management by providing efficient data fetching, caching, synchronization, and mutation handling. By adopting React Query, developers can build faster, more responsive, and maintainable React applications with significantly less boilerplate code.
`,

  tags: [
    "React",
    "React Query",
    "TanStack Query",
    "Data Fetching",
    "Caching",
    "Frontend",
    "Web Development",
  ],

  mediumUrl:
    "https://medium.com/@afrinashar8/all-about-react-query-4b5e228df433",
},
{
  id: "create-react-js-project",

  title: "Create React JS Project",

  category: "React",

  cover:
    "data:image/webp;base64,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",

  date: "2024-10-12",

  readTime: "1 min read",

  excerpt:
    "A quick guide to creating your first React.js project using Create React App. Learn the basic setup, project structure, and how to start building React applications in minutes.",

  content: `
# Create React JS Project

React is one of the most popular JavaScript libraries for building modern user interfaces. Getting started with a React project is simple using Create React App, which provides a pre-configured development environment.

This guide walks through the basics of creating and running your first React application.

## What is Create React App?

Create React App (CRA) is an official tool that bootstraps a React application with zero configuration. It sets up everything needed for development, including Webpack, Babel, and development scripts.

## Creating a React Project

Creating a new React project requires only a single command.

Once the project is created, install dependencies (if needed) and start the development server to begin building your application.

## Project Structure

A typical Create React App project contains:

- public/
- src/
- App.js
- index.js
- package.json

Understanding the project structure helps developers organize components and application logic efficiently.

## Running the Application

The development server provides:

- Hot reloading
- Fast refresh
- Development build
- Automatic browser updates

This makes development faster and more productive.

## Why Use React?

React offers several advantages:

- Component-based architecture
- Virtual DOM for better performance
- Reusable UI components
- Strong ecosystem
- Excellent community support

## Best Practices

- Organize components into folders.
- Keep components small and reusable.
- Separate business logic from UI.
- Follow consistent naming conventions.
- Use functional components and Hooks.

## Conclusion

Create React App provides an easy way to start building React applications without worrying about configuration. It allows developers to focus on learning React concepts and creating interactive user interfaces quickly and efficiently.
`,

  tags: [
    "React",
    "Create React App",
    "JavaScript",
    "Frontend",
    "Web Development",
    "ReactJS",
    "Beginner",
  ],

  mediumUrl:
    "https://medium.com/@afrinashar8/1-install-node-js-and-npm-3bfc3f8d0fc8",
}
];