const refactorProduct = (data = []) => {
	const response = data.map(({ id, name, lastname, categories, services,image }) => ({
		id,
		name,
		image,
		lastname,
		categories,
		description: services.description,
        detail:`api/products/${id}`
	}))

	return response
}

module.exports = refactorProduct
