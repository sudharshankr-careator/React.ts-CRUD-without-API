import React, { useState } from "react";
export default function Form() {
	const [input, setInput] = useState<any>({
		fname: "",
		lname: "",
	});
	const submit = (e: any) => {
		e.preventDefault();
		console.log(input);
	};
	return (
		<div>
			<h1>form</h1>
			<form action="" onSubmit={submit}>
				<div>
					Fname:
					<input
						type="text"
						name="fname"
						onChange={(e: any) => {
							setInput((prevFname: any) => ({
								...prevFname,
								fname: e.target.value,
							}));
						}}
						value={input.fname}
					/>
				</div>
				<div>
					{" "}
					Lname:
					<input
						type="text"
						name="lname"
						onChange={(e: any) => {
							setInput((prevLname: any) => ({
								...prevLname,
								lname: e.target.value,
							}));
						}}
						value={input.lname}
					/>
				</div>
				<button>submit</button>
			</form>
		</div>
	);
}
