const refactorProduct = (data = []) => {
	const response = data.map(({ id, name, lastname, categories, services,image }) => ({
		id,
		name,
		image:`http://localhost:3050/${image}`,
		lastname,
		categories,
		description: services.description,
        detail:`http://localhost:3050/api/products/detail/${id}`
	}))

	return response
}

module.exports = refactorProduct
