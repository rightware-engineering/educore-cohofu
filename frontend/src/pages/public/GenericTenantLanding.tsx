import { useState } from 'react';
import { ArrowRight, BookOpen, GraduationCap, Menu, ShieldCheck, TrendingUp, UsersRound, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MEDIA = {
  logo: '/school/logo-horizonte.webp',
  campus: '/school/campus.webp',
  students: '/school/students.webp',
  classroom: '/school/classroom.webp',
  facilities: '/school/facilities.webp',
};

function HorizonSignature({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={compact ? 'pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full' : 'pointer-events-none absolute inset-0 h-full w-full'} viewBox="0 0 1440 520" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 440H1440" stroke="#F4A51C" strokeWidth="3" />
      <path d="M0 464H1440" stroke="#FFCC55" strokeWidth="1" opacity=".8" />
      <path d="M410 520L700 440L820 440L1080 520" fill="#123F6A" opacity=".82" />
      <path d="M520 520L735 440L785 440L930 520" fill="#F4A51C" opacity=".95" />
      <path d="M610 520L755 440L765 440L855 520" fill="#FAF8F3" opacity=".92" />
      {!compact && <>
        <path d="M104 0L0 130V350L300 440H0" fill="#174A78" opacity=".34" />
        <path d="M1336 0L1440 130V350L1140 440H1440" fill="#041C3C" opacity=".3" />
        <path d="M0 500L420 440" stroke="#FFFFFF" strokeWidth="1" opacity=".26" />
        <path d="M1440 500L1020 440" stroke="#FFFFFF" strokeWidth="1" opacity=".26" />
      </>}
    </svg>
  );
}

function SchoolPhoto({ src, alt, className = '', eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={`h-full w-full object-contain ${className}`} />;
}

function SchoolBrand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Colégio Horizonte do Futuro — início">
      <img src={MEDIA.logo} alt="Logótipo do Colégio Horizonte do Futuro" className="h-[51px] w-[59px] shrink-0 object-contain sm:h-[59px] sm:w-[67px]" />
      <span className={`text-[13px] font-extrabold uppercase leading-[1.14] tracking-[-0.02em] sm:text-[16px] ${inverse ? 'text-white' : 'text-[#082B56]'}`}>
        Colégio Horizonte<br />do Futuro
      </span>
    </Link>
  );
}

const highlights = [
  { icon: GraduationCap, title: 'Educação de Qualidade', description: 'Uma base sólida para grandes conquistas.' },
  { icon: UsersRound, title: 'Disciplina e Valores', description: 'Formação académica e humana.' },
  { icon: ShieldCheck, title: 'Ambiente Seguro', description: 'Um espaço cuidado para aprender e crescer.' },
  { icon: ArrowRight, title: 'Acompanhamento do Aluno', description: 'Mais perto de cada etapa do desenvolvimento.' },
];

const spaces = [
  { title: 'Salas de aula modernas', description: 'Espaços preparados para a aprendizagem.', icon: BookOpen, image: MEDIA.classroom, alt: 'Sala de aula apresentada no material do colégio' },
  { title: 'Infra-estrutura segura', description: 'Os espaços interiores do colégio.', icon: ShieldCheck, image: MEDIA.facilities, alt: 'Espaço interior apresentado no material do colégio' },
  { title: 'Ambiente confortável', description: 'Um espaço de acolhimento e aprendizagem.', icon: UsersRound, image: MEDIA.facilities, alt: 'Ambiente interior apresentado no material do colégio' },
];

export default function GenericTenantLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroFailed, setHeroFailed] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF8F3] font-body text-[#082B56]">
      <header className="relative z-40 bg-white shadow-[0_1px_8px_rgba(5,30,60,0.08)]">
        <div className="mx-auto flex h-[77px] max-w-[1560px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-[4.9%]">
          <SchoolBrand />
          <nav className="hidden items-center gap-8 text-[13px] font-bold xl:gap-10 lg:flex" aria-label="Navegação principal">
            <a href="#inicio" className="border-b-2 border-[#F4A51C] py-2 text-[#082B56]">Início</a>
            <a href="#sobre" className="py-2 transition hover:text-[#B87500]">Sobre Nós</a>
            <a href="#colegio" className="py-2 transition hover:text-[#B87500]">O Colégio</a>
            <a href="#galeria" className="py-2 transition hover:text-[#B87500]">Galeria</a>
            <a href="#contacto" className="py-2 transition hover:text-[#B87500]">Contacto</a>
          </nav>
          <Link to="/login" className="hidden min-h-11 shrink-0 items-center gap-3 rounded-xl bg-[#F4A51C] px-6 text-[13px] font-extrabold text-[#041C3C] transition hover:bg-[#FFCC55] sm:inline-flex">
            Aceder ao EduCore <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <button type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="horizonte-mobile-menu" onClick={() => setMenuOpen(value => !value)} className="ml-auto rounded-lg border border-[#082B56]/20 p-2.5 lg:hidden sm:ml-0">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        <nav id="horizonte-mobile-menu" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-t border-slate-100 bg-white px-6 py-5 shadow-xl lg:hidden`} aria-label="Menu móvel">
          {['Início', 'Sobre Nós', 'O Colégio', 'Galeria', 'Contacto'].map(label => <a key={label} href={`#${label === 'Início' ? 'inicio' : label === 'Sobre Nós' ? 'sobre' : label === 'O Colégio' ? 'colegio' : label === 'Galeria' ? 'galeria' : 'contacto'}`} onClick={() => setMenuOpen(false)} className="py-2.5 text-sm font-semibold">{label}</a>)}
          <Link to="/login" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex w-fit items-center gap-2 rounded-xl bg-[#F4A51C] px-5 py-3 text-sm font-bold text-[#041C3C]">Aceder ao EduCore <ArrowRight size={16} /></Link>
        </nav>
      </header>

      <main>
        <section id="inicio" aria-labelledby="horizonte-title" className="relative isolate min-h-[660px] overflow-hidden bg-[#082B56] text-white sm:min-h-[590px] lg:min-h-[570px]">
          <HorizonSignature />
          <div className="relative z-10 mx-auto grid min-h-[660px] max-w-[1560px] items-center gap-12 px-6 pb-24 pt-16 sm:min-h-[590px] sm:grid-cols-[1fr_.9fr] sm:px-10 sm:pb-24 sm:pt-12 lg:min-h-[570px] lg:grid-cols-[.95fr_1.05fr] lg:px-[5.1%]">
            <div className="max-w-[700px]">
              <p className="mb-5 border-l-2 border-[#F4A51C] pl-4 text-xs font-extrabold uppercase tracking-[.22em] text-[#FFCC55]">Caminhos para o Futuro</p>
              <h1 id="horizonte-title" className="font-heading text-[clamp(2.45rem,4.05vw,4.4rem)] font-extrabold leading-[1.05] tracking-[-0.045em]">O futuro do seu filho<br /><span className="text-[#FFCC55]">começa aqui!</span></h1>
              <p className="mt-5 max-w-[555px] text-[17px] font-medium leading-[1.45] text-white/90 sm:text-[20px]">Educação de qualidade, disciplina e valores para formar líderes do futuro.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#sobre" className="inline-flex min-h-[53px] items-center justify-center gap-3 rounded-xl bg-[#F4A51C] px-6 text-sm font-bold text-[#041C3C] shadow-sm transition hover:bg-[#FFCC55]">Conhecer o Colégio <ArrowRight size={19} /></a>
                <Link to="/login" className="inline-flex min-h-[53px] items-center justify-center gap-3 rounded-xl border border-white/75 bg-transparent px-6 text-sm font-bold text-white transition hover:bg-white/10">Aceder ao EduCore <ArrowRight size={18} /></Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[620px] justify-self-end border-l-4 border-[#F4A51C] bg-[#174A78]/70 p-5 shadow-2xl sm:p-7">
              <div className="grid min-h-[300px] grid-cols-[.34fr_1fr] items-stretch bg-[#041C3C] sm:min-h-[350px]">
                <div className="relative overflow-hidden border-r border-[#FFCC55]/50 bg-[#123F6A]" aria-hidden="true"><div className="absolute bottom-0 left-0 h-[55%] w-full bg-[#F4A51C]" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} /><div className="absolute bottom-0 left-1/2 h-[72%] w-px -rotate-[28deg] bg-white/80" /></div>
                {!heroFailed ? <img src={MEDIA.campus} alt="Fachada e alunos do Colégio Horizonte do Futuro" loading="eager" decoding="async" className="h-full w-full object-contain" onError={() => setHeroFailed(true)} /> : <SchoolPhoto src={MEDIA.campus} alt="Fachada do colégio" eager />}
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/20 pt-4"><p className="max-w-[360px] text-xs leading-5 text-white/75">Um percurso de descoberta, aprendizagem, evolução e conquista.</p><span className="font-heading text-sm font-extrabold uppercase tracking-[.18em] text-[#FFCC55]">Horizonte</span></div>
            </div>
          </div>
          <svg className="pointer-events-none absolute bottom-0 left-0 z-20 h-14 w-full" viewBox="0 0 1440 64" preserveAspectRatio="none" aria-hidden="true"><path d="M0 48H1440" stroke="#F4A51C" strokeWidth="4" /><path d="M0 56L420 40L820 52L1120 34L1440 46V64H0Z" fill="#FAF8F3" /></svg>
        </section>

        <section id="colegio" aria-label="Valores do colégio" className="relative z-10 bg-[#FAF8F3] px-5 pb-8 pt-9 sm:px-8 lg:px-[3.6%] lg:pb-10 lg:pt-12">
          <div className="mx-auto grid max-w-[1510px] grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-0">
            {highlights.map(({ icon: Icon, title, description }, index) => <div key={title} className={`flex items-start gap-3 border-l-2 border-[#F4A51C] px-4 sm:gap-4 md:px-6 ${index > 0 ? 'md:border-l-[#D8C79E]' : ''}`}><Icon className="mt-1 h-7 w-7 shrink-0 text-[#B87500] sm:h-8 sm:w-8" strokeWidth={1.8} /><div className="min-w-0"><h2 className="max-w-[190px] font-heading text-[12px] font-extrabold leading-[1.3] sm:text-[15px]">{title}</h2><p className="mt-1 max-w-[230px] text-[11px] leading-[1.42] text-[#5B6B7B] sm:text-[13px]">{description}</p></div></div>)}
          </div>
        </section>

        <section id="galeria" aria-labelledby="gallery-title" className="bg-[#FAF8F3] px-4 pb-[82px] sm:px-8 lg:px-[3.2%] lg:pb-[92px]"><h2 id="gallery-title" className="sr-only">Espaços e instalações do Colégio Horizonte do Futuro</h2><div className="mx-auto grid max-w-[1510px] gap-4 md:grid-cols-3">{spaces.map(({ image, alt, title, description, icon: Icon }) => <article key={title} className="group relative h-[245px] overflow-hidden rounded-xl border border-[#D8C79E] bg-[#123F6A] sm:h-[285px] lg:h-[250px]"><SchoolPhoto src={image} alt={alt} className="transition-transform duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-x-0 bottom-0 h-[145px] bg-gradient-to-t from-[#041C3C] via-[#041C3C]/75 to-transparent" aria-hidden="true" /><div className="absolute inset-x-0 bottom-0 flex items-end gap-3 border-t border-[#FFCC55]/60 px-4 pb-5 pt-3 text-white sm:px-5"><Icon size={26} className="shrink-0 text-[#FFCC55]" strokeWidth={1.7} /><div className="min-w-0"><h3 className="font-heading text-[15px] font-extrabold leading-[1.2] sm:text-[17px]">{title}</h3><p className="mt-1 text-xs leading-snug text-white/85">{description}</p></div></div></article>)}</div></section>

        <section id="sobre" className="bg-white px-6 py-[78px] sm:px-10 lg:px-[5.5%] lg:py-[92px]"><div className="mx-auto grid max-w-[1420px] items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-[6%]"><div><p className="mb-4 border-l-2 border-[#F4A51C] pl-3 text-[13px] font-bold uppercase tracking-[0.1em] text-[#B87500]">Sobre o Colégio</p><h2 className="font-heading text-[clamp(2.3rem,3.6vw,4rem)] font-extrabold leading-[1.12] tracking-[-0.045em]">Construindo sonhos,<br />formando líderes do futuro.</h2><span className="mt-6 block h-px w-[110px] bg-[#F4A51C]" /><p className="mt-6 max-w-[540px] text-base leading-[1.8] text-[#5B6B7B]">O Colégio Horizonte do Futuro apresenta uma proposta educativa centrada na aprendizagem, disciplina, valores e acompanhamento dos alunos.</p><p className="mt-4 max-w-[540px] text-base leading-[1.8] text-[#5B6B7B]">Cada etapa da vida escolar abre novas oportunidades para aprender e crescer.</p><a href="#contacto" className="mt-8 inline-flex items-center gap-2 border-b-2 border-[#F4A51C] pb-2 text-sm font-extrabold">Contactar o colégio <ArrowRight size={18} /></a></div><div className="relative h-[350px] overflow-hidden border-l-4 border-[#F4A51C] bg-[#123F6A] shadow-[0_20px_60px_rgba(6,43,82,.12)] sm:h-[480px]"><SchoolPhoto src={MEDIA.students} alt="Alunos do Colégio Horizonte do Futuro" /></div></div></section>

        <section id="contacto" className="relative overflow-hidden bg-[#082B56] px-6 py-16 text-white sm:px-10 lg:px-[5.5%]"><HorizonSignature compact /><div className="relative z-10 mx-auto flex max-w-[1420px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFCC55]">O percurso continua</p><h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">Acompanhar o presente.<br />Construir o amanhã.</h2><p className="mt-4 max-w-xl text-white/75">Alunos, encarregados de educação, professores e equipas escolares ligados através do portal EduCore.</p></div><div className="flex flex-wrap gap-3"><Link to="/login" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#F4A51C] px-5 text-sm font-bold text-[#041C3C]">Aceder ao portal EduCore <ArrowRight size={17} /></Link><a href="https://www.instagram.com/colegiohorizontedofuturo123" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/40 px-5 text-sm font-bold text-white">Contactar via Instagram <ArrowRight size={17} /></a></div></div></section>
      </main>

      <footer className="bg-[#041C3C] px-6 py-8 text-white/65 sm:px-10 lg:px-[5.5%]"><div className="mx-auto flex max-w-[1420px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><SchoolBrand inverse /><a href="#inicio" className="text-sm font-bold text-[#FFCC55]">Voltar ao início ↑</a><div className="text-left text-xs sm:text-right">Colégio Horizonte do Futuro · Moçambique<br />Experiência digital EduCore · RIGHTWARE</div></div></footer>
    </div>
  );
}
