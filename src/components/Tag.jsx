const Tag = ({ corTexto, corBg, nome }) => {
    return (
        <>
            <span className="badge me-2" style={{ color: corTexto, backgroundColor: corBg }}>{nome}</span>
        </>
    )
}

export default Tag