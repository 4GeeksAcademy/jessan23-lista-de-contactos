const getState = ({ getStore, setStore }) => {
    return {
        store: {
            contacts: [], 
            demo: [] 
        },
        actions: {
            // Obtener contactos de la API
            getContacts: () => {
                fetch("https://playground.4geeks.com/contact/agendas/jessica/contacts")
                    .then((result) => result.json())
                    .then((data) => {
                        console.log("Contacts data: ", data); // Verifica la respuesta completa de la API
                        if (data.contacts) {
                            setStore({ contacts: data.contacts });
                        } else {
                            console.error("No contacts found in response");
                        }
                    })
                    .catch((error) => console.log("Error fetching contacts:", error));
            },
        
            // Cambiar el color de un elemento en el array 'demo'
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            }
        }
    };
};

export default getState;
