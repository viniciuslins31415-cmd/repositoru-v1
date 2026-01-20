import { supabase } from '../config/supabase.js'

export async function inserirFilme(dados) {
  const { data, error } = await supabase
    .from('filmes')
    .insert([dados])
    .select()

  if (error) throw error
  return data
}

export async function listarFilmes() {
  const { data, error } = await supabase
    .from('filmes')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function removerFilme(id) {
  const { data, error } = await supabase
    .from('filmes')
    .delete()
    .eq('id', id)
    .select()

  if (error) throw error
  if (!data || data.length === 0) {
    throw new Error('Filme não encontrado')
  }

  return data
}

