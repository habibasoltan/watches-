// الحصول على الوقت الحالي
const hours = new Date().getHours();
const welcomeMessage = document.getElementById('welcomeMessage');

// تحديد الرسالة بناءً على الوقت
if (hours < 12) {
  welcomeMessage.textContent = "Good morning";
} else if (hours < 18) {
  welcomeMessage.textContent = "Good evening";
} else {
  welcomeMessage.textContent = "Good night";
}
// Show the popup after a delay
window.onload = function () {
    setTimeout(showPopup, 1000); // Show after 1 seconds
  };

  function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  // Close the popup
  document.getElementById('closePopup').onclick = function () {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }