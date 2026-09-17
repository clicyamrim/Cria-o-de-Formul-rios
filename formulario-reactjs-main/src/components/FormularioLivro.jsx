import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Livro from './Livro.jsx'
import './FormularioLivro.css'

function FormularioLivro() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [ano, setAno] = useState('')
  const [genero, setGenero] = useState('')

  const [livros, setLivros] = useState([])

  function handleSubmit(evento) {
    evento.preventDefault()

    const novoLivro = {
      id: Date.now(),
      titulo,
      autor,
      ano,
      genero
    }

    setLivros([...livros, novoLivro])

    setTitulo('')
    setAutor('')
    setAno('')
    setGenero('')
  }

  return (
    <section className="formulario-livro">
      <h1>Cadastro de Livro</h1>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Título do Livro"
          name="titulo"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          placeholder="O Senhor dos Anéis"
        />

        <CampoTexto
          label="Autor"
          name="autor"
          value={autor}
          onChange={(evento) => setAutor(evento.target.value)}
          placeholder="Ex: J.R.R. Tolkien"
        />

        <CampoTexto
          label="Ano de publicação"
          name="ano"
          value={ano}
          onChange={(evento) => setAno(evento.target.value)}
          placeholder="1954"
        />

        <CampoTexto
          label="Gênero"
          name="genero"
          value={genero}
          onChange={(evento) => setGenero(evento.target.value)}
          placeholder="Ex: Fantasia"
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="formulario-livro-lista">
        <h2>Livros cadastrados</h2>

        {livros.length === 0 ? (
          <p>Nenhum livro cadastrado ainda.</p>
        ) : (
          <ul>
            {livros.map((item) => (
              <Livro key={item.id} livro={item} />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default FormularioLivro