
const updateVolume = () => {
  const newVolume = document.getElementById('myRange').value;
  document.querySelectorAll('video, audio, embed, object').forEach(element => element.volume = newVolume);
  document.getElementById('demo').innerText = newVolume;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myRange').addEventListener('input', updateVolume);
}
