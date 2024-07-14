const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			token:localStorage.getItem("token") || null,

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
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

			},
			 registerUser:async (name,lastname,email,password)=>{
			 	try{
			 		let datos={
			 			email:email,
						name:name,
						lastname:lastname,
			 			password:password
			 		};
					const resp=await fetch(process.env.BACKEND_URL+"/api/signup",{
						method:"POST",
						headers:{"Content-Type":"application/json",
						},
						body:JSON.stringify(datos),
					});
					const data=await resp.json();
					if(!resp.ok){
						throw new Error(data.msg);
					}
					localStorage.setItem("token",data.token);
					setStore({token:data.token})
					return true;
				}catch(error){
					console.error;
					return false;
				}
			},
			loginUser: async(email,password)=> {
				const opts={
					method:"POST",
					headers:{
						"Content-Type":"application/json"
					},
					body:JSON.stringify({
						"email":email,
						"password":password
					})
				}
				try{
					const resp= await fetch(process.env.BACKEND_URL+"/api/login",opts)
					const data= await resp.json();
					if(!resp.ok){
						throw new Error(data.msg)
					}
					localStorage.setItem("token",data.acces_token);
					setStore({token:data,acces_token})
					return true;
				}catch(error){
					return false
				}
				

			},
			logoutUser: ()=>{
				localStorage.removeItem("token");
				setStore({token:null});
			}
		}
	};
};

export default getState;
