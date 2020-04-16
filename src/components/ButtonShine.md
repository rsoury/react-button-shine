addButtonShine is a function that accepts a button component and returns a new button component that includes an animated shine.
```jsx
import React from "react";
import ButtonShine from "./ButtonShine";

const style = {
  minHeight: "44px",
	width: "100%",
	maxWidth: "320px",
	backgroundColor: "#000",
  color: "#fff",
  fontWeight: "900",
  fontSize: "14px",
  letterSpacing: "0.1em"
};

const SomeComponent = ({ children, ...props }) => (
	<button {...props}>
		<h1>{children}</h1>
	</button>
);

const App = () => {
	return (
		<>
			<ButtonShine style={style}>I'm a button</ButtonShine>
			<hr />
			<ButtonShine as="a" style={style}>I'm an anchor</ButtonShine>
			<hr />
			<ButtonShine as={SomeComponent} style={style}>I'm a component</ButtonShine>
		</>
	);
};

<App />;
```
