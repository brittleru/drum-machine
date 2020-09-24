function muteMe(elem) {
  if (elem.muted) {
    elem.muted = false
  }
  else {
    elem.muted = true;
  }
}

function mutePage() {
    document.querySelectorAll("audio").forEach( elem => muteMe(elem) );
}
