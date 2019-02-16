import PropTypes from 'prop-types';
import React from 'react';

export const DashBoard = ({type, query, queryObject}) => {
	
	let _type, _query;

	const submit = (e) => {
		e.preventDefault();
		queryObject({
			type: _type.value,
			query: _query.value
		});
	};

	const categoryChange = () => {
	}

	return(
		<nav>
		<header>
			<h1>NYT Google Books</h1>
		</header>
		<form onSubmit={submit}>
			<select 
						  defaultValue={type} 
						  ref={option => _type = option}>
				<option onClick={() => categoryChange()} value="q=intitle:">Title</option>
				<option onClick={() => categoryChange()} value="q=inauthor:">Author</option>
				<option onClick={() => categoryChange()} value="q=subject:">Subject</option>
			</select>
			<input 
			       type="text" 
			       defaultValue={query} 
			       ref={input => _query = input}
			       placeholder="Enter search terms"
			       autoFocus/>
			<input type="submit"
						 value="Search"/>
		</form>
		</nav>
	)
}

DashBoard.propTypes = {
	type: PropTypes.string,
	query: PropTypes.string
};