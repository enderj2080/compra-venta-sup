import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    const supabase =await serverSupabaseClient(event)
    const { data:cliente } = await readBody(event)

    const {error, data} = await supabase.from('Clientes').insert(cliente)
    if(error)console.error(error.message);
    return{
        cliente:data
    }
})