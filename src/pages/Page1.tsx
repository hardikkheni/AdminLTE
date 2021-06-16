import { FC } from 'react';
import { Card } from 'react-bootstrap';

import DataTable from '../theme/js/components/DataTable';

const Page1: FC = () => {
	const data = [
		{
			name: 'bulbasouras',
			super_type: 'fire',
			sub_types: ['water', 'normal'],
			hp: 100,
			types: ['wild', 'unknown'],
		},
		{
			name: 'pokemon',
			super_type: 'electric',
			sub_types: ['earth', 'normal'],
			hp: 100,
			types: ['wild', 'unknown'],
		},
	];
	return (
		<Card className="card-primary">
			<Card.Header>Title</Card.Header>
			<Card.Body>
				<DataTable
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
					row={({ name, id, sub_types, super_type, types, hp }) => (
						<tr>
							<td>{id}</td>
							<td>{name}</td>
							<td>{super_type}</td>
							<td>{sub_types.join(`, `)}</td>
							<td>{hp}</td>
							<td>{types.join(`, `)}</td>
						</tr>
					)}
					data={data}
				/>
			</Card.Body>
			<Card.Footer>Footer</Card.Footer>
		</Card>
	);
};

export default Page1;
