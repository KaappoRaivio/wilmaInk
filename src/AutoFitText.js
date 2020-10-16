import React, { useEffect, useState } from "react";

const AutoFitText = ({ initialFontSize, children, className, onFontSizeFound, uniformFontSize }) => {
	const [isExecuting, setExcecuting] = useState(true);
	const [target, _] = useState(React.createRef());
	const [actual, __] = useState(React.createRef());

	const [fontSize, setFontSize] = useState(initialFontSize);

	if (uniformFontSize) {
		if (isExecuting) {
			setExcecuting(false);
		}
		if (target.current && actual.current) {
			target.current.style.fontSize = `${uniformFontSize}px`;
			actual.current.style.fontSize = `${uniformFontSize}px`;
		}
	}

	useEffect(() => {
		const currentTarget = target.current;
		const currentActual = actual.current;

		if (currentActual && currentTarget && isExecuting) {
			let offset = currentTarget.offsetHeight - currentActual.offsetHeight;
			if (offset < 0) {
				// setFontSize(Math.max(fontSize + offset / 100, 0));
				setFontSize(Math.max(fontSize - 0.1, 0));
			} else {
				console.log("Size found!");
				setExcecuting(false);
				onFontSizeFound(fontSize);
			}
			currentTarget.style.fontSize = `${fontSize}px`;
		}
	}, [actual, fontSize, target, isExecuting, onFontSizeFound]);

	return (
		<div style={{ visibility: isExecuting ? "hidden" : "visible" }} className={className} ref={target}>
			<span ref={actual}>{children}</span>
		</div>
	);
};

AutoFitText.propTypes = {};

export default AutoFitText;
