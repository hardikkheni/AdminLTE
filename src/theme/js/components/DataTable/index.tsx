import { FC, ReactNode, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';

export type DataTableProps<T = {}> = {
	ssr?: boolean;
	data: Array<T>;
	children?: ReactNode;
	header?: FC;
	row: FC<T & { id: number }>;
};

const DataTable = <T,>({
	ssr = false,
	children,
	data,
	row: Row,
	header: Header,
}: DataTableProps<T>) => {
	const [state, setState] = useState<{
		page: number;
		length: number;
		order: [string, 'ASC' | 'DESC'];
	}>({
		page: 1,
		length: 10,
		order: ['id', 'ASC'],
	});
	const tableInfo = useMemo(() => {
		return {
			rows: ssr
				? data.map((e, i) => ({ ...e, id: i + 1 }))
				: data
						.slice(state.page * state.length - state.length, state.length)
						.map((e, i) => ({ ...e, id: i + 1 })),
		};
	}, [data, state, ssr]);
	return (
		<>
			<Table striped bordered hover>
				{Header ? (
					<Header />
				) : (
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
				<tbody>
					{tableInfo.rows.map((item, i) => (
						<Row key={i} {...item} />
					))}
				</tbody>
			</Table>
		</>
	);
};

export default DataTable;
