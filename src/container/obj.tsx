import React, { useState } from "react";
interface Data {
	id: number;
	name: string;
	age: number;
}
export default function Obj(Data: any) {
	var [data, setData] = useState<any>([
		{ id: 1, name: "sudharahan", age: 24 },
		{ id: 2, name: "mohan", age: 24 },
		{ id: 3, name: "revanth", age: 24 },
	]);
	let [index1, setIndex1] = useState(0);
	let [index2, setIndex2] = useState<Data[]>([]);

	const data1 = async () => {
		await setIndex1((prev) => prev + 1);
		console.log(index1);
		setIndex2(data[index1]);
	};
	const data2 = async () => {
		await setIndex1((prev) => prev - 1);
		console.log(index1);
	};

	return (
		<div>
			<div className="card">
				{data &&
					data
						.filter((val: any) => {
							if (val.id === index1) {
								return val;
							}
						})
						.map((val: any) => (
							<div>
								<p>{val.name}</p>
								<p>{val.age}</p>
							</div>
						))}
			</div>
			<button onClick={data2} disabled={index1 == 1 ? true : false}>
				{" "}
				Prev
			</button>
			<button onClick={data1} disabled={index1 == 3 ? true : false}>
				{" "}
				Next
			</button>
		</div>
	);
}
