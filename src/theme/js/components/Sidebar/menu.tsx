import React from 'react';
import { Badge } from 'react-bootstrap';

export interface IMenuItem {
	name: string;
	icon: string;
	path?: string;
	opened?: boolean;
	badge?: React.FC<{}>;
	children?: Array<IMenuItem>;
}

export const menu: Array<IMenuItem> = [
	{
		name: 'Home',
		path: '/',
		icon: 'fas fa-home',
		badge: () => (
			<Badge className="right" variant="danger">
				New
			</Badge>
		),
	},
	{
		name: 'Pages',
		icon: 'fas fa-book',
		badge: () => (
			<Badge className="right" variant="primary">
				New
			</Badge>
		),
		children: [
			{
				name: 'Page1',
				path: '/page1',
				icon: 'far fa-circle',
			},
			// {
			// 	name: 'Page2',
			// 	path: '/page2',
			// 	icon: 'far fa-circle',
			// },
			// {
			// 	name: 'Page3',
			// 	path: '/page3',
			// 	icon: 'far fa-circle',
			// },
			// {
			// 	name: 'Page1',
			// 	path: '/page1',
			// 	icon: 'far fa-circle',
			// },
			// {
			// 	name: 'Page1',
			// 	path: '/page1',
			// 	icon: 'far fa-circle',
			// },
		],
	},
	{
		name: 'Pages',
		icon: 'fas fa-book',
		children: [
			{
				name: 'Page2',
				path: '/page2',
				icon: 'far fa-circle',
			},
			// {
			// 	name: 'Page3',
			// 	path: '/page3',
			// 	icon: 'far fa-circle',
			// },
		],
	},
	{
		name: 'Pages',
		icon: 'fas fa-book',
		children: [
			{
				name: 'Page3',
				path: '/page3',
				icon: 'far fa-circle',
			},
		],
	},
];

export const mapRoutes = (
	item: IMenuItem,
	route: string,
): { matched: boolean; item: IMenuItem } => {
	const items = item.children?.reduce(
		(
			{ matched, items }: { matched: boolean; items: Array<IMenuItem> },
			item,
		) => {
			const t = mapRoutes(item, route);
			return {
				matched: matched || t.matched,
				items: [...items, t.item],
			};
		},
		{ matched: false, items: [] },
	);
	const matched = route === item.path || items?.matched || false;
	return {
		matched,
		item: {
			...item,
			opened: matched,
			children: items?.items,
		},
	};
};
