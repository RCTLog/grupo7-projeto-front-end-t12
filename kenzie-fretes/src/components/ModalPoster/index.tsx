import Container from "./style"

const ModalPoster = () => {
    return (
        <Container>
            <div className="input">
                <label htmlFor="text">Anunciar Serviço:</label>
                <textarea id="text" cols={30} rows={3} placeholder="Descreva seu serviço"/>
            </div>
            <button>Publicar</button>
        </Container>
    )
}

export default ModalPoster;