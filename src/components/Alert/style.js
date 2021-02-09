export const style = {
	alert: {
		position: 'absolute',
		bottom: '2vh',
		left: '1vw',
		minWidth: 300,
		width: 'fit-content',
		height: 50,
		backgroundColor: 'rgb(243, 226, 128)',
		fontWeight: 600,
		fontSize: 14,
		display: 'flex',
		alignItems: 'center',
		borderRadius: 5,
	},

	closeButton: {
		position: 'absolute',
		top: 5,
		right: 5,
		padding: '3px 5px',
		border: 'none',
		borderRadius: 5,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		outlineStyle: 'none',

		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.3)',
		},
	},

	text: {
		margin: '0 25px 0 10px',
	},
};
