import type {icliente} from '@/types'
/**
 * Exports a default function that contains logic for inserting a new client into the 'Clientes' table in the database.
 * It uses the Supabase client to connect to the database.
 * The newClientes async function accepts a cliente object and inserts it into the 'Clientes' table.
 * It returns the inserted cliente record.
 */
export default function () {
  const supabase = useSupabaseClient();


  async function newClientes(cliente: icliente) {
    
    const respon = await supabase
      .from("Clientes")
      .insert([])
      .select().returns<icliente[]>;
      return {respon}
  }

  function upCliente(client:icliente){

  } 

  function deleteClient(){

  }

  return {
    newClientes,
    upCliente,
    deleteClient
  }
}
