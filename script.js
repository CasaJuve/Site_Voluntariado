const entidades = [
  {nome:'Lar Beneficente S.Jorge',foco:'Idosos',localizacao:'Rua Gil Vicente, entrada 3, piso 4, 4800-151',horario:'Segunda a Sábado: Período da tarde',responsavel:'Sandra Ribeiro',email:'geral@larsaojorge.pt',contacto:'915 239 727',missao:'Oferecer uma solução residencial, prestando um serviço de qualidade adequado a cada cliente de forma controlada, normalizada, rigorosa e solidária. Promover o bem-estar biopsicossocial, valorizando o clima de afeto, cuidar de cada cliente com respeito e dignidade.',requisitos:'Jovens dinâmicos, com capacidade de perceção das dificuldades e necessidades do nosso público. Respeitadores, assíduos e responsáveis.'},
  {nome:'Centro Social Paroquial de Donim',foco:'Crianças',localizacao:'Largo da Igreja nº4',horario:'Segunda a Sexta: Período da manhã',responsavel:'Ana Lourenço',email:'centrodonim@gmail.com',contacto:'927739235',missao:'IPSS - Instituição Particular de Solidariedade Social, desenvolvimento de trabalho com crianças de creche e CATL.',requisitos:'Responsabilidade, respeito, assiduidade e gosto no trabalho com crianças.'},
  {nome:'Grupo Cultural e Recreativo da Cruz de Pedra',foco:'Crianças',localizacao:'Rua Manuel Tomás, n.º 159/161, 4835-071 Guimarães',horario:'Segunda a Sexta: Período da manhã',responsavel:'Juliana Amaral',email:'cruzdepedra1969@gmail.com',contacto:'916274197',missao:'Promover a cultura, o convívio e a participação cívica da comunidade local, preservando tradições e dinamizando iniciativas sociais e recreativas abertas à população.',requisitos:'Disponibilidade pontual para apoio em eventos. Sentido de responsabilidade e espírito de equipa. Não são exigidos requisitos específicos.'},
  {nome:'Centro Hípico Pena Brava',foco:'Animais',localizacao:'Rua da Pena Brava, 4810-698 Guimarães',horario:'Terça a Sábado: Período da manhã',responsavel:'Elisa Santos',email:'geral@chpenabrava.com',contacto:'931634046',missao:'Respeito pelos cavalos.',requisitos:''},
  {nome:'Santa Casa da Misericórdia',foco:'Idosos',localizacao:'Rua da Rainha D. Maria II, nº48, 2º andar',horario:'Segunda a Sexta: Período da tarde',responsavel:'Ana Paula Oliveira',email:'ana.oliveira@scmguimaraes.com',contacto:'912301224',missao:'Satisfazer as carências sociais, adequando ao contexto de lares. A missão será colmatar situações de solidão e proporcionar bem-estar ao idoso.',requisitos:'Ter empatia e saber ouvir.'},
  {nome:'Casa de Caldelas',foco:'Idosos',localizacao:'Travessa do Souto, nº245, 4805-164 Guimarães',horario:'Segunda: Período da tarde | Terça a Sábado: Período da manhã',responsavel:'Cátia Doellinger',email:'geral@casadecaldelas.pt',contacto:'253578244',missao:'',requisitos:''},
  {nome:'ASPEV – Associação Social de Pevidém Vida a Cores',foco:'Idosos e Crianças',localizacao:'Rua do Barreiro de Cima, nº353',horario:'Segunda a Sexta: Período da tarde',responsavel:'Sílvia Fernandes',email:'aspev.vidaacores@gmail.com',contacto:'932040624',missao:'Ser uma instituição próxima e humana, que faz a diferença na vida das pessoas e na comunidade, promovendo o bem-estar, a dignidade e a felicidade de idosos, crianças e famílias.',requisitos:'Jovens com gosto por trabalhar com pessoas, nomeadamente crianças e idosos.'},
  {nome:'Clube Desportivo Xico Andebol',foco:'Crianças',localizacao:'Rua Alfredo Pimenta, 4810-420, Alameda Pavilhão Desportivo Francisco de Holanda',horario:'Segunda a Sábado: Período da tarde',responsavel:'Mauro Fernandes',email:'Geral@cdxico.pt',contacto:'962877387',missao:'Promover e difundir a prática desportiva, cultural e recreativa junto da comunidade onde se insere.',requisitos:''},
  {nome:'Tempo Livre',foco:'Jovens',localizacao:'Multiusos Guimarães – Alameda Cidade de Lisboa',horario:'Segunda a Sábado: Período da tarde',responsavel:'Amadeu Portilha',email:'amadeuportilha@tempolivre.pt',contacto:'962877056',missao:'',requisitos:''},
  {nome:'Encontro de Saberes',foco:'Idosos',localizacao:'Avenida da Igreja nº2008, 48805-570',horario:'Segunda a Sexta: Período da tarde',responsavel:'Andreia Carvalho',email:'centrospencontrodesaberes@gmail.com',contacto:'927427729',missao:'Combater a solidão e manter os idosos ativos.',requisitos:''},
  {nome:'União das Freguesias de Oliveira, São Paio e São Sebastião',foco:'Idosos',localizacao:'Alameda de S. Dâmaso, Edifício S. Francisco Centro, nº65, 4810-286 Guimarães',horario:'Segunda a Sexta: Período da tarde',responsavel:'Diogo Rebelo Lopes',email:'presidente@ufcidadeguimaraes.com',contacto:'928 203 882',missao:'SERVIR.',requisitos:''},
  {nome:'AE Francisco de Holanda',foco:'Portadores de deficiência',localizacao:'Agrupamento de Escolas Francisco de Holanda, Alameda Dr. Alfredo Pimenta, 4814-528, Guimarães',horario:'Segunda a Sexta: Período da manhã',responsavel:'Rosalina Pinheiro',email:'direcao@esfh.pt',contacto:'253540130',missao:'Educação.',requisitos:''},
  {nome:'Centro Social D. Manuel Monteiro Castro',foco:'Crianças',localizacao:'Rua Pe. João Moreira Leite, nº1799, 4800-611, Guimarães',horario:'Segunda a Sexta: Período da tarde',responsavel:'Nadine Ribeiro',email:'c.s.m.m.castro@sapo.pt',contacto:'253471201',missao:'Assegurar serviços de qualidade a nível comunitário.',requisitos:''},
  {nome:'Associação Braços de Afeto',foco:'Idosos',localizacao:'Rua da Murteira, nº98, Longos Santa Cristina',horario:'Segunda a Sexta: Período da tarde',responsavel:'Cidália Batista',email:'bracosdafetos.associacao@gmail.com',contacto:'966518573',missao:'Apoio social e comunitário, destacando-se como um centro de convívio, particularmente para a população sénior.',requisitos:'Jovens animados e que gostem de idosos.'},
  {nome:'CERCIGUI',foco:'Portadores de deficiência',localizacao:'Rua Comendador Joaquim de Sousa Oliveira, nº525, 4810-274, Guimarães',horario:'Segunda a Sexta: Período da manhã',responsavel:'Virgínia Fernandes',email:'diretora.executiva@cercigui.pt',contacto:'966527289',missao:'Promover a inclusão social da pessoa com deficiência, atuando de acordo com o seu Código de Ética.',requisitos:'Ter 18 anos (16 com autorização dos pais). Responsabilidade, empatia, paciência e respeito pela diferença.'},
  {nome:'Centro Social e Paroquial Santa Cristina de Serzedelo',foco:'Idosos',localizacao:'Largo do Mosteiro, nº9',horario:'Segunda a Sexta: Período da manhã',responsavel:'Raquel Moreira',email:'csp.cerzedelo@gmail.com',contacto:'253531792',missao:'Prestar cuidados a idosos com dependência.',requisitos:''},
  {nome:'Cruz Vermelha Portuguesa – Delegação de Guimarães',foco:'Jovens',localizacao:'Rua Camilo Castelo Branco, nº1, r/C 4810-435, Guimarães',horario:'Segunda a Sexta: Período da manhã',responsavel:'Catarina Macedo',email:'dguimaraes.cmacedo@cruzvermelha.org.pt',contacto:'253 412 522',missao:'Prestar assistência humanitária e social, em especial aos mais vulneráveis, prevenindo e reparando o sofrimento e contribuindo para a defesa da vida, da saúde e da dignidade humana.',requisitos:'Jovens entre os 15 e 35 anos que queiram desenvolver as suas competências através do voluntariado.'},
  {nome:'Fundação BomFim',foco:'Crianças',localizacao:'Rua da Boa Vista, nº152, Braga, 4700-146',horario:'Sábado: Parte da tarde',responsavel:'Michele Braga',email:'info@bomfim.org',contacto:'253271267',missao:'Ação Social.',requisitos:''},
  {nome:'Centro Social Cultural Desportivo e Recreativo de Vila Nova de Sande',foco:'Crianças',localizacao:'Rua da Escola, nº237, 4805-566, Vila Nova de Sande',horario:'Segunda a Sábado: Período da manhã | Quinta e Sexta: Período da tarde',responsavel:'Maria José Rebelo',email:'geral@centrosocialvns.org',contacto:'253478492',missao:'IPSS – Instituição Particular de Solidariedade Social.',requisitos:''},
  {nome:'Agrupamento de Escolas de Abação',foco:'Portadores de deficiência',localizacao:'R. da Vessadinha, Nº216, 4810-675, Abação (São Tomé)',horario:'Segunda a Sexta: Período da manhã',responsavel:'Sara Brandão',email:'sara.brandao@agrupamentoabacao.pt',contacto:'965113287',missao:'Ocupação do tempo livre de férias, através do acompanhamento nas rotinas e desenvolvimento de atividades de alunos de pré-escolar e 1º CEB, bem como de jovens com medidas adicionais.',requisitos:''},
  {nome:'Junta de Freguesia de Infantas',foco:'Crianças',localizacao:'Rua do Montinho, nº59, 4810-620, Infantas',horario:'Segunda a Quinta: Período da tarde | Sexta: Período da manhã',responsavel:'Patrícia Lemos',email:'jfinfantas@gmail.com',contacto:'964336244',missao:'Educação.',requisitos:''},
  {nome:'Real Irmandade de N. Sra. da Consolação e Santos Passos',foco:'Idosos',localizacao:'Rua S. Nicolau dos Estudantes, nº65',horario:'Segunda a Sábado: Período da tarde',responsavel:'Diana Leite',email:'aslardosantospassos@gmail.com',contacto:'963632736',missao:'',requisitos:''},
  {nome:'APCG',foco:'Portadores de deficiência',localizacao:'Rua Nossa Senhora de Fátima, nº140, Penselo',horario:'Terça e Quinta: Período da manhã',responsavel:'Joaquim Oliveira',email:'geral@apcg.pt',contacto:'253 559 120',missao:'Promover a autonomia e funcionalidade das pessoas com deficiência.',requisitos:'Proativos, responsáveis; com preferência para trabalhar com adultos com deficiência; disponibilidade para atividades lúdicas e recreativas.'},
  {nome:'Associação Desportos de Combate KTF de Guimarães',foco:'Jovens',localizacao:'Praça Heróis da Fundação 80, 4810-525 Guimarães',horario:'',responsavel:'Ivo Cardoso',email:'ivopinto33@gmail.com',contacto:'913 011 319',missao:'Dar a conhecer os desportos de combate e inclusão de todos.',requisitos:''},
  {nome:'Centro Social Padre Adelino Silva, IPSS',foco:'Idosos',localizacao:'Largo Domingos Leite de Castro, nº191',horario:'Sábado: Período da tarde',responsavel:'Rita Novais',email:'csp.adelinosilva@gmail.com',contacto:'928 280 741',missao:'Facultar serviços de apoio e proteção a todos os cidadãos, com vista à integração social, através de uma intervenção personalizada.',requisitos:'Motivação e disponibilidade para colaborar em atividades de animação sociocultural com a população sénior.'},
  {nome:'GTEAM FC – Guimarães Football Club',foco:'Jovens',localizacao:'Variável, centro de Guimarães',horario:'Segunda a Sexta: Período da manhã e da tarde',responsavel:'Adriana Lemos',email:'gteamfutebol@gmail.com',contacto:'935 319 348',missao:'Promover o desenvolvimento desportivo, pessoal e social através do desporto, criando oportunidades acessíveis e inclusivas para crianças e jovens, com especial foco no futsal feminino.',requisitos:'Espírito de equipa, sentido de responsabilidade e gosto pelo desporto e trabalho com crianças/jovens.'},
  {nome:'Associação Social Ambiental Quinta Das Manas',foco:'Animais e Crianças',localizacao:'Rua da Escola nº1893, Quinta das Manas',horario:'Segunda a Sexta: Período da manhã e da tarde',responsavel:'Luís Machado',email:'info@quintadasmanas.pt',contacto:'918 132 388',missao:'Acompanhar os monitores que fazem as visitas com as escolas.',requisitos:'Mínimo 18 anos.'},
];

const focoColors = {
  'Idosos':'#7C3AED','Crianças':'#F59E0B','Jovens':'#0EA5E9',
  'Animais':'#10B981','Portadores de deficiência':'#6366F1','Ação Social':'#EF4444'
};

function getFocoColor(foco){
  const parts = foco.split(/\s+e\s+/i).map(f=>f.trim());
  return focoColors[parts[0]] || '#16A34A';
}

function getFocoPrimary(foco){
  return foco.split(/\s+e\s+/i).map(f=>f.trim())[0];
}

let currentFilter = '';
let currentSearch = '';
let sortAZ = true;
let favorites = JSON.parse(localStorage.getItem('favs')||'[]');
let enrolled = JSON.parse(localStorage.getItem('enrolled')||'[]');

function getFiltered(){
  let list = [...entidades];
  if(currentFilter){
    list = list.filter(e=>{
      const parts = e.foco.split(/\s+e\s+/i).map(f=>f.trim());
      return parts.some(p=>p.toLowerCase()===currentFilter.toLowerCase());
    });
  }
  if(currentSearch){
    list = list.filter(e=>e.nome.toLowerCase().includes(currentSearch.toLowerCase()));
  }
  list.sort((a,b)=>sortAZ?a.nome.localeCompare(b.nome,'pt'):b.nome.localeCompare(a.nome,'pt'));
  return list;
}

function renderCards(){
  const list = getFiltered();
  const grid = document.getElementById('cardsGrid');
  const count = document.getElementById('resultsCount');
  count.textContent = list.length + ' resultado' + (list.length!==1?'s':'');
  if(list.length===0){
    grid.innerHTML='<div class="no-results" style="grid-column:1/-1"><div class="no-results-emoji">🔍</div><p>Nenhuma instituição encontrada.</p></div>';
    return;
  }
  grid.innerHTML = list.map(e=>{
    const color = getFocoColor(e.foco);
    const isFav = favorites.includes(e.nome);
    const focoDisplay = e.foco.length > 22 ? getFocoPrimary(e.foco) : e.foco;
    return `<div class="entity-card" onclick="openModal('${e.nome.replace(/'/g,"\\'")}')">
      <div class="card-accent" style="background:${color}"></div>
      <div class="card-body">
        <div class="card-top">
          <div class="card-foco-badge" style="background:${color}18;color:${color}">${focoDisplay}</div>
          <button class="card-fav ${isFav?'active':''}" onclick="toggleFav(event,'${e.nome.replace(/'/g,"\\'")}')">
            ${isFav?'❤️':'🤍'}
          </button>
        </div>
        <div class="card-name">${e.nome}</div>
        <div class="card-info">
          ${e.localizacao?`<div class="card-info-row"><span class="card-info-icon">📍</span><span>${e.localizacao}</span></div>`:''}
          ${e.horario?`<div class="card-info-row"><span class="card-info-icon">🕐</span><span>${e.horario}</span></div>`:''}
          ${e.responsavel?`<div class="card-info-row"><span class="card-info-icon">🧑</span><span>${e.responsavel}</span></div>`:''}
        </div>
        <div class="card-footer">
          <span class="card-btn">Ver detalhes →</span>
          <span class="card-arrow">›</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleFav(evt, nome){
  evt.stopPropagation();
  if(favorites.includes(nome)){
    favorites=favorites.filter(f=>f!==nome);
  } else {
    favorites.push(nome);
  }
  localStorage.setItem('favs',JSON.stringify(favorites));
  renderCards();
}

function openModal(nome){
  const e = entidades.find(x=>x.nome===nome);
  if(!e) return;
  const color = getFocoColor(e.foco);
  const isEnrolled = enrolled.includes(nome);

  document.getElementById('modalFoco').textContent = e.foco;
  document.getElementById('modalFoco').style.cssText = `background:${color}18;color:${color};display:inline-flex;align-items:center;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700;margin-bottom:10px`;
  document.getElementById('modalTitle').textContent = e.nome;

  const details = [
    e.missao ? ['📋','Missão',e.missao] : null,
    e.localizacao ? ['📍','Localização',e.localizacao] : null,
    e.horario ? ['🕐','Horário',e.horario] : null,
    e.responsavel ? ['🧑','Responsável',e.responsavel] : null,
    e.email ? ['📧','Email',e.email] : null,
    e.contacto ? ['📞','Contacto',e.contacto] : null,
    e.requisitos ? ['ℹ️','Requisitos',e.requisitos] : null,
  ].filter(Boolean);

  const emailBtn = e.email ? `<button class="modal-email-btn" onclick="sendEmail('${e.email}','${e.nome.replace(/'/g,"\\'")}')">📧 Enviar Email</button>` : '';

  document.getElementById('modalBody').innerHTML = `
    ${details.map(([icon,label,val])=>`
      <div class="modal-detail">
        <div class="modal-detail-icon-wrap">${icon}</div>
        <div>
          <div class="modal-detail-label">${label}</div>
          <div class="modal-detail-value ${!val?'empty':''}">${val||'—'}</div>
        </div>
      </div>`).join('')}
    <div class="modal-actions">
      ${emailBtn}
      <button class="modal-enroll-btn ${isEnrolled?'enrolled':''}" id="enrollBtn" onclick="enrollModal('${nome.replace(/'/g,"\\'")}')">
        ${isEnrolled?'✓ Inscrito!':'💚 Mostrar Interesse'}
      </button>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function enrollModal(nome){
  if(!enrolled.includes(nome)){
    enrolled.push(nome);
    localStorage.setItem('enrolled',JSON.stringify(enrolled));
    const btn = document.getElementById('enrollBtn');
    if(btn){btn.textContent='✓ Inscrito!';btn.classList.add('enrolled');}
  }
}

function sendEmail(email, nome){
  const body = encodeURIComponent(`Olá,\n\nO meu nome é [O TEU NOME] e estou a entrar em contacto porque tenho interesse em fazer voluntariado na vossa instituição.\n\nTive conhecimento da vossa organização através da plataforma Voluntariados, tendo ficado sensibilizado(a) para o trabalho desenvolvido e o impacto positivo que promovem na comunidade.\n\nEstaria disponível para saber mais informações sobre as oportunidades disponíveis, e de que forma posso contribuir.\n\nFico a aguardar o vosso contacto.\n\nCom os melhores cumprimentos,\n\n[O TEU NOME]\n[Contacto Telefónico]`);
  const subject = encodeURIComponent('Interesse em Voluntariado');
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow='';
}

function closeModalOnBg(evt){
  if(evt.target===document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown',e=>{if(e.key==='Escape') closeModal()});

document.querySelectorAll('.filter-chip').forEach(btn=>{
  btn.addEventListener('click',function(){
    document.querySelectorAll('.filter-chip').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.dataset.foco;
    renderCards();
    document.getElementById('instituicoes').scrollIntoView({behavior:'smooth',block:'start'});
  });
});

document.getElementById('searchInput').addEventListener('input',function(){
  currentSearch=this.value;
  renderCards();
});

document.getElementById('sortBtn').addEventListener('click',function(){
  sortAZ=!sortAZ;
  this.textContent=sortAZ?'⬆ A→Z':'⬇ Z→A';
  renderCards();
});

function setFilter(foco){
  document.querySelectorAll('.filter-chip').forEach(b=>{
    b.classList.toggle('active', b.dataset.foco===foco);
  });
  currentFilter=foco;
  renderCards();
  setTimeout(()=>document.getElementById('instituicoes').scrollIntoView({behavior:'smooth'}),100);
  return false;
}

function submitForm(){
  const nome = document.getElementById('f_nome').value.trim();
  const email = document.getElementById('f_email').value.trim();
  if(!nome||!email){alert('Preenche o nome e o email da instituição.');return;}
  document.getElementById('formWrap').style.display='none';
  document.getElementById('successMsg').style.display='block';
}

renderCards();
  const email = document.getElementById('f_email').value.trim();
  if(!nome||!email){alert('Preenche o nome e o email da instituição.');return;}
  document.getElementById('formWrap').style.display='none';
  document.getElementById('successMsg').style.display='block';
}

renderCards();
