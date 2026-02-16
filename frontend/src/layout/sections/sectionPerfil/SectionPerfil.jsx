import './style.css'
import imagemProvisoriaPerfil from "../../../assets/img/background-login0.svg"

export const SectionPerfil = () => {
    return (
        <div className='container-perfil'>

            <div className='informacoes-perfil'>

                <div className='container-foto-nome-email'>
                    <img src="https://avatars.githubusercontent.com/u/167234043?v=4" alt=" foto-de-perfil" />
                    <div className='nome-email'>
                        <h2>JULIO C.</h2>
                        <h5>julionoobgamer2007@gmail.com</h5>
                    </div>
                </div>


                <div className='container-cursos'>
                    <h2>CURSO(S):</h2>

                        <div className='curso1'>
                            <h3>TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</h3>
                            <h4>SEGUNDA A SEXTA - 14HS ÀS 17H15</h4>
                        </div>
                        
                        <div className='curso2'>
                            <h3>DESIGN UX / UI</h3>
                            <h4>SÁBADO - 8HS ÀS 17HS</h4>
                        </div>
                </div>
            </div>

            <div className='imagem-prato-perfil'>
                <img src={imagemProvisoriaPerfil} alt="" />
            </div>

        </div>

    )
}