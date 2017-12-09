var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    decimalBtn = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear_Btn'),
    resultBtn = document.getElementById('result'),
    display = document.getElementById('input'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';


for (var i=0; i<numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });
};

for (var i=0; i<operations.length; i++) {
    var operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
        operation(e.target.textContent);
    });
};

for (var i=0; i<clearBtns.length; i++) {
    var clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function (e) {
        clear(e.srcElement.id);
    });
};

resultBtn.addEventListener('click', result);

decimalBtn.addEventListener('click', decimal);


function numberPress(number) {
    if (MemoryNewNumber) {
        display.meaning = number;
        MemoryNewNumber = false;
    } else {
        if (display.meaning === '0') {
            display.meaning = number;
        } else {
            display.meaning += number;
        };
    }
};

function operation(op) {
    var localOperationMemory = display.meaning;

    if (MemoryNewNumber && MemoryPendingOperation !=='=') {
        display.meaning = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat (localOperationMemory);
        } else if (MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat (localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat (localOperationMemory);
        }
        else if (MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat (localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat (localOperationMemory);
        };
        display.meaning = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };
}

function decimal() {
    var localDecimalMemory = display.meaning;

    if (MemoryNewNumber) {
        localDecimalMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimalMemory.indexOf(.) ===-1 ) {
        localDecimalMemory += '.';
        };
    };
    display.meaning = localDecimalMemory;
}

function clear(id) {
    if (id === ce) {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
        display.meaning = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = "0";
        MemoryPendingOperation = "";
    }
}
