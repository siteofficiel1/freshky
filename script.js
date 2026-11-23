(() => {
  'use strict';
  const messages = {
    fr: {
      top: 'FRESHKY · PLEASURE & HEALTH · ALGÉRIE',
      navHome:'Accueil', navProducts:'Nos produits', navStory:'Notre histoire', navMission:'Notre mission', navContact:'Contact', getInTouch:'Nous contacter',
      heroBadge:'KÉFIR DE LAIT · FRESHKY', heroTitle:'Le plaisir du kéfir, <span>signé Freshky.</span>', heroDesc:'Découvrez nos kéfirs de lait nature et aromatisés, imaginés pour associer plaisir et nouvelles saveurs.',
      discover:'Découvrir nos produits', ourStory:'Notre histoire', heroNote:'Nature · Mangue · Miel — bouteilles de 250 ml', float:'Pleasure & Health',
      originTime:'Octobre 2025',originTimeDesc:'Nos premières expériences du kéfir',pageTime:'Avril 2026',pageTimeDesc:'Lancement de Grains de kéfir DZ',flavours:'3 saveurs',flavoursDesc:'Nature, mangue et miel',
      productsEyebrow:'LA GAMME FRESHKY',productsHeading:'Nos kéfirs de lait',productsLead:'Trois saveurs à découvrir, du kéfir nature aux variantes aromatisées à la mangue et au miel.',productKind:'KÉFIR DE LAIT',
      natureName:'Freshky Nature',natureDesc:'Le kéfir de lait dans sa version nature, pour découvrir son goût authentique.',mangueName:'Freshky Mangue',mangueDesc:'Une version aromatisée à la mangue, aux notes délicieusement fruitées.',mielName:'Freshky Miel',mielDesc:'Une version aromatisée au miel, pour une touche de douceur.',ask:'Demander des informations',productsNote:'Pour toute information sur nos produits, contactez directement Freshky.',
      storyOrigin:'NOTRE PARCOURS',storyCardTitle:"De premières expériences à l'idée Freshky.",storyCardDesc:'Une histoire qui a commencé par la découverte et la préparation du kéfir de lait.',storyEyebrow:'COMMENT TOUT A COMMENCÉ',storyHeading:'Notre histoire',
      storyText:'L’idée de Freshky a commencé à prendre forme en octobre 2025, avec nos premières expériences dans la préparation du kéfir de lait. En avril 2026, nous avons lancé notre page Grains de kéfir DZ, ce qui nous a permis de développer notre expérience et de mieux connaître les attentes des consommateurs. Cette évolution nous a conduites à envisager la création de Freshky et le développement de produits alimentaires à base de kéfir.',
      dateOne:'Octobre 2025 · Premiers essais',dateTwo:'Avril 2026 · Grains de kéfir DZ',
      missionEyebrow:"NOTRE RAISON D'ÊTRE",missionHeading:'Mission de la startup',missionText:'La mission de Freshky est de développer et de commercialiser une gamme de produits alimentaires à base de kéfir, en commençant par le kéfir de lait nature et aromatisé, puis en proposant progressivement d’autres produits adaptés aux besoins et aux attentes du marché algérien.',
      missionQuote:"Faire évoluer l'univers du kéfir à travers des produits pensés pour le marché algérien.",
      contactEyebrow:'RESTONS EN CONTACT',contactHeading:'Vous souhaitez échanger avec Freshky ?',contactLead:"Pour vos questions sur nos produits, vos demandes d'information ou une prise de contact, écrivez-nous ou appelez-nous directement.", emailLabel:'E-mail officiel',phoneLabel:'Téléphone',contactHint:'Freshky · Startup de produits alimentaires à base de kéfir · Algérie',
      footerDesc:'Une startup algérienne dédiée au développement de produits alimentaires à base de kéfir.',footerExplore:'Explorer',footerContact:'Coordonnées officielles',footerArea:'Algérie · Français / العربية'
    },
    ar: {
      top:'فريشكي · المتعة والصحة · الجزائر',
      navHome:'الرئيسية',navProducts:'منتجاتنا',navStory:'قصتنا',navMission:'مهمتنا',navContact:'اتصل بنا',getInTouch:'تواصل معنا',
      heroBadge:'كفير الحليب · FRESHKY',heroTitle:'متعة الكفير، <span>بتوقيع Freshky.</span>',heroDesc:'اكتشفوا كفير الحليب الطبيعي والمنكّه من Freshky، بنكهات تجمع بين المتعة والتنوّع.',
      discover:'اكتشفوا منتجاتنا',ourStory:'قصتنا',heroNote:'طبيعي · مانجو · عسل — عبوات 250 مل',float:'Pleasure & Health',
      originTime:'أكتوبر 2025',originTimeDesc:'بداية تجاربنا في تحضير الكفير',pageTime:'أبريل 2026',pageTimeDesc:'إطلاق صفحة Grains de kéfir DZ',flavours:'3 نكهات',flavoursDesc:'طبيعي، مانجو وعسل',
      productsEyebrow:'مجموعة فريشكي',productsHeading:'منتجات كفير الحليب',productsLead:'ثلاث نكهات لاكتشافها: الكفير الطبيعي، والكفير بنكهة المانجو، والكفير بنكهة العسل.',productKind:'كفير الحليب',
      natureName:'Freshky طبيعي',natureDesc:'كفير الحليب الطبيعي لمن يرغب في اكتشاف مذاقه الأصلي.',mangueName:'Freshky مانجو',mangueDesc:'كفير الحليب بنكهة المانجو ولمسة فاكهية مميزة.',mielName:'Freshky عسل',mielDesc:'كفير الحليب بنكهة العسل ولمسة من الحلاوة.',ask:'طلب معلومات',productsNote:'للحصول على معلومات عن منتجاتنا، يرجى التواصل مباشرة مع Freshky.',
      storyOrigin:'مسيرتنا',storyCardTitle:'من أولى التجارب إلى فكرة Freshky.',storyCardDesc:'قصة بدأت بالتعرّف على كفير الحليب وتجربة تحضيره.',storyEyebrow:'كيف بدأت قصتنا',storyHeading:'قصتنا',
      storyText:'بدأت فكرة Freshky تتبلور في أكتوبر 2025، من خلال تجاربنا الأولى في تحضير كفير الحليب. وفي أبريل 2026 أطلقنا صفحتنا Grains de kéfir DZ، مما أتاح لنا تطوير خبرتنا والتعرّف أكثر على تطلعات المستهلكين. وقد قادتنا هذه التجربة إلى التفكير في إنشاء Freshky وتطوير منتجات غذائية قائمة على الكفير.',
      dateOne:'أكتوبر 2025 · أولى التجارب',dateTwo:'أبريل 2026 · Grains de kéfir DZ',
      missionEyebrow:'هدفنا',missionHeading:'مهمة المؤسسة الناشئة',missionText:'تتمثل مهمة Freshky في تطوير وتسويق مجموعة من المنتجات الغذائية القائمة على الكفير، بدءًا بكفير الحليب الطبيعي والمنكّه، ثم تقديم منتجات أخرى تدريجيًا تتناسب مع احتياجات وتطلعات السوق الجزائرية.',
      missionQuote:'تطوير عالم الكفير عبر منتجات تستجيب لاحتياجات السوق الجزائرية.',
      contactEyebrow:'لنبقَ على تواصل',contactHeading:'هل ترغبون في التواصل مع Freshky؟',contactLead:'للاستفسار عن منتجاتنا أو طلب معلومات إضافية أو التواصل معنا، يمكنكم مراسلتنا أو الاتصال بنا مباشرة.',emailLabel:'البريد الإلكتروني الرسمي',phoneLabel:'رقم الهاتف',contactHint:'Freshky · مؤسسة ناشئة للمنتجات الغذائية القائمة على الكفير · الجزائر',
      footerDesc:'مؤسسة ناشئة جزائرية تُعنى بتطوير منتجات غذائية قائمة على الكفير.',footerExplore:'استكشف',footerContact:'بيانات الاتصال الرسمية',footerArea:'الجزائر · العربية / Français'
    }
  };
  const toggle = document.getElementById('language-toggle');
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  let language = 'fr';
  try { language = sessionStorage.getItem('freshky-lang') === 'ar' ? 'ar' : 'fr'; } catch (_) { /* private browsing */ }
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next;
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
    for (const el of document.querySelectorAll('[data-i18n]')) {
      const val = messages[next][el.dataset.i18n];
      if (typeof val === 'string') el.textContent = val;
    }
    for (const el of document.querySelectorAll('[data-i18n-html]')) {
      const val = messages[next][el.dataset.i18nHtml];
      if (typeof val === 'string') el.innerHTML = val;
    }
    toggle.textContent = next === 'fr' ? 'العربية' : 'Français';
    toggle.setAttribute('aria-pressed', next === 'ar' ? 'true' : 'false');
    toggle.setAttribute('aria-label', next === 'fr' ? 'Passer en arabe' : 'التحويل إلى الفرنسية');
    document.title = next === 'ar' ? 'Freshky — كفير الحليب | Pleasure & Health' : 'Freshky — Pleasure & Health | Kéfir de lait';
    try { sessionStorage.setItem('freshky-lang',next); } catch (_) { /* private browsing */ }
  }
  function closeMenu() { nav.classList.remove('is-open'); document.body.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded','false'); menuBtn.textContent = '☰'; }
  toggle.addEventListener('click', () => setLanguage(language === 'fr' ? 'ar' : 'fr'));
  menuBtn.addEventListener('click', () => { const open = !nav.classList.contains('is-open'); nav.classList.toggle('is-open',open); document.body.classList.toggle('menu-open',open); menuBtn.setAttribute('aria-expanded',String(open)); menuBtn.textContent = open ? '✕' : '☰'; });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  setLanguage(language);
})();
