import React from "react";

export default function Pattersns() {
	let arr = "";
	for (let a = 1; a <= 5; a++) {
		for (let i = a; i <= a; i--) {
			arr += " ";
		}
		for (let j = 1; j <= a; j++) {
			arr += "*";
		}

		arr += "\n";
	}
	var st = "";
	for (let i = 5; i >= 1; i--) {
		for (let j = 5; j > i; j--) {
			st += " ";
		}
		for (let k = 1; k <= i; k++) {
			st += "*";
		}

		st += "\n";
	}
	console.log(st);
	return <div></div>;
}
