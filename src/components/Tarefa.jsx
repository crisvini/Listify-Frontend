import { useState } from "react"

const Tarefa = ({ id, completa, texto }) => {
    const [checked, setChecked] = useState(completa)

    const handleChecked = (e) => {
        setChecked(!checked)
    }

    return (
        <li className="mb-2">
            <div>
                <input className="form-check-input" type="checkbox" checked={checked} onChange={handleChecked} />
                <span className="ms-2">{texto}</span>
            </div>
        </li>
    )
}

export default Tarefa