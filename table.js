/*componente de la tabla de usuarios*/
class CustomTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render = async () => {
        const tableContainer = document.createElement('div');
        tableContainer.classList.add('table-container');

/*estilos de la tabla encapsulados en el shadow DOM*/
        const estilo = document.createElement('style');
        estilo.textContent = `
            .table-container {
                margin: 10px;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                padding: 8px;
                border: 1px solid black;
                text-align: center;
            }
            th {
                background-color: #f5cba7;
            }
        `;

        /*código para importar los atributos y registros json de la lista de usuarios desde una API externa*/
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();

        const headers = ["ID", "Nombre", "Usuario", "Email"];

        const tabla = document.createElement("table");

        /*código para crear la fila de encabezado de la tabla*/
        const headerRow = document.createElement("tr");
        headers.forEach(h => {
            const header = document.createElement("th");
            header.textContent = h;
            headerRow.appendChild(header);
        });
        tabla.appendChild(headerRow);

        /*construimos las filas para mostrar los registros de usuarios*/
        usuarios.forEach(usuario => {
            const row = document.createElement("tr");
            ["id", "name", "username", "email"].forEach(atributo => {
                const celda = document.createElement("td");
                celda.textContent = usuario[atributo];
                row.appendChild(celda);
            });
            tabla.appendChild(row);
        });

        tableContainer.appendChild(tabla);
        this.shadowRoot.appendChild(estilo);
        this.shadowRoot.appendChild(tableContainer);
    }
}

/*procedemos a definir el nombre de la etiqueta del componente de la tabla*/
customElements.define("custom-table", CustomTable);
