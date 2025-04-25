

// Envio do formulário direto para o Google Sheets
// link para todos poderem vizualizar:
//https://docs.google.com/spreadsheets/d/1KWSbI3XeaGIGq8ByW1sB_Y6bXKINvYGRDXqm_1RNqHA/edit?gid=0#gid=0

const scriptURL = 'https://script.google.com/macros/s/AKfycbx0jXvoBBl4rQfCKYdUiDeS60ecFz4BNzv02z3o4cUVfB3cn_iITuCMXcWeG74WMnCP6A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()

// Gera a data/hora atual e atribui ao campo oculto
const agora = new Date();
const dataHoraFormatada = agora.toLocaleString('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'short'
});
document.getElementById('DataHora').value = dataHoraFormatada;


  fetch(scriptURL, { method: 'POST', body: new FormData(form)})

  .then(response => alert("Sua solicitação foi enviada com sucesso, click em ok para acessar o conteúdo." ))
  .then(() => { window.location.href = 'https://ed.escoladnc.com/formacoes-g/?utm_source=adwords&utm_medium=paid&utm_campaign=hr-ga-geral-312-1&utm_content=hr-ga-geral-312-1-3&utm_term=escola%20dnc&utm_device=c&utm_term=escola%20dnc&utm_campaign=%5B312%5D%5BOP%5D%5BHR%5D%5BGeral%5D%5BSearch%5D&utm_source=adwords&utm_medium=ppc&hsa_acc=1620955800&hsa_cam=21542018591&hsa_grp=165520193733&hsa_ad=722075255461&hsa_src=g&hsa_tgt=kwd-1438800820250&hsa_kw=escola%20dnc&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gbraid=0AAAAACl0Hb2DxP9q9GVmRn5xm2dowUAl_&gclid=EAIaIQobChMI65_l08PxjAMVWpjuAR2ykQppEAAYASAAEgKNivD_BwE' })
  .catch(error => console.error('Error!', error.message))
})