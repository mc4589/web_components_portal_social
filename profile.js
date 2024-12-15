/*componente del perfil de usuario*/
class ProfileComponent extends HTMLElement {
    constructor() {
        super();
        /*estilos del perfil de usuario encapsulados en el shadow DOM*/
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 600px;
                    margin: auto;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 1rem;
                    background-color: #f9f9f9;
                }
                .profile-pic {
                    text-align: center;
                    margin-bottom: 1rem;
                }
                .profile-pic img {
                    border-radius: 50%;
                    border: 1px solid black;
                    max-width: 150px;
                    max-height: 150px;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
                .profile-details {
                    margin-top: 1rem;
                    text-align: center;
                    
                }
                .profile-details h2 {
                    margin: 0;
                    color: black;
                    
                }
                .profile-details p {
                    margin: 0.5rem 0;
                    color: black;
                    font-family: sans-seriff;
                }
                .profile-details em {
                    color: black;
                    font-family: sans-seriff;
                }
            </style>
            <div class="profile-pic">
                <img src="https://i.postimg.cc/L6Ft6X1t/marco1.jpg" alt="Foto de perfil">
            </div>
            <div class="profile-details">
                <h2><slot name="Nombre">Marco Chacón</slot></h2>
                <p><strong>Usuario:</strong> <slot name="username">Marquito</slot></p>
                <p><strong>Descripción:</strong> <slot name="descripcion">Estudiante de TI, amante de la tecnología, la ciencia y la naturaleza.</slot></p>
                <p><strong>Residencia:</strong> <slot name="ubicacion">Quito, Ecuador</slot></p>
                <p><em>Se unió en <slot name="anio">2024</slot></em></p>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

/*Definimos el nombre del componente de perfil de usuario como etiqueta personalizada*/
customElements.define('profile-component', ProfileComponent);
