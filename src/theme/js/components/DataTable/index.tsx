import { FC, ReactNode, useMemo, useState } from 'react';
import { InputGroup, Pagination, Table } from 'react-bootstrap';

export type DataTableProps<T = {}> = {
	ssr?: boolean;
	data?: Array<T>;
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
	const lengths = [
		{ label: '10', value: 10 },
		{ label: '20', value: 20 },
		{ label: '50', value: 50 },
	];
	const [state, setState] = useState<{
		page: number;
		length: number;
		total: number;
		data: Array<T>;
		order: [string, 'ASC' | 'DESC'];
	}>({
		page: 1,
		length: 10,
		total: data?.length || 0,
		data: data || [],
		order: ['id', 'ASC'],
	});
	const tableInfo = useMemo(() => {
		const totalPage = Math.ceil(state.total / state.length);

		const pages = (
			<>
				<Pagination.First
					onClick={() => setState({ ...state, page: 1 })}
					disabled={state.page === 1}
				/>
				<Pagination.Prev
					onClick={() => setState({ ...state, page: state.page - 1 })}
					disabled={state.page === 1}
				/>
				<input
					type="number"
					value={state.page}
					onChange={(e) => {
						let page = parseInt(e.target.value) || 0;
						if (page < 1) {
							page = 1;
						}
						if (page > totalPage) {
							page = totalPage;
						}
						setState({ ...state, page });
					}}
				/>
				<Pagination.Item disabled>of {totalPage}</Pagination.Item>
				<Pagination.Next
					onClick={() => setState({ ...state, page: state.page + 1 })}
					disabled={state.page === totalPage}
				/>
				<Pagination.Last
					onClick={() => setState({ ...state, page: totalPage })}
					disabled={state.page === totalPage}
				/>
			</>
		);

		return {
			rows: !!ssr
				? state.data.map((e, i) => ({
						...e,
						id: state.length * (state.page - 1) + i + 1,
				  }))
				: state.data
						.slice(state.length * (state.page - 1), state.page * state.length)
						.map((e, i) => ({
							...e,
							id: state.length * (state.page - 1) + i + 1,
						})),
			pages,
		};
	}, [state, ssr]);
	return (
		<>
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text>Show</InputGroup.Text>
				</InputGroup.Prepend>
				<select
					defaultValue={state.page}
					onChange={(e) => {
						const length = parseInt(e.target.value) || 10;
						setState({ ...state, length });
					}}
				>
					{lengths.map((item, i) => (
						<option key={i} value={item.value}>
							{item.label}
						</option>
					))}
				</select>
				<InputGroup.Append>
					<InputGroup.Text>entries</InputGroup.Text>
				</InputGroup.Append>
			</InputGroup>
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
			<Pagination className="float-right mt-3">{tableInfo.pages}</Pagination>
		</>
	);
};

export default DataTable;
