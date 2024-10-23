# Quick React Hooks
A collection of reusable and easy-to-use React hooks designed to simplify common tasks in React applications.

## Installation
You can install the package via npm:

```
  npm install quick-react-hooks
```
or via yarn:

```
 yarn add quick-react-hooks
```

## useMediaQueryScreen
A hook to detect and manage responsive screen changes based on predefined breakpoints.

### Example
```
import React from 'react';
import { useMediaQueryScreen } from 'quick-react-hooks';

function MyComponent() {
  const { screen, screenProps } = useMediaQueryScreen();

  return (
    <div>
      <h1>Current Screen: {screen}</h1>
      <p>Is Small Screen? {screenProps.is_small ? 'Yes' : 'No'}</p>
      <p>Is Medium Screen? {screenProps.is_medium ? 'Yes' : 'No'}</p>
      <p>Is Large Screen? {screenProps.is_large ? 'Yes' : 'No'}</p>
      <p>Is Large Plus Screen? {screenProps.is_largeplus ? 'Yes' : 'No'}</p>
    </div>
  );
}

```
### Breakpoints and Supported Screens
The hook `useMediaQueryScreen` uses the following breakpoints:
- small: (max-width: 671px)
- medium: (min-width: 672px) and (max-width: 979px)
- large: (min-width: 980px) and (max-width: 1259px)
- largeplus: (min-width: 1260px)

## useElementHeight
A custom React hook that returns the height of a referenced HTML element. It updates the height whenever the element's size changes.

### Example
```
import React, { useRef } from "react";
import { useElementHeight } from "quick-react-hooks";

const App = () => {
  const elementRef = useRef(null);
  const height = useElementHeight(elementRef);

  return (
    <div>
      <div ref={elementRef} style={{ padding: "20px", border: "1px solid black" }}>
        This is a resizable element. Try changing its size and see the height update!
      </div>
      <p>The height of the element above is: {height}px</p>
    </div>
  );
};
```


## useVisible
The `useVisible` hook is a custom React hook designed to detect the visibility of a target element within the viewport (or a specified container). It leverages the Intersection Observer API, which efficiently monitors the visibility of elements as they enter or exit the viewport.

### Example
```
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

## License

This project is licensed under the MIT License - see the LICENSE file for details.
