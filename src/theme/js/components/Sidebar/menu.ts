export interface IMenuItem {
	name: string;
	icon: string;
	path?: string;
	opened?: boolean;
	children?: Array<IMenuItem>;
}

export const menu: Array<IMenuItem> = [
	{
		name: 'Home',
		path: '/',
		icon: 'far fa-home',
		opened: true,
	},
	{
		name: 'Pages',
		icon: 'fas fa-book',
		children: [
			{
				name: 'Home',
				path: '/',
				icon: 'far fa-circle',
			},
			{
				name: 'Home',
				path: '/',
				icon: 'far fa-circle ',
			},
		],
	},
];
