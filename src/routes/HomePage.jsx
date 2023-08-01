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

    const listas = [
        {
            id: 1,
            nome: 'Lista 1',
            descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?',
            tarefas: [
                {
                    id: 1,
                    completa: 1,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
                {
                    id: 2,
                    completa: 0,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
                {
                    id: 3,
                    completa: 0,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
            ],
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
            nome: 'Lista 2',
            descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?',
            tarefas: [
                {
                    id: 1,
                    completa: 1,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
                {
                    id: 2,
                    completa: 0,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
                {
                    id: 3,
                    completa: 0,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
            ],
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
            nome: 'Lista 3',
            descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?',
            tarefas: [
                {
                    id: 1,
                    completa: 1,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
                {
                    id: 2,
                    completa: 0,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
                {
                    id: 3,
                    completa: 0,
                    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perspiciatis praesentium reprehenderit necessitatibus obcaecati, quidem soluta? Molestias vero in, earum ipsa accusamus ea doloremque eaque, fuga recusandae dolorum illo tenetur?'
                },
            ],
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
                                <AnotacoesCard key={key} id={value.id} nome={value.nome} anotacao={value.anotacao} tags={value.tags} />
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
                            {listas && listas.map((value, key) => (
                                <ListasCard key={key} id={value.id} nome={value.nome} descricao={value.descricao} tarefas={value.tarefas} tags={value.tags} />
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