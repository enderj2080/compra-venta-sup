import { serverSupabaseClient } from '#supabase/server'
export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data } = await client.from('Clientes').select('*')
  //console.log(data)
  return {data}
})