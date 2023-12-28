const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const BLOB = document.getElementById("BLOB");

document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  BLOB.animate({
    left: `${clientX}px`,
    top : `${clientY}px`
  },{duration: 3000, fill:"forwards"});

};
