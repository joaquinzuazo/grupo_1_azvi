const refactorCategorie = (data = []) => {
	const response = data.reduce((acumulator, { name, providers }) => {
		acumulator[name] = providers.length
		return acumulator
	}, {})

	 
	return response
}

module.exports = refactorCategorie
