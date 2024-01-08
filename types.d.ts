export type {Database, Tables,  TablesInsert, TablesUpdate, Enums }

declare global{
  export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

 interface Database {
  public: {
    Tables: {
      Clientes: {
        Row: {
          address: string
          created_at: string
          email: string
          id: number
          name: string
          phone: number
          productId: number | null
        }
        Insert: {
          address: string
          created_at?: string
          email: string
          id?: number
          name: string
          phone: number
          productId?: number | null
        }
        Update: {
          address?: string
          created_at?: string
          email?: string
          id?: number
          name?: string
          phone?: number
          productId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Clientes_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "Productos"
            referencedColumns: ["id"]
          }
        ]
      }
      Productos: {
        Row: {
          clienteId: number | null
          created_at: string
          descrption: string | null
          id: number
          marca: string | null
          model: string | null
          price: number | null
          serial: number | null
        }
        Insert: {
          clienteId?: number | null
          created_at?: string
          descrption?: string | null
          id?: number
          marca?: string | null
          model?: string | null
          price?: number | null
          serial?: number | null
        }
        Update: {
          clienteId?: number | null
          created_at?: string
          descrption?: string | null
          id?: number
          marca?: string | null
          model?: string | null
          price?: number | null
          serial?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Productos_clienteId_fkey"
            columns: ["clienteId"]
            isOneToOne: false
            referencedRelation: "Clientes"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

 type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

 type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

 type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

}
