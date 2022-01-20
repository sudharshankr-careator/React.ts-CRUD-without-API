import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import React, { useState } from "react";

interface Ty {
	name: string;
	email: string;
	id: string;
}
export default function Form() {
	const [input, setinput] = useState({
		id: "",
		name: "",
		email: "",
	});

	const [data, setdata] = useState<Ty[]>([]);
	const [update, setupdate] = useState(true);

	const [id, setid] = useState("");
	const val = (e: any) => {
		setinput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const submitHandler = (e: any) => {
		e.preventDefault();
		{
			update == true
				? setdata((prev: any) => [...prev, { ...input, id: nanoid() }])
				: setdata((prev) =>
						prev.map((val) =>
							val.id == id
								? { ...val, name: input.name, email: input.email }
								: val
						)
				  );
		}
		setinput({
			name: "",
			email: "",
			id: "",
		});
	};

	const delHandler = (id: any) => {
		data.findIndex((val: any) => val.id == id);
		let newData = data.filter((val: any) => val.id !== id);
		setdata(newData);
	};

	return (
		<div>
			<div>
				<h1></h1>

				<form action="" onSubmit={submitHandler}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={input.name}
						onChange={val}
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						value={input.email}
						onChange={val}
					/>
					<button type="submit">submit</button>
				</form>
			</div>
			<div>
				<table className="table table-bordered">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{data.map((val: any) => (
							<tr key={val.id}>
								<td>{val.id}</td>
								<td>{val.name}</td>
								<td>{val.email}</td>
								<td>
									<button
										onClick={() => (
											setinput({
												name: val.name,
												email: val.email,
												id: val.id,
											}),
											setupdate(false),
											setid(val.id)
										)}
									>
										Edit
									</button>
								</td>
								<td>
									<button
										onClick={(e: any) => {
											delHandler(val.id);
										}}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
