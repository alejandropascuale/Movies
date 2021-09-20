import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';


function ContentRowTop () {

	const dataToRender = [
		{
			title: 'movies in data base',
			border: 'border-left-primary',
			text: 'text-primary',
			quantity: 21,
			icon: 'fa-film'
		},
		{
			title: 'total awards',
			border: 'border-left-success',
			text: 'text-success',
			quantity: 79,
			icon: 'fa-award'
		},
		{
			title: 'actors quantity',
			border: 'border-left-warning',
			text: 'text-warning',
			quantity: 49,
			icon: 'fa-user'
		}
	]

    return (

		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
		
			< ContentRowMovies titulo="Movies in Data Base" data = {dataToRender}/>
			
			<div className="row">
			
				< LastMovieInDb />

				< GenresInDb />
			
			</div>
		</div>
    );
}

export default ContentRowTop