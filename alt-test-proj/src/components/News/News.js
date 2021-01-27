import React from 'react';
import injectSheet from 'react-jss';
import { Button, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import { style } from './style';

const News = ({ classes, ...props }) => {
	const paginator = (
		<table className={classes.table}>
			<tbody>
				<tr className={classes.row}>
					<td className={classes.leftCell}>
						{props.page ? (
							<Button variant="outlined" className={classes.btn} onClick={props.prevPage} disabled={props.loader}>
								Prev
							</Button>
						) : null}
					</td>
					<td className={classes.centralCell}>
						<span>
							Page:&nbsp;<span>{props.page ? props.page / 10 + 1 : props.page + 1}</span>
						</span>
					</td>
					<td className={classes.rightCell}>
						{props.page / 10 === 9 ? null : (
							<Button variant="outlined" className={classes.btn} onClick={props.nextPage} disabled={props.loader}>
								Next
							</Button>
						)}
					</td>
				</tr>
			</tbody>
		</table>
	);
	// The ridiculous logic of the disappearance of the "next" button is used
	// because we cannot find out the total number of news without downloading all
	// at once from the server, so it's hard to do common paginator in this case.

	return (
		<section>
			{paginator}
			{!props.loader ? (
				<div className={classes.newsList}>
					{props.news.map(e => (
						<Post title={e.title} body={e.body} userId={e.userId} key={e.id} />
					))}
				</div>
			) : (
				<div className={classes.spiner}>
					<CircularProgress />
				</div>
			)}
		</section>
	);
};

export default injectSheet(style)(News);
