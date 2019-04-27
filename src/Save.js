https://medium.com/@siobhanpmahoney/local-storage-in-a-react-single-page-application-34ba30fc977d

handleSaveArticleToReadLater = art => {
	// setting relevant pieces of state to variable
	let currentReadLaterState = this.state.readLater.slice(0);
	let currentLikedSections = this.state.likedSections.slice(0);

	if (!this.state.readLater.includes(art)) {
		//  creating variable representing current saved article list plus newly article list:
		let newReadLaterState = [...currentReadLaterState, art];

		//  updating React state with variable:
		this.setState({
			readLater: newReadLaterState,
		});

		//  updating localStorage state with same variable:
		ls.set('readLater', newReadLaterState);
	}

	if (!this.state.likedSections.includes(art.section)) {
		// creating variable to store current list of sections of interest plus new article's section (if not already included):
		const newLikedSections = [...currentLikedSections, art.section];

		//  updating React state using variable
		this.setState({
			likedSections: newLikedSections,
		});

		//  updating localStorage state with same variable
		ls.set('likedSections', newLikedSections);
	}
};