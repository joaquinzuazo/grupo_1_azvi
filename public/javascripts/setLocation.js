const locationText = document.getElementById('location')

const userLocation = JSON.parse(sessionStorage.getItem('location'))
console.log(userLocation)
const getLocation = async ({ latitude, longitude }) => {
	const response = await fetch(`https://apis.datos.gob.ar/georef/api/ubicacion?lat=${latitude}&lon=${longitude}`)
	const { ubicacion } = await response.json()
	const { municipio, provincia } = ubicacion
	const session = { provincia: provincia.nombre, municipio: municipio.nombre }
	console.log('seteado')
	sessionStorage.setItem('location', JSON.stringify(session))

	locationText.innerHTML = `<i class="fas fa-map-marker-alt"> </i><p  style="display: inline; margin-left: 3px;">${municipio.nombre}</p>`
}

if (!userLocation) {
	navigator.geolocation.getCurrentPosition(({ coords }) => getLocation(coords))
} else {
	locationText.innerHTML = `<i class="fas fa-map-marker-alt"> </i><p  style="display: inline; margin-left: 3px;">${userLocation.municipio}</p>`
}
