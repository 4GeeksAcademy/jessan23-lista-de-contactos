const getState = ({ getStore, getActions, setStore }) => {
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
            addContact: (contact) => {
                const store = getStore()


                fetch("https://playground.4geeks.com/contact/agendas/jessica/contacts", {
                    method: "POST",
                    body: JSON.stringify(contact),
                    headers: { "Content-Type": "application/json" }
                })
                    .then((result) => {
                        if (result.ok) {
                            return result.json()
                        }
                    })
                    .then((data) => {
                        console.log("Contacts data: ", data); // Verifica la respuesta completa de la API
                        if (data) {
                            setStore({ contacts: [...store.contacts, data] });
                        } else {
                            console.error("no se agrego el contacto");
                        }
                    })
                    .catch((error) => console.log("Error fetching contacts:", error));
            },
            updateContact: (contact,id) => {
                const store = getStore()


                fetch("https://playground.4geeks.com/contact/agendas/jessica/contacts/"+id, {
                    method: "PUT",
                    body: JSON.stringify(contact),
                    headers: { "Content-Type": "application/json" }
                })
                    .then((result) => {
                        if (result.ok) {
                            return result.json()
                        }
                    })
                    .then((data) => {
                        console.log("Contacts data: ", data); // Verifica la respuesta completa de la API
                        if (data) {
                            const updatedContacts = store.contacts.map(item => {
                                if(item.id==id){
                                    item=data
                                }
                                return item
                            })
                            setStore({ contacts: updatedContacts });
                        } else {
                            console.error("no se actualizo el contacto");
                        }
                    })
                    .catch((error) => console.log("Error fetching contacts:", error));
            },
            deleteContact: (id) => {
                const store = getStore()


                fetch("https://playground.4geeks.com/contact/agendas/jessica/contacts/"+id, {
                    method: "DELETE"
                })
                    .then((result) => {
                        if (result.ok) {
                            return result
                        }
                    })
                    .then((data) => {
                        console.log("Contacts data: ", data); // Verifica la respuesta completa de la API
                        if (data) {
                            setStore({ contacts: store.contacts.filter(item=>item.id != id) });
                        } else {
                            console.error("no se elimino el contacto");
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
