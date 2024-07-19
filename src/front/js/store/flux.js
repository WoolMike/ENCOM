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
			profile:JSON.parse(localStorage.getItem("profile")||null),
			equipos:null,
			tipos:null

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
					getActions().getprofile()
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
					const resp = await fetch(process.env.BACKEND_URL + "/api/login", opts)
					const data = await resp.json();
					if(!resp.ok){
						throw new Error(data.msg)
					}
					console.log("si se hizo el inicio de sesion")
					localStorage.setItem("token" , data.access_token);
					setStore({token:data.access_token})
					getActions().getprofile()
					console.log("regresa un true")
					return true;
				}
				catch(error){
					return false
				}
				

			},
			logoutUser: () => {
				localStorage.removeItem("token");
				localStorage.removeItem("profile");
				setStore({token:null, profile:null});
			},
			getprofile:	async()	=>{
				const store=getStore()

				try{
					const resp =await fetch(process.env.BACKEND_URL+"api/protected",{
						method:'GET',
						headers: {
							"Content-Type": "application/json",
							"Authorization":`Bearer ${store.token}`
						},
					})
					if(!resp.ok){
						console.log("no encontró el perfil")
						return false;
					}

					const data = await resp.json();
					localStorage.setItem("profile", JSON.stringify(data));
					console.log(data)
					setStore({profile:data})
					return true
				}
				catch (error){
					console.error("algo no funciono al buscar el perfil");
				}
			},
			editProfile: async (newUser) => {
				const store = getStore()
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/profile", {
						method: 'PUT',
						body: JSON.stringify(
							newUser
						),
						headers: {
							'Content-Type': 'application/json',
							"Authorization": `Bearer ${localStorage.getItem("token")}`
						},
					})
					const data = await resp.json();
					if (resp.ok) {
						getActions().getProfile()
						setStore({ profile: newUser })
						localStorage.setItem("profile", JSON.stringify(newUser));
						Swal.fire({
							position: "center",
							icon: "success",
							title: data.mensaje,
							background: "#263043",
							color: "#FFFFFF",
							showConfirmButton: false,
							timer: 1500
						});

					}
				} catch (error) {
					return false

				}

			},
			getEquipos: async()=>{
				const store=getStore()

				try{
					const resp =await fetch(process.env.BACKEND_URL+"/api/equipos",{
						method:'GET',
						headers:{
							"Content-Type":"application/json"
						},
					})
					if(!resp.ok){
						throw new Error(data.msg)
					}
					const data=await resp.json()
					localStorage.setItem("equipos",JSON.stringify(data));
					console.log(data)
					setStore({equipos:data})
					return true
				}
				catch(error){
					console.log("Error al buscar los equipos en el backend",error)
					return false
				}
			},
			getTipos:async()=>{
				const store=getStore()

				try{
					const resp =await fetch(process.env.BACKEND_URL+"/api/tipos",{
						method:'GET',
						headers:{
							"Content-Type":"application/json"
						},
					})
					if(!resp.ok){
						throw new Error(data.msg)
					}
					const data=await resp.json()
					localStorage.setItem("tipos",JSON.stringify(data));
					console.log(data)
					setStore({tipos:data})
					return true
				}
				catch(error){
					console.log("Error al buscar los tipos en el backend",error)
					return false
				}
			},
			 getCotizacion: async(equipo,cantidad)=>{
			 	const store=getStore()
			 	try{
			 		const resp=await fetch(process.env.BACKEND_URL+"api/cotizacion",{
			 			method:"POST",
			 			body:JSON.stringify({
			 				"equipo":equipo,
							"cantidad":cantidad
			 			}),
						headers:{
							"Content-Type":"application/json",
							"Authorization":`Bearer ${store.token}`
						},
			 		})
					const data=await resp.json()
					if(!resp.ok){
						console.log("no se creo la cotizacion")
						throw new Error(data.msg)
					}
					return true
			 	}catch(error){
					console.log("valio barriga señor verga")
					return false
				}
			 }
		}
	};
};

export default getState;
