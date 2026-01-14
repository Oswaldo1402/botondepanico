const distritosConSistema = [
    "Canta",
    
];

const selectDistrito = document.getElementById("selectDistrito");
const resultado = document.getElementById("resultadoDistrito");

selectDistrito.addEventListener("change", () => {
    const distrito = selectDistrito.value;

    if (distrito === "") {
        resultado.textContent = "";
        return;
    }

    if (distritosConSistema.includes(distrito)) {
        resultado.textContent =
            "🟢 Este distrito SÍ cuenta con el software del Botón de Pánico Inteligente.";
        resultado.style.color = "green";
    } else {
        resultado.textContent =
            "🔴 Este distrito NO cuenta actualmente con el Botón de Pánico Inteligente.";
        resultado.style.color = "red";
    }
});


