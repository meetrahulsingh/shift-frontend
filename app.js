
document.getElementById('shiftForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const role = document.getElementById('role').value;
  const hospital = document.getElementById('hospital').value;
  const responseDiv = document.getElementById('response');

  try {
    const res = await fetch('https://shift-backend-1-is60.onrender.com/api/shifts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role, hospital }),
    });

    const data = await res.json();
    responseDiv.innerText = JSON.stringify(data);
  } catch (err) {
    responseDiv.innerText = 'Error submitting shift.';
  }
});
