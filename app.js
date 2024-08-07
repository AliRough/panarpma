// const panoImgElem = document.querySelector(".pano-image");
// const panoImg = "../../image/panaroma.jpg";
// const panorama =new PANOLENS.ImagePanorama("../../image/panaroma.jpg");
// const panorama2 =new PANOLENS.ImagePanorama("../../image/pana.jpeg");
// const viewer = new PANOLENS.Viewer({
//   container: panoImgElem,
//   autoRotate:true,
//   autoRotateSpeed: .25

// });
// viewer.add(panorama,panorama2);




// var panorama, viewer, container, infospot;
// var containerBaseWidth = 700;
// var containerBaseHeight = 400;
// var deltaSize = 100;

container = document.querySelector(".pano-image");
panorama = new PANOLENS.ImagePanorama("../../image/panaroma.jpg");
panorama2 = new PANOLENS.ImagePanorama("../../image/pana.jpeg");
panorama3 = new PANOLENS.ImagePanorama("../../image/pana3.jpg");
panorama4 = new PANOLENS.ImagePanorama("../../image/pana3.jpg");

//infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot = new PANOLENS.Infospot(350, "../../image/download.png");

// console.log(infospot.setContainer("<h1>My First Heading</h1>"));
console.log(infospot.getContainer());

infospot.position.set(0, 0, -5000);
infospot.addHoverText("Hello Panolens", 50);
infospot.addEventListener("click", function () {
  $("#login_modal").modal("show");
});
panorama.add(infospot);

viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);
viewer.add(panorama2);
viewer.add(panorama3);
viewer.add(panorama4);

panorama.link(
  panorama2,
  new THREE.Vector3(6500, 2000, 5000),
  400,
  "../../image/download (1).png"
);
panorama.link(
  panorama3,
  new THREE.Vector3(-2000, -2000, -5000),
  400,
  "../../image/download (1).png"
);
panorama.link(
  panorama4,
  new THREE.Vector3(1000, -2000, -5000),
  400,
  "../../image/download (1).png"
);

panorama2.link(panorama, new THREE.Vector3(0, -2000, -5000));
panorama3.link(panorama, new THREE.Vector3(0, -2000, -5000));
panorama4.link(panorama, new THREE.Vector3(0, -2000, -5000));





// var parameters, gui, panorama_video, radius, button, position, infospot, timerId, easingItem, list, listItem, index = 0, baseScale = 300;

// var curves = [], easings = [];

// curves = getPropertyArray( TWEEN.Easing );

// // list = document.querySelector( '.mdl-list' );
// // listItem = document.querySelector( '.mdl-list__item' );

// // Focus tweening parameter
// parameters = {
//   amount: 1,
//   duration: 1000,
//   curve: 'Exponential',
//   easing: 'Out',
//   iterative: false
// };

// gui = new dat.GUI();
// gui.add( parameters, 'duration', 0, 3000 ).step( 1 );
// gui.add( parameters, 'iterative' ).onChange( iterativeFocus );
// gui.add( parameters, 'curve', curves ).onChange( function(value){
//   gui.remove( easingItem );
//   easings = getPropertyArray( TWEEN.Easing[ value ] );
//   parameters.easing = easings.length > 2 ? easings[ 1 ] : easings[ 0 ];
//   easingItem = gui.add( parameters, 'easing', easings );
// } );
// easingItem = gui.add( parameters, 'easing', [ 'In', 'Out', 'InOut' ] );

// // panorama = new PANOLENS.ImagePanorama( 'asset/textures/equirectangular/field.jpg' );
// panorama_video = new PANOLENS.VideoPanorama( '../../image/panaroma.jpg' );

// panorama.link( panorama_video, new THREE.Vector3(3883.71, 745.13, -3047.48), 400, '../../image/panaroma.jpg' );
// panorama_video.link( panorama, new THREE.Vector3(4602.58, 1863.13, -547.70), 400 );

// const { edgeLength } = panorama;
// radius = edgeLength / 2;

// for ( var i = 1; i <= parameters.amount; i++ ) {

//   const theta = Math.random() * 2 * Math.PI;
//   const phi = Math.random() * Math.PI;

//   position = new THREE.Vector3( 
//     radius * Math.sin( phi ) * Math.cos( theta ),
//     radius * Math.sin( phi ) * Math.sin( theta ),
//     radius * Math.cos( phi )
//   );

//   infospot = new PANOLENS.Infospot( baseScale * position.length() / radius, PANOLENS.DataImage.Info );
//   infospot.position.copy( position );
//   infospot.addHoverText( 'Infospot' + i );
//   infospot.addEventListener( 'click', onFocus );
//   panorama.add( infospot );

//   // Add to left panel
//   // var item = listItem?.cloneNode( true );
//   // item?.classList.remove( 'template' );
//   // item?.querySelector( 'button' ).textContent = 'Infospot' + i;
//   // item?.addEventListener( 'click', onFocus.bind( infospot ), false );
//   // list?.appendChild( item );

// }

// // viewer = new PANOLENS.Viewer( { output: 'console', container: document.querySelector( '#pcontainer' ) } );
// // viewer.add( panorama, panorama_video );
// viewer.add(panorama,panorama_video);

// viewer.renderer.sortObjects = true;

// function getPropertyArray ( object ) {

//   var array = [];

//   for ( var name in object ) {

//     array.push( name );

//   }

//   return array;

// }

// function iterativeFocus ( enabled ) {

//   if ( !enabled ) {
//     clearTimeout( timerId );
//     return;
//   }

//   onFocus.call( panorama.children[ index++ ] );

//   if ( index === panorama.children.length ) {

//     index = 0;

//   }

//   timerId = setTimeout( iterativeFocus.bind( this, enabled ), parameters.duration + 500 );

// }

// function onFocus () {

//   this.focus( parameters.duration, TWEEN.Easing[ parameters.curve ][ parameters.easing ] );

// }



