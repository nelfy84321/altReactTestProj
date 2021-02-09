export const style = {
	header: {
		marginBottom: 25,
	},

	title: {
		textAlign: 'center',
	},

	logoutBtn: {
		visibility: props => (!props.auth ? 'hidden ' : 'visible '),
	},

	navbar: {
		display: 'flex',
		justifyContent: 'space-around',
		fontSize: 24,

		'& > :nth-child(2n)': {
			margin: '0 30px',
		},
	},

	link: {
		textDecoration: 'none',
	},

	active: {
		fontWeight: 700,
	},
};
