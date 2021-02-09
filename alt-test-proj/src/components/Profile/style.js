export const style = {
	form: {
		width: '100%',
		display: 'flex',
		margin: '20px 0',
	},

	field: {
		fontSize: '16px',
		flexGrow: 1,
		marginRight: '10px',
		padding: '5px 10px',
		outlineStyle: 'none',
		border: 'none',
		borderBottom: '2px solid rgb(228, 228, 228)',
		borderRadius: '2px',
	},

	'.addBtn, .crossBtn': {
		border: 'none',
		borderRadius: '4px',
		cursor: 'pointer',
	},

	'.addBtn:hover, .crossBtn:hover': {
		backgroundColor: 'rgb(212, 211, 211)',
	},

	post: {
		display: 'flex',
		justifyContent: 'space-between',
		border: '1px solid #ccc',
		margin: '10px 0',
		padding: '4px',
		backgroundColor: '#fffafa',
		borderRadius: '2px',
	},
};
