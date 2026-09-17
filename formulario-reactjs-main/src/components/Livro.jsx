function Livro(props) {
  return (
    <li className="livro-item">
      <p>
        {props.livro.titulo} — {props.livro.autor} — {props.livro.ano} — {props.livro.genero}
      </p>
    </li>
  );
}

export default Livro;