const refactorProduct = (data = []) => {
	const response = data.map(({ id, name, lastname, categories, services }) => ({
		id,
		name,
		lastname,
		categories,
		description: services.description,
        detail:`api/products/${id}`
	}))

	return response
}

module.exports = refactorProduct
