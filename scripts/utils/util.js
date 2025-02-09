export function calculateMonths() {
  let startDate = new Date(2024, 11); // December 2024 (Month index starts from 0)
  let currentDate = new Date();
  
  let yearDiff = currentDate.getFullYear() - startDate.getFullYear();
  let monthDiff = currentDate.getMonth() - startDate.getMonth();
  
  let totalMonths = yearDiff * 12 + monthDiff;
  document.getElementById("months-count").textContent = totalMonths;
}