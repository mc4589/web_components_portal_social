/*componente de la sección de galería*/
class GalleryComponent extends HTMLElement {
    constructor() {
        super();
/*estilos de la galería encapsulados en el shadow DOM*/
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 1rem;
                }
                #pokemon-gallery {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                    justify-content: center;
                }
                .pokemon {
                    border: 1px solid black;
                    border-radius: 8px;
                    padding: 1rem;
                    text-align: center;
                    background-color: #f9f9f9;
                    flex: 1 1 calc(25% - 2rem);
                    box-sizing: border-box;
                }
                .pokemon img {
                    max-width: 150px;
                    max-height: 150px;
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                    
                }
            </style>
            <div id="pokemon-gallery"></div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.fetchPokemon();
    }

    /*código para importar los atributos y registros json de cada imagen desde la API de pokemon*/
    fetchPokemon = async () => {
        const gallery = this.shadowRoot.querySelector('#pokemon-gallery');

        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
            const data = await response.json();
            const pokemonList = data.results;

            pokemonList.forEach(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();

                const pokemonDiv = document.createElement('div');
                pokemonDiv.classList.add('pokemon');

                const pokemonName = document.createElement('h2');
                pokemonName.textContent = pokemonData.name;

                const pokemonImg = document.createElement('img');
                pokemonImg.src = pokemonData.sprites.front_default;
                pokemonImg.alt = pokemonData.name;

                pokemonDiv.appendChild(pokemonName);
                pokemonDiv.appendChild(pokemonImg);
                gallery.appendChild(pokemonDiv);
            });
        } catch (error) {
            console.error('Error al obtener la información de Pokemon:', error);
        }
    }
}
/*Definimos el nombre de la etiqueta del componente de la galería de Pokemon*/
customElements.define('gallery-component', GalleryComponent);
