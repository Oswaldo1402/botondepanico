
const selectDistrito = document.getElementById("selectDistrito");
const resultado = document.getElementById("resultadoDistrito");

selectDistrito.addEventListener("change", () => {
    const distrito = selectDistrito.value;

    if (distrito === "") {
        resultado.textContent = "";
        return;
    }

    resultado.textContent =
        "🔴 Este distrito NO cuenta actualmente con el Botón de Pánico Inteligente.";
    resultado.style.color = "#b30000";
});



