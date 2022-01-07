import { nanoid } from "nanoid";
import React, { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";
import "./form1.css";
interface Data {
	name: string;
	email: string;
	phone: string;
	id: string;
}
function Form1(Data: any) {
	const [input, setInput] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [update, setUpdate] = useState(false);
	const [data, setData] = useState<Data[]>([]);
	const [offset, setOffset] = useState(0);
	const [pageCount, setPageCount] = useState(0);
	const [sort, setSort] = useState(true);
	const [search, setSerach] = useState("");
	const [perPage] = useState(2);
	const handlePageClick = (e: any) => {
		const selectedPage = e.selected;
		setOffset(selectedPage + 1);
	};

	const submitHandler = (e: any) => {
		e.preventDefault();
		console.log(input, "input");
		setData((prev: any) => [
			...prev,
			{
				...input,
				id: nanoid(),
			},
		]);
		console.log(data, "data");
		setPageCount(Math.ceil(data.length / perPage));
	};
	const onChange = (e: any) => {
		setSerach(e.target.value);
		setPageCount(Math.ceil(data.length / perPage));
	};
	const del = (id: any) => {
		let index = data.findIndex((val: any) => val.id == id);
		let newData = data.filter((val: any) => val.id !== id);
		setData(newData);
		setUpdate(false);
	};
	return (
		<div>
			<div>
				Search:
				<input type="text" placeholder="...Search" onChange={onChange} />
			</div>

			<form action="" onSubmit={submitHandler}>
				Name:
				<input
					type="text"
					placeholder="name"
					name="name"
					value={input.name}
					onChange={(e: any) => {
						setInput((prev: any) => ({
							...prev,
							name: e.target.value,
						}));
					}}
				/>
				<br />
				Email:
				<input
					type="text"
					placeholder="Email"
					name="email"
					value={input.email}
					onChange={(e: any) => {
						setInput((prev: any) => ({
							...prev,
							email: e.target.value,
						}));
					}}
				/>
				<br /> Phone:
				<input
					type="text"
					placeholder="phone"
					name="phone"
					value={input.phone}
					onChange={(e: any) => {
						setInput((prev: any) => ({
							...prev,
							phone: e.target.value,
						}));
					}}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>

			<div>
				<table>
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data
							.filter((val: any) => {
								if (search == "") {
									return val;
								} else if (
									val.name.toLowerCase().includes(search.toLowerCase())
								) {
									return val;
								}
							})
							.slice(offset, offset + perPage)
							.map((val: any) => (
								<tr key={val.id}>
									<td>{val.id}</td>
									<td>{val.name}</td>
									<td>{val.email}</td>
									<td>{val.phone}</td>
									<td>
										{/* <button onClick={}>Edit</button> */}
										<button
											onClick={(e: any) => {
												del(val.id);
											}}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
				<Fragment>
					<ReactPaginate
						pageCount={pageCount}
						onPageChange={handlePageClick}
						className={"pagination"}
						activeClassName={"active"}
					/>
				</Fragment>
			</div>
		</div>
	);
}
export default Form1;
