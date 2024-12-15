/*componente del header en página de inicio y subpáginas*/
class HeaderComponent extends HTMLElement {
    constructor() {
        super();
/*estilos encapsulados del header en shadow DOM */
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #2c35b6;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                    font-size: 1.5rem;
                }
            </style>
            <div>PORTAL SOCIAL</div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }
}
/*se define el nombre del componente del header como etiqueta personalizada */
customElements.define('header-component', HeaderComponent);

/*componente del menú en página de inicio y subpáginas*/

class CustomMenu extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const menuContainer = document.createElement("div");
        menuContainer.classList.add('menu-container');

        const opcionesMenu = [
            { texto: 'Inicio', enlace: 'index.html' },
            { texto: 'Perfil Social', enlace: 'profile.html' },
            { texto: 'Galería', enlace: 'gallery.html' },
            { texto: 'Tabla de Registros', enlace: 'table.html' }
        ];

        opcionesMenu.forEach(opcion => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = opcion.texto;
            link.href = opcion.enlace;
            listItem.appendChild(link);
            menuContainer.appendChild(listItem);
        });
/*estilos encapsulados del menú en shadow DOM */
        const estilo = document.createElement("style");
        estilo.textContent = `
            body {
                background-color: white; 
                
            }
            .menu-container {
                display: flex;                
                background-color: #0aebc9 ;
                border-radius: 5px;
            }
            li {
                list-style: none;
                margin: 5px 0;
                padding: 15px;
            }
            a {
                text-decoration: none;
                color: #333;
            }
            a:hover {
                color: #007BFF;                
            }
        `;

        shadow.appendChild(estilo);
        shadow.appendChild(menuContainer);
    }
}

/*se define el nombre del componente de menú como etiqueta personalizada */
customElements.define("custom-menu", CustomMenu);

/*componente del div principal de contenido en página de inicio y subpáginas*/

class MainComponent extends HTMLElement {
    constructor() {
        super();
/*estilos encapsulados del div de contenido en shadow DOM */
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 1rem;
                    background-color:#d6dbdf;
                }
                .title-container {
                    text-align: center;
                    margin-bottom: 2rem;
                    
                }
            </style>
            <slot name="main-content"></slot>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

/*se define el nombre del componente del div principal como etiqueta personalizada */
customElements.define('main-component', MainComponent);

/*componente del título en página de inicio y subpáginas*/

class TitleComponent extends HTMLElement {
    constructor() {
        super();
/*estilos encapsulados del título en shadow DOM */
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    margin-bottom: 2rem;
                    font-size: 2rem;
                    color: #333;
                }
            </style>
            <slot></slot>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

/*se define el nombre del componente del título como etiqueta personalizada */
customElements.define('title-component', TitleComponent);

/*componente del footer en página de inicio y subpáginas*/

class FooterComponent extends HTMLElement {
    constructor() {
        super();
/*estilos encapsulados del footer en shadow DOM */
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #20c33b;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                }
            </style>
            <div>&copy; 2024 Desarrollo Web</div>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }
}

/*se define el nombre del componente del footer como etiqueta personalizada */
customElements.define('footer-component', FooterComponent);
