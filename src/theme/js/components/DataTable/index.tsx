import {
	ChangeEvent,
	FC,
	ReactNode,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { InputGroup, Pagination, Table } from 'react-bootstrap';

export type DataTableOptions<T = {}> = {
	page: number;
	length: number;
	total: number;
	data: Array<T>;
	order: [string, 'ASC' | 'DESC'];
};

export type DataTableProps<T = {}> = {
	ssr?: boolean;
	data?: Array<T>;
	children?: ReactNode;
	header?: FC;
	apiCallBack?: (
		data: Omit<DataTableOptions<T>, 'data' | 'total'>,
	) => Promise<DataTableOptions<T>>;
	row: FC<T & { id: number }>;
};

const DataTable = <T,>({
	ssr = false,
	children,
	data,
	row: Row,
	header: Header,
	apiCallBack,
}: DataTableProps<T>) => {
	const lengths = [
		{ label: '10', value: 10 },
		{ label: '20', value: 20 },
		{ label: '50', value: 50 },
	];
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState<DataTableOptions<T>>({
		page: 1,
		length: 10,
		total: data?.length || 0,
		data: data || [],
		order: ['id', 'ASC'],
	});

	useEffect(() => {
		if (!!ssr && apiCallBack) {
			setLoading(true);
			apiCallBack({
				page: state.page,
				length: state.length,
				order: state.order,
			}).then((e) => {
				setLoading(false);
				setState(e);
			});
		}
	}, [setState, apiCallBack, ssr, state.page, state.length, state.order]);

	const tableInfo = useMemo(() => {
		const totalPage = Math.ceil(state.total / state.length);

		const handlePageChange = (page: number) => {
			if (!!ssr && apiCallBack) {
				setLoading(true);
				apiCallBack({
					page: page,
					length: state.length,
					order: state.order,
				}).then((e) => {
					setLoading(false);
					setState(e);
				});
			} else {
				setState({ ...state, page });
			}
		};

		const pages = (
			<>
				<Pagination.First
					onClick={() => handlePageChange(1)}
					disabled={state.page === 1}
				/>
				<Pagination.Prev
					onClick={() => handlePageChange(state.page - 1)}
					disabled={state.page === 1}
				/>
				<input
					type="number"
					value={state.page}
					style={{ textAlign: 'center', width: 125 }}
					onChange={(e) => {
						let page = parseInt(e.target.value) || 0;
						if (page < 1) {
							page = 1;
						}
						if (page > totalPage) {
							page = totalPage;
						}
						handlePageChange(page);
					}}
				/>
				<Pagination.Item disabled>of {totalPage}</Pagination.Item>
				<Pagination.Next
					onClick={() => handlePageChange(state.page + 1)}
					disabled={state.page === totalPage}
				/>
				<Pagination.Last
					onClick={() => handlePageChange(totalPage)}
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
	}, [state, ssr, apiCallBack]);

	const handleLengthChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const length = parseInt(e.target.value) || 10;
		if (!!ssr && apiCallBack) {
			setLoading(true);
			apiCallBack({
				page: 1,
				length: length,
				order: state.order,
			}).then((e) => {
				setLoading(false);
				setState(e);
			});
		} else {
			setState({ ...state, page: 1, length });
		}
	};

	return (
		<div className="overlay-wrapper">
			{loading && (
				<div className="overlay">
					<i className="fas fa-3x fa-sync-alt fa-spin"></i>
				</div>
			)}
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text>Show</InputGroup.Text>
				</InputGroup.Prepend>
				<select defaultValue={state.page} onChange={handleLengthChange}>
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
			<Pagination className="float-right">{tableInfo.pages}</Pagination>
		</div>
	);
};

export default DataTable;
