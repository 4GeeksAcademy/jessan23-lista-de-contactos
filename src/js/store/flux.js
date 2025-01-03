const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            demo: [],
            rateLimitError: false,
        },
        actions: {


            createAgenda: async () => {
                try {
                    const res = await fetch("https://playground.4geeks.com/contact/agendas/jessica",
                        {
                            method: "POST",
                        })
                    if ("res.ok") {

                        console.log("Agenda creada con exito.");
                        return { created: true };
                    } else if (res.status === 400) {
                        console.warn("Agenda ha sido creada anteriormente");
                        return { created: false };
                    } else {
                        console.error("Error al crear la agenda:", res.statusText);
                        return { created: null }

                    }

                } catch (error) {
                    console.error("Error al crear la agenda:", error);
                    return { created: null }
                }


            },


            getContacts: () => {
                if (getStore().rateLimitError) {
                    console.log("Rate limit exceeded. Please try again later.");
                    return;
                }

                fetch("https://playground.4geeks.com/contact/agendas/jessica/contacts")
                    .then((result) => result.json())
                    .then((data) => {
                        console.log("Contacts data: ", data);
                        if (data.contacts) {
                            setStore({ contacts: data.contacts });
                        } else {
                            console.error("No contacts found in response");
                        }
                    })
                    .catch((error) => {
                        console.log("Error fetching contacts:", error);
                    });
            },


            addContact: (contact) => {
                if (getStore().rateLimitError) {
                    console.log("Rate limit exceeded. Please try again later.");
                    return;
                }

                const store = getStore();

                fetch("https://playground.4geeks.com/contact/agendas/jessica/contacts", {
                    method: "POST",
                    body: JSON.stringify(contact),
                    headers: { "Content-Type": "application/json" }
                })
                    .then((result) => {
                        if (result.ok) {
                            return result.json();
                        }
                    })
                    .then((data) => {
                        console.log("Contacts data: ", data);
                        if (data) {
                            setStore({ contacts: [...store.contacts, data] });
                        } else {
                            console.error("no se agrego el contacto");
                        }
                    })
                    .catch((error) => {
                        console.log("Error fetching contacts:", error);
                    });
            },

            // Actualizar un contacto
            updateContact: (contact, id) => {
                const store = getStore();

                fetch("https://playground.4geeks.com/contact/agendas/jessica/contacts/" + id, {
                    method: "PUT",
                    body: JSON.stringify(contact),
                    headers: { "Content-Type": "application/json" }
                })
                    .then((result) => {
                        if (result.ok) {
                            return result.json();
                        }
                    })
                    .then((data) => {
                        console.log("Contacts data: ", data);
                        if (data) {
                            const updatedContacts = store.contacts.map(item => {
                                if (item.id === id) {
                                    item = data;
                                }
                                return item;
                            });
                            setStore({ contacts: updatedContacts });
                        } else {
                            console.error("no se actualizo el contacto");
                        }
                    })
                    .catch((error) => {
                        console.log("Error fetching contacts:", error);
                    });
            },


            deleteContact: (id) => {
                const store = getStore();

                fetch("https://playground.4geeks.com/contact/agendas/jessica/contacts/" + id, {
                    method: "DELETE"
                })
                    .then((result) => {
                        if (result.ok) {
                            return result;
                        }
                    })
                    .then((data) => {
                        console.log("Contacts data: ", data);
                        if (data) {
                            setStore({ contacts: store.contacts.filter(item => item.id !== id) });
                        } else {
                            console.error("no se elimino el contacto");
                        }
                    })
                    .catch((error) => {
                        console.log("Error fetching contacts:", error);
                    });
            },


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
