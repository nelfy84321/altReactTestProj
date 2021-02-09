export const style = {
	table: {
		width: '100%',
	},

	row: {
		width: '100%',
	},

	leftCell: {
		textAlign: 'right',
		width: '45%',
	},

	centralCell: {
		width: '10%',
		textAlign: 'center',
	},

	rightCell: {
		width: '45%',
	},

	btn: {
		margin: '0px 10px',
	},

	spiner: {
		marginTop: 20,
		display: 'flex',
		justifyContent: 'center',
	},

	newsList: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridColumnGap: 10,
		gridRowGap: 10,
	},

	'@media screen and (max-width: 600px)': {
		newsList: {
			gridTemplateColumns: '1fr',
		},
	},
};
