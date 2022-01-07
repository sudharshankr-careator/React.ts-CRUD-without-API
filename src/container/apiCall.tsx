import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApiCall() {
	let [data, setData] = useState([]);
	let [search, setSearch] = useState("");
	var url = "https://jsonplaceholder.typicode.com/users";
	let call = async () => {
		await axios
			.get(url)
			.then((res) => setData(res.data))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		call();
	}, []);
	console.log(data);
	return (
		<div>
			<label htmlFor="" style={{ fontWeight: "900" }}>
				{" "}
				Search :
				<input
					style={{ border: "2" }}
					type="text"
					placeholder="...search"
					onChange={(e: any) => setSearch(e.target.value)}
				/>
			</label>
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>email</th>
						<th>address</th>
						<th>website</th>
						<th>username</th>
						<th></th>
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
						.map((value: any) => (
							<tr key={value.id}>
								<td>{value.name}</td>
								<td>{value.email}</td>
								<td>{value.address.geo.lat + " " + value.address.geo.lng}</td>
								<td>{value.website}</td>
								<td>{value.username}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
