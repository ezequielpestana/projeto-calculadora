const resultInput = document.getElementById("result");

function appendValue(value) {
    if (resultInput.value === "Erro!") {
        resultInput.value = "";
    }
    resultInput.value += value;
}

function clearResult() {
    resultInput.value = "";
}

function deleteLast() {
    if (resultInput.value !== "Erro!") {
        resultInput.value = resultInput.value.slice(0, -1);
    }
}

function calculateResult() {
    try {
        const expression = resultInput.value;
        const result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            resultInput.value = "Erro!";
        } else {
            resultInput.value = result;
        }
    } catch (error) {
        resultInput.value = "Erro!";
    }
}

// Suporte ao teclado
document.addEventListener("keydown", (e) => {
    const allowedKeys = "0123456789+-*/().";
    if (allowedKeys.includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculateResult();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearResult();
    }
});
