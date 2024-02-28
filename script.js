document.getElementById('createTable').addEventListener('click', function() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;
    
    // Проверяем, что значения входят в допустимый диапазон
    if (rows < 1 || rows > 9 || columns < 1 || columns > 9) {
        alert('Количество строк и столбцов должно быть в диапазоне от 1 до 9');
        return;
    }
    
    const table = document.getElementById('table');
    table.innerHTML = '';
    const newTable = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('td');
            td.textContent = `${i+1}${j+1}`;
            td.addEventListener('click', function() {
                this.style.backgroundColor = this.style.backgroundColor ? '' : 'aquamarine';
            });
            tr.appendChild(td);
        }
        newTable.appendChild(tr);
    }
    table.appendChild(newTable);
});