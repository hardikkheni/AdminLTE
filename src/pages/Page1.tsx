import { FC } from 'react';
import { Card } from 'react-bootstrap';
import data from '../theme/js/components/DataTable/dummy_data';

import DataTable from '../theme/js/components/DataTable';

const Page1: FC = () => {
	return (
		<Card className="card-primary">
			<Card.Header>Title</Card.Header>
			<Card.Body>
				<DataTable<{
					name: string;
					supertype: string;
					subtypes: string[];
					hp: number;
					types?: string[];
				}>
					// ssr
					header={() => (
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Super Type</th>
								<th>Sub Types</th>
								<th>HP</th>
								<th>Types</th>
							</tr>
						</thead>
					)}
					row={({ name, id, subtypes, supertype, types, hp }) => (
						<tr>
							<td>{id}</td>
							<td>{name}</td>
							<td>{supertype}</td>
							<td>{subtypes.join(`, `)}</td>
							<td>{hp}</td>
							<td>{types?.join(`, `)}</td>
						</tr>
					)}
					data={data}
					// apiCallBack={async ({ page, length, order }) => {
					// 	const res = await fetch(
					// 		'https://api.pokemontcg.io/v2/cards?page=' +
					// 			page +
					// 			'&pageSize=' +
					// 			length,
					// 		{
					// 			headers: {
					// 				'X-Api-Key': 'f50ae3c3-c2a9-46dc-8109-17ad4df52254',
					// 			},
					// 			method: 'GET',
					// 		},
					// 	);
					// 	const data: {
					// 		data: Array<{
					// 			name: string;
					// 			supertype: string;
					// 			subtypes: string[];
					// 			hp: number;
					// 			types?: string[];
					// 		}>;
					// 		totalCount: number;
					// 	} = await res.json();

					// 	return {
					// 		data: data.data,
					// 		page,
					// 		length,
					// 		total: data.totalCount,
					// 		order,
					// 	};
					// }}
				/>
			</Card.Body>
			<Card.Footer>Footer</Card.Footer>
		</Card>
	);
};

export default Page1;
