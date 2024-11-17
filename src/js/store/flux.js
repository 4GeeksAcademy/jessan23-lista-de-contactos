const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			

		     contacts:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
		
			getContacts: () => {
			
					fetch("https://playground.4geeks.com/contact/agendas/jessica")
					.then((result)=> result.json())
					.then(data => setStore({ contacts: data.contacts }))
			        .catch((error)=>console.log(error)
				)
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
