import './CampoTexto.css'

function CampoTexto(props){
    return(
        <div className='campo-texto'>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type="text" 
                name={props.name} 
                id={props.name} 
                placeholder={props.placeholder} 
                onChange={props.onChange}  
                value={props.value}
            />
        </div>
    )
};

export default CampoTexto;