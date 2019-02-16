import React from 'react';
import { PropTypes } from 'prop-types';
import { MdStarHalf } from 'react-icons/md/';
import { MdStars } from 'react-icons/md/';
import { MdStar } from 'react-icons/md/';
import { MdHighlightOff } from 'react-icons/md/';
export const Highlight = ({ data, visibility, addFavorite, removeFavorite }) => {

	
	const addToFavorites = () => {
		addFavorite(data);
	};

	const removeFromFavorites = () => {
		removeFavorite(data);
	};

	if (visibility.highlight) {
		return (
			<section>
				<h2>{data.title}</h2>
				<h3>{(data.authors) ? <span>by</span> : null}{data.authors}</h3>
				
				<div>
					<span>{data.publisher}</span>
					<span>{data.publishedDate}</span>
				</div>
				<hr/>
				<div>
					{!visibility.favorites ? 
						<button onClick={() => addToFavorites()}><MdStar /> Favorite</button> : 
						<button onClick={() => removeFromFavorites()}><MdHighlightOff /> Remove</button>}
					{(data.price) ? <a href={data.purchase}> Buy ${data.price}</a> : null}
				</div>
			</section>
		)
	} else {
		return null;
	}
};


Highlight.propTypes = {
	data: PropTypes.object
}