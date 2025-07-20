# Quick React Hooks

A collection of reusable and easy-to-use React hooks designed to simplify common tasks in React applications.

## Installation

You can install the package via npm:

```bash
npm install quick-react-hooks
```

or via yarn:

```bash
yarn add quick-react-hooks
```

## useMediaQueryScreen

A hook to detect and manage responsive screen changes based on predefined breakpoints.

### Example

```javascript
import React from "react";
import { useMediaQueryScreen } from "quick-react-hooks";

function MyComponent() {
  const { screen, screenProps } = useMediaQueryScreen();

  return (
    <div>
      <h1>Current Screen: {screen}</h1>
      <p>Is Small Screen? {screenProps.is_small ? "Yes" : "No"}</p>
      <p>Is Medium Screen? {screenProps.is_medium ? "Yes" : "No"}</p>
      <p>Is Large Screen? {screenProps.is_large ? "Yes" : "No"}</p>
      <p>Is Large Plus Screen? {screenProps.is_largeplus ? "Yes" : "No"}</p>
    </div>
  );
}
```

### Breakpoints and Supported Screens

The hook `useMediaQueryScreen` uses the following breakpoints:

- **small**: (max-width: 671px)
- **medium**: (min-width: 672px) and (max-width: 979px)
- **large**: (min-width: 980px) and (max-width: 1259px)
- **largeplus**: (min-width: 1260px)

## useElementHeight

A custom React hook that returns the height of a referenced HTML element. It updates the height whenever the element's size changes.

### Example

```javascript
import React, { useRef } from "react";
import { useElementHeight } from "quick-react-hooks";

const App = () => {
  const elementRef = useRef(null);
  const height = useElementHeight(elementRef);

  return (
    <div>
      <div
        ref={elementRef}
        style={{ padding: "20px", border: "1px solid black" }}
      >
        This is a resizable element. Try changing its size and see the height
        update!
      </div>
      <p>The height of the element above is: {height}px</p>
    </div>
  );
};
```

## useVisible

The `useVisible` hook is a custom React hook designed to detect the visibility of a target element within the viewport (or a specified container). It leverages the Intersection Observer API, which efficiently monitors the visibility of elements as they enter or exit the viewport.

### Example

```javascript
import React, { useRef } from "react";
import { useVisible } from "quick-react-hooks";

const App = () => {
  const targetRef = useRef(null);
  const isVisible = useVisible({ targetRef });

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h1>Scroll down to see the target element</h1>
      <div style={{ height: "100vh", background: "#f0f0f0" }} />
      <div
        ref={targetRef}
        style={{
          height: "100px",
          background: isVisible ? "green" : "red",
          transition: "background-color 0.3s",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          color: "#fff",
        }}
      >
        {isVisible ? "I am visible!" : "I am not visible!"}
      </div>
      <div style={{ height: "100vh", background: "#f0f0f0" }} />
    </div>
  );
};

export default App;
```

## useAsync

A lightweight React hook for managing asynchronous operations, such as API calls, with support for dynamic arguments. It simplifies handling loading states, data, and errors in your React components.

### Usage

Import `useAsync` from the `quick-react-hooks` package and use it to manage an async function. The hook provides a manual `execute` function to trigger the async operation with any number of arguments.

```javascript
import { useAsync } from "quick-react-hooks";

// Example async function
const fetchData = async (id) => {
  const response = await fetch(`https://api.example.com/data/${id}`);
  return response.json();
};

// In your component
function MyComponent() {
  const { data, error, loading, execute } = useAsync(fetchData, []);

  const handleClick = () => {
    execute(123); // Trigger async function with an argument
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### API

#### `useAsync(asyncFn, deps)`

##### Parameters

- **`asyncFn`**: An asynchronous function (returning a Promise) to be executed (e.g., an API call).
- **`deps`** (optional): An array of dependencies for memoizing the `execute` function. Defaults to `[]`.

##### Returns

An object with the following properties:

- **`data`**: The result of the async function (initially `null`).
- **`error`**: Any error thrown during the async operation (initially `null`).
- **`loading`**: A boolean indicating if the async operation is in progress.
- **`execute`**: A memoized function to manually trigger the async operation, accepting any number of arguments to pass to `asyncFn`.

### Example

```javascript
import { useAsync } from "quick-react-hooks";

const fetchUser = async (userId) => {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  return response.json();
};

function UserProfile() {
  const { data, error, loading, execute } = useAsync(fetchUser, []);

  return (
    <div>
      <button onClick={() => execute(123)}>Load User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
```

### Features

- **Dynamic Arguments**: Pass any number of arguments to the async function via `execute`.
- **Manual Execution**: Trigger async operations explicitly (e.g., on user actions like button clicks).
- **State Management**: Automatically tracks `loading`, `data`, and `error` states.
- **Memoization**: Uses `useCallback` to optimize performance with dependency tracking.
- **Error Handling**: Captures and exposes errors for easy handling in components.

### Notes

- The `execute` function returns the async result or throws an error, enabling promise chaining or further processing.
- Ensure `asyncFn` returns a Promise to work correctly with the hook.
- Use the `deps` array to control when the `execute` function is recreated, similar to `useCallback`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
