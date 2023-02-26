const panoImgElem = document.querySelector(".pano-image");
const panoImg = "../../image/panaroma.jpg";
const panorama =new PANOLENS.ImagePanorama("../../image/panaroma.jpg");
const viewer = new PANOLENS.Viewer({
  container: panoImgElem,
});
viewer.add(panorama);


