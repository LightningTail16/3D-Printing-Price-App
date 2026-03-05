const form = document.getElementById('price-form');
const result = document.getElementById('result');

function money(value) {
  return `$${value.toFixed(2)}`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const filamentGrams = Number(document.getElementById('filament-grams').value);
  const filamentCostPerKg = Number(document.getElementById('filament-cost-kg').value);
  const printHours = Number(document.getElementById('print-hours').value);
  const hourlyCost = Number(document.getElementById('hourly-cost').value);
  const marginPercent = Number(document.getElementById('margin').value);

  const filamentCost = (filamentGrams / 1000) * filamentCostPerKg;
  const timeCost = printHours * hourlyCost;
  const baseCost = filamentCost + timeCost;
  const finalPrice = baseCost * (1 + marginPercent / 100);

  result.innerHTML = `
    Material: <strong>${money(filamentCost)}</strong><br>
    Time + machine: <strong>${money(timeCost)}</strong><br>
    Base cost: <strong>${money(baseCost)}</strong><br>
    Final price (with ${marginPercent}% margin): <strong>${money(finalPrice)}</strong>
  `;
});
