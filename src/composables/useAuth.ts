
const supabase = useSupabaseClient();

export default function (){
    
 async function login(email:string, password:string){
        try {
            const {
                error,
                data: { user },
              } = await supabase.auth.signInWithPassword({
                email,
                password
              });
              console.log(user);
              if (user) navigateTo("/");
              if(error)alert(error.message)
              return user
        } catch (err) {
            console.log(err)
        }

    }

    async function signUp(email:string, password:string){
        try {
            const {data, error}= await  supabase.auth.signUp({email,password})
            if(data)navigateTo('/')
            if(error)alert(error.message)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function signInGoogle(){
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              redirectTo: 'http://localhost:3000/confirm',
            },
          })
          if (error) console.log(error)  
    }

    async function signOut(){

        const { error } = await supabase.auth.signOut();
        if (error) console.log(error);
        navigateTo("/login");
    }

    return{
        login,
        signOut,
        signUp,
        signInGoogle
    }
}