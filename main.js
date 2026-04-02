const sb = window.supabase.createClient(
  'https://ydvszoqmpwqedleeavdk.supabase.co',
  'sb_publishable_50AoJc_3Rb1QOd4IBzg4HQ_EyqrK-CZ'
)


async function loadSamples() {
    const { data, error } = await sb
    .from('samples')
    .select('*')
    
    console.log('DATA:', data)
    console.log('ERROR:', error)
}

console.log('pete')
loadSamples()