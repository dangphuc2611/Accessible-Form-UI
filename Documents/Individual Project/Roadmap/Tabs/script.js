document.getElementById("tab1").addEventListener("click", function () {
  reset()
  document.getElementById("content1").style.display = "block"
})
document.getElementById("tab2").addEventListener("click", function () {
  reset()
  document.getElementById("content2").style.display = "block"
})
document.getElementById("tab3").addEventListener("click", function () {
  reset()
  document.getElementById("content3").style.display = "block"
})
document.getElementById("tab4").addEventListener("click", function () {
  reset()
  document.getElementById("content4").style.display = "block"
})

function reset(){
  document.getElementById("content1").style.display = "none"
  document.getElementById("content2").style.display = "none"
  document.getElementById("content3").style.display = "none"
  document.getElementById("content4").style.display = "none"
}