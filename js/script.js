var dragBox = document.getElementById('dragBox')
var dragZoneWidth = document.getElementById('dragZone').clientWidth;
var dragZoneHeight = document.getElementById('dragZone').clientHeight;
var inputTop = document.getElementById('inputTop');
var inputLeft = document.getElementById('inputLeft');


dragBox.style.position = 'absolute';
dragBox.style.zIndex = 1000;

dragBox.onmousedown = function(e) {


  document.body.appendChild(dragBox);

  document.onmousemove = function(e) {

    moveAtLeft(e.pageX);
    moveAtTop(e.pageY);
  }

  dragBox.onmouseup = function() {
    document.onmousemove = null;
    dragBox.onmouseup = null;
        }

}

function moveAtLeft(e) {
	var currentLeftPos = e - dragBox.offsetWidth / 2;
	var dragLeftPos = currentLeftPos < dragZoneWidth ? currentLeftPos : dragZoneWidth - dragBox.offsetWidth;

	inputLeft.value = dragLeftPos
    dragBox.style.left = dragLeftPos + 'px';
}

function moveAtTop(e) {
	var currentTopPos = e - dragBox.offsetHeight / 2;
	var dragTopPos = currentTopPos < dragZoneHeight ? currentTopPos : dragZoneHeight - dragBox.offsetHeight;

	inputTop.value = dragTopPos;
  dragBox.style.top = dragTopPos + 'px';
}

function getValTop() {
  const val = inputTop.value;
  moveAtTop(val);
}

function getValLeft() {
  const val = inputLeft.value;
  moveAtLeft(val);
}
