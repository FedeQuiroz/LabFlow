const supabase = window.supabase.createClient(
  'https://ydvszoqmpwqedleeavdk.supabase.co',
  'sb_publishable_50AoJc_3Rb1QOd4IBzg4HQ_EyqrK-CZ'
)

console.log('im here, im loading')

async function loadSamples() {
  const { data, error } = await supabase
    .from('samples')
    .select('*')

  console.log('DATA:', data)
  console.log('ERROR:', error)
}

loadSamples()