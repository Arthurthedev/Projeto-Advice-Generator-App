document.getElementById('botao').addEventListener("click", () => {
    inserirConselho()
})

const campodeID = document.querySelector('.advice')
const campoDeTexto = document.querySelector('.card-p')

async function pegarConselhoCompleto() {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    if (!resposta.ok) {
        throw new Error("Ocorreu um erro ao solicitar as informações da API");
    }
    const json = await resposta.json()
    return json.slip

}

async function inserirConselho() {
    try {
        const slip = await pegarConselhoCompleto()
        const advice = slip.advice
        const id = slip.id
        campodeID.innerText = `ADVICE #${id}`
        campoDeTexto.innerText = advice
    } catch (error) {
        console.log("Erro ao inserir conselho:", error);
    }
}
inserirConselho()


