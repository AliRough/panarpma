let container = document.querySelector('.pano-image')
let panorama = new PANOLENS.ImagePanorama(
  '../public/image/home-alireza/vrodisakhtman.jpg'
)
let panorama1 = new PANOLENS.ImagePanorama(
  './../public/image/home-alireza/parking.jpg'
)
let panorama2 = new PANOLENS.ImagePanorama(
  './../public/image/home-alireza/rahro.jpg'
)
let panorama3 = new PANOLENS.ImagePanorama(
  './../public/image/home-alireza/vrodikhone.jpg'
)
let panorama4 = new PANOLENS.ImagePanorama('../public/image/pana4.jpg')

infospot = new PANOLENS.Infospot(350, '../public/image/download.png')

infospot.position.set(3000, 1000, 2500)
infospot.addHoverText('Hello Panolens', 50)
infospot.addEventListener('click', function () {
  $('#login_modal').modal('show')
})
// panorama.add(infospot)

viewer = new PANOLENS.Viewer({ container: container, controlBar: false })
viewer.add(panorama)
viewer.add(panorama1)
viewer.add(panorama2)
viewer.add(panorama3)
viewer.add(panorama4)

panorama3.add(infospot)
panorama.link(panorama1, new THREE.Vector3(-8860, 2060, 500), 600)
// '../public/image/location.gif'

panorama.link(
  panorama3,
  new THREE.Vector3(-2000, -2000, -5000),
  400,
  '../public/image/download (1).png'
)
panorama.link(
  panorama4,
  new THREE.Vector3(1000, -2000, -5000),
  400,
  '../public/image/download (1).png'
)

panorama1.link(panorama2, new THREE.Vector3(-2000, 0, 0))
panorama2.link(panorama3, new THREE.Vector3(-2000, 1250, 0))

const clickTest = document.querySelector('#click-test')
clickTest.addEventListener('click', (e) => {
  e.preventDefault()
  viewer.setPanorama(panorama)
})
const clickTest2 = document.querySelector('#click-test2')
clickTest.addEventListener('click', (e) => {
  e.preventDefault()
  viewer.setPanorama(panorama1)
})

const closeSideBarHandler = (e) => {
  viewer.setPanorama(panorama)
}
