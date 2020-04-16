import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const shineStyle = {
	position: "absolute",
	left: "0",
	top: "0",
	pointerEvents: "none",
	width: "400px",
	height: "400px",
	background:
		"radial-gradient(circle closest-side, rgba(125, 125, 125, 0.5), transparent )",
	transform: "translate(-50%, -50%)"
};

const ButtonShine = ({
	children,
	onMouseMove,
	onMouseEnter,
	onMouseLeave,
	as,
	style,
	...props
}) => {
	const [mouse, setMouse] = useState([0, 0, false]);
	const [mx, my, isMouseActive] = mouse;
	const Component = as;

	const mouseProps = {
		onMouseMove(e, ...args) {
			const { offsetTop, offsetLeft } = e.currentTarget;
			setMouse([e.pageX - offsetLeft, e.pageY - offsetTop, true]);

			return onMouseMove(e, ...args);
		},
		onMouseEnter(...args) {
			setMouse([mx, my, true]);

			return onMouseEnter(...args);
		},
		onMouseLeave(...args) {
			setMouse([mx, my, false]);

			return onMouseLeave(...args);
		}
	};

	const buttonStyle = {
		...style,
		position: "relative",
		overflow: "hidden",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	};

	return (
		<Component {...props} {...mouseProps} style={buttonStyle}>
			<AnimatePresence>
				{isMouseActive && (
					<motion.div
						key="button-shine"
						style={{
							position: "absolute",
							left: "0",
							top: "0"
						}}
						initial={{
							opacity: 0
						}}
						animate={{
							x: mx,
							y: my,
							opacity: 1
						}}
						exit={{
							opacity: 0
						}}
					>
						<div style={shineStyle} />
					</motion.div>
				)}
			</AnimatePresence>
			<span style={{ display: "block", position: "relative", zIndex: "5" }}>
				{children}
			</span>
		</Component>
	);
};

ButtonShine.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired,
	as: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]),
	style: PropTypes.object,
	onMouseMove: PropTypes.func,
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func
};

ButtonShine.defaultProps = {
	as: "button",
	style: {},
	onMouseMove() {},
	onMouseEnter() {},
	onMouseLeave() {}
};

export default ButtonShine;
