import React, { useState } from "react";

export default function Cal() {
	let [cal, setCal] = useState<any>([]);
	let [cal1, setCal1] = useState<any>(0);

	function evaluateMath(str: any) {
		for (var i = 0; i < str.length; i++) {
			if (isNaN(str[i]) && !["+", "-", "/", "*", "%", "**"].includes(str[i])) {
				return NaN;
			}
		}

		try {
			return eval(str);
		} catch (e: any) {
			if (e.name !== "SyntaxError") throw e;
			return NaN;
		}
	}
	const r = () => {
		console.log(evaluateMath(`cal`));
		console.log(cal);
		console.log(JSON.stringify(cal[cal.length - 1]));
	};
	let a = ["sudharshan"];
	console.log(...a);

	return (
		<div className="cal">
			<div className="screen">
				<p>{cal1}</p>
				{/* <p>{cal}</p> */}
			</div>
			{/* <button
				onClick={(e: any) =>
					setCal((prev: any) => ({
						...prev,
						9: 9,
					}))
				}
			>
				9
			</button>
			<button
				onClick={(e: any) =>
					setCal((prev: any) => ({
						...prev,
						8: 8,
					}))
				}
			>
				8
			</button>
			<button onClick={(e: any) => setCal(7)}>7</button>
			<button onClick={(e: any) => setCal("+")}>+</button>
			<br />
			<button onClick={(e: any) => setCal(6)}>6</button>
			<button onClick={(e: any) => setCal(5)}>5</button>
			<button onClick={(e: any) => setCal(4)}>4</button>
			<button onClick={(e: any) => setCal("-")}>-</button>
			<br />
			<button onClick={(e: any) => setCal(3)}>3</button>
			<button onClick={(e: any) => setCal(2)}>2</button>
			<button onClick={(e: any) => setCal(1)}>1</button>
			<br />
			<button onClick={(e: any) => setCal(0)}>0</button>
			<button onClick={(e: any) => setCal(".")}>.</button> */}
			<input
				type="text"
				onChange={(e: any) => {
					setCal((prev: any) => [...prev, e.target.value]);
				}}
			/>
			{/* {cal.map((val: any) => {
				// <p>{val}</p>
				setCal1(evaluateMath(val));
			})} */}
			<button onClick={r}> =</button>
		</div>
	);
}
