import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import AnotacoesCard from "../components/AnotacoesCard"
import ListasCard from "../components/ListasCard"

const HomePage = () => {
    const anotacoes = [
        {
            id: 1,
            nome: 'Anotação 1',
            anotacao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis commodi quam eum quisquam, saepe eos nostrum placeat culpa fugiat sit rerum exercitationem, recusandae deserunt sequi, tenetur sapiente qui eaque!',
            tags: [
                {
                    nome: 'Trabalho',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                },
                {
                    nome: 'Prioridade',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                }
            ]
        },
        {
            id: 2,
            nome: 'Anotação 2',
            anotacao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis commodi quam eum quisquam, saepe eos nostrum placeat culpa fugiat sit rerum exercitationem, recusandae deserunt sequi, tenetur sapiente qui eaque!',
            tags: [
                {
                    nome: 'Trabalho',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                },
                {
                    nome: 'Prioridade',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                }
            ]
        },
        {
            id: 3,
            nome: 'Anotação 3',
            anotacao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis commodi quam eum quisquam, saepe eos nostrum placeat culpa fugiat sit rerum exercitationem, recusandae deserunt sequi, tenetur sapiente qui eaque!',
            tags: [
                {
                    nome: 'Trabalho',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                },
                {
                    nome: 'Prioridade',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                }
            ]
        },
        {
            id: 4,
            nome: 'Anotação 4',
            anotacao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis commodi quam eum quisquam, saepe eos nostrum placeat culpa fugiat sit rerum exercitationem, recusandae deserunt sequi, tenetur sapiente qui eaque!',
            tags: [
                {
                    nome: 'Trabalho',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                },
                {
                    nome: 'Prioridade',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                }
            ]
        },
        {
            id: 5,
            nome: 'Anotação 5',
            anotacao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis commodi quam eum quisquam, saepe eos nostrum placeat culpa fugiat sit rerum exercitationem, recusandae deserunt sequi, tenetur sapiente qui eaque!',
            tags: [
                {
                    nome: 'Trabalho',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                },
                {
                    nome: 'Prioridade',
                    corBg: '#000000',
                    corTexto: '#ffffff'
                }
            ]
        }
    ]

    return (
        <div>
            <Navbar />
            <main className="container-xxl">
                <div className="row">
                    <div className="col-12 col-lg-6 border-lg-end">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <Link to='/anotacoes'><h1>Anotações <i className="bi bi-arrow-return-right fs-6"></i></h1></Link>
                            <a className="pointer"><i className="bi bi-plus-circle fs-2"></i></a>
                        </div>
                        <div className="scrollable-container">
                            {anotacoes.map((value, key) => (
                                <AnotacoesCard id={value.id} nome={value.nome} anotacao={value.anotacao} key={key} tags={value.tags} />
                            ))}
                            {/* <span className="fw-lighter">Nenhuma anotação encontrada</span> */}
                        </div>
                    </div>
                    <div className="container d-lg-none">
                        <hr className="my-4 text-primary-custom" />
                    </div>
                    <div className="col-12 col-lg-6 border-lg-start mt-lg-0">
                        <div className="w-100 d-flex justify-content-between align-items-center">
                            <Link to='/listas'><h1>Listas <i className="bi bi-arrow-return-right fs-6"></i></h1></Link>
                            <a className="pointer"><i className="bi bi-plus-circle fs-2"></i></a>
                        </div>
                        <div className="scrollable-container">
                            {[1, 2, 3, 4, 5].map((value, key) => (
                                <ListasCard id={value} key={key} />
                            ))}
                            {/* <span className="fw-lighter">Nenhuma lista encontrada</span> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage