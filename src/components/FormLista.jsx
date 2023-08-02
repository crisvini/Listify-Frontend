const FormLista = ({ idUsuario, nome, descricao, dataEntrega, tarefas, compartilhada, tags }) => {

    return (
        <form className="bg-secondary-custom p-3 rounded-3">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome" value={nome} />
                        </div>
                        <div className="col-12 col-lg-12 mt-2">
                            <label htmlFor="dataEntrega" className="form-label">Data de entrega</label>
                            <input className="form-control" type="date" id="dataEntrega" value={dataEntrega} />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-9 mt-2 mt-lg-0">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea className="form-control no-resize" id="descricao" rows="4">
                        {descricao}
                    </textarea>
                </div>
            </div>
            {/* <div className="row mt-2">
                <div className="col-12 col-lg-9">
                </div>
            </div> */}
        </form>
    )
}

export default FormLista