const sb = window.supabase.createClient(
  'https://ydvszoqmpwqedleeavdk.supabase.co',
  'sb_publishable_50AoJc_3Rb1QOd4IBzg4HQ_EyqrK-CZ'
)


async function loadSamples() {
  const { data } = await sb
    .from('samples')
    .select(`
      id,
      batch,
      products (product_name),
      stages (stage_name, stage_temp)
    `)

  data.forEach(s => {
    const row = `
      <tr id='${s.id}' class="clickable-row">
        <td>${s.products.product_name}</td>
        <td style="text-align: center;">${s.batch}</td>
        <td style="text-align: center;">${s.stages.stage_name} (${s.stages.stage_temp ?? '-'}°C)</td>
        <td style="text-align: center;">...</td>
      </tr>
    `
    document.getElementById('samplesBody').innerHTML += row
  })
}


loadSamples()

document.getElementById('samplesBody').addEventListener('click', (e) => {
  const row = e.target.closest('.clickable-row')
  if (row) {
    console.log(event.target.parentElement)
  }
})