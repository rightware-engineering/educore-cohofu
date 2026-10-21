import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Building2, GraduationCap, Headset, Landmark, UserRoundCheck, Users, Wallet } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTenant } from '@/contexts/TenantContext';
import { SchoolBrand } from '@/components/brand/SchoolBrand';
import type { UserRole } from '@/types/roles';
import { ROLE_HOME } from '@/types/roles';

const ROLE_META: Record<UserRole, { label: string; description: string; icon: LucideIcon }> = {
  student: { label: 'Aluno', description: 'Notas, horário e percurso académico', icon: GraduationCap },
  guardian: { label: 'Encarregado', description: 'Acompanhamento dos educandos', icon: Users },
  teacher: { label: 'Professor', description: 'Turmas, avaliações e conteúdos', icon: BookOpen },
  pedagogy: { label: 'Pedagogia', description: 'Coordenação académica', icon: Landmark },
  executive: { label: 'Direcção', description: 'Visão institucional', icon: Building2 },
  reception: { label: 'Receção', description: 'Atendimento, informações e encaminhamentos', icon: Headset },
  secretary: { label: 'Secretaria', description: 'Matrículas e documentos', icon: UserRoundCheck },
  finance: { label: 'Finanças', description: 'Tesouraria e pagamentos', icon: Wallet },
};

function PathMark() {
  return <svg className="absolute inset-0 h-full w-full" viewBox="0 0 760 900" preserveAspectRatio="none" aria-hidden="true"><path d="M0 730H760" stroke="#F4A51C" strokeWidth="4" /><path d="M0 770L250 730H360L760 820" stroke="#FFCC55" strokeWidth="2" opacity=".8" /><path d="M140 900L350 730H410L600 900" fill="#174A78" /><path d="M245 900L375 730H390L500 900" fill="#F4A51C" /><path d="M0 150L180 0H290L0 300" fill="#123F6A" /><path d="M760 160L580 0H470L760 300" fill="#041C3C" opacity=".8" /></svg>;
}

export default function GenericTenantLogin() {
  const { activeTenant } = useTenant();
  const { login, isAuthenticated, role } = useAuth();
  const navigate = useNavigate();
  const availableRoles = useMemo(() => activeTenant.enabledRoles.filter((item) => ROLE_META[item]), [activeTenant.enabledRoles]);
  const [selectedRole, setSelectedRole] = useState<UserRole>(availableRoles[0] ?? 'student');
  const [pendingRole, setPendingRole] = useState<UserRole | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => { if (!availableRoles.includes(selectedRole) && availableRoles[0]) setSelectedRole(availableRoles[0]); }, [availableRoles, selectedRole]);
  useEffect(() => { if (pendingRole && isAuthenticated && role === pendingRole) { navigate(ROLE_HOME[pendingRole], { replace: true }); setPendingRole(null); } }, [pendingRole, isAuthenticated, role, navigate]);
  const submit = (event: React.FormEvent) => { event.preventDefault(); setPendingRole(selectedRole); login(email, password, selectedRole, true); };

  return <div className="min-h-screen bg-[#FAF8F3] text-[#082B56]"><div className="grid min-h-screen lg:grid-cols-[0.9fr,1.1fr]">
    <aside className="relative hidden min-h-screen overflow-hidden bg-[#082B56] text-white lg:flex lg:flex-col"><PathMark /><div className="relative z-10 flex flex-1 flex-col p-10 xl:p-14"><Link to="/" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/75 hover:text-white"><ArrowLeft className="h-4 w-4" /> Voltar ao site</Link><div className="mt-auto max-w-xl pb-10"><div className="mb-10 grid max-w-[390px] grid-cols-[.36fr_1fr] border-l-4 border-[#F4A51C] bg-[#123F6A] p-4"><div className="relative min-h-[150px] overflow-hidden border-r border-[#FFCC55]/60 bg-[#174A78]" aria-hidden="true"><div className="absolute bottom-0 h-2/3 w-full bg-[#F4A51C]" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} /></div><img src="/school/campus.webp" alt="Fachada do Colégio Horizonte do Futuro" className="h-full min-h-[150px] w-full object-contain" /></div><SchoolBrand variant="compact" imageClassName="h-20 w-20" /><p className="mt-8 border-l-2 border-[#F4A51C] pl-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#FFCC55]">Portal escolar · EduCore</p><h1 className="mt-4 max-w-xl font-heading text-5xl font-black leading-[0.96] tracking-[-0.065em] xl:text-7xl">Um horizonte<br /><span className="text-[#FFCC55]">de possibilidades.</span></h1><p className="mt-5 text-lg font-bold text-white">{activeTenant.branding.displayName}</p><p className="mt-5 max-w-lg text-base leading-7 text-white/75">O percurso continua aqui. Aceda à área digital destinada à sua função na escola.</p></div></div></aside>
    <main className="flex items-center justify-center px-5 py-12 sm:px-8 lg:px-12"><div className="w-full max-w-3xl"><div className="mb-8 flex items-center justify-between lg:hidden"><SchoolBrand /><Link to="/" className="text-xs font-semibold text-[#5B6B7B]">Site</Link></div><p className="border-l-2 border-[#F4A51C] pl-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#B87500]">Colégio Horizonte do Futuro / Portal</p><h2 className="mt-3 font-heading text-4xl font-black tracking-[-0.055em] text-[#082B56] sm:text-5xl">Bem-vindo ao<br />seu espaço.</h2><p className="mt-4 text-sm leading-6 text-[#5B6B7B]">Seleccione o perfil de acesso para continuar para o portal escolar.</p>
      <form onSubmit={submit} className="mt-7"><div className="grid gap-3 sm:grid-cols-2">{availableRoles.map(item => { const meta = ROLE_META[item]; const Icon = meta.icon; const selected = selectedRole === item; return <button key={item} type="button" onClick={() => setSelectedRole(item)} className={`flex min-h-[78px] items-center gap-3 border-l-4 p-4 text-left transition ${selected ? 'border-[#F4A51C] bg-[#082B56] text-white shadow-md' : 'border-[#D8C79E] bg-white hover:border-[#F4A51C]'}`}><Icon className={`h-5 w-5 shrink-0 ${selected ? 'text-[#FFCC55]' : 'text-[#B87500]'}`} /><span><span className="block text-sm font-bold">{meta.label}</span><span className={`mt-1 block text-xs ${selected ? 'text-white/65' : 'text-[#5B6B7B]'}`}>{meta.description}</span></span></button>; })}</div><div className="mt-6 grid gap-3 sm:grid-cols-2"><label className="grid gap-1.5 text-xs font-bold text-[#082B56]">Email<input value={email} onChange={e => setEmail(e.target.value)} type="email" autoComplete="username" placeholder="nome@escola.co.mz" aria-label="Email" className="h-12 rounded-lg border border-[#082B56]/15 bg-white px-4 text-sm font-normal outline-none transition focus:border-[#F4A51C] focus:ring-2 focus:ring-[#F4A51C]/20" /></label><label className="grid gap-1.5 text-xs font-bold text-[#082B56]">Palavra-passe<input value={password} onChange={e => setPassword(e.target.value)} type="password" autoComplete="current-password" placeholder="••••••••" aria-label="Palavra-passe" className="h-12 rounded-lg border border-[#082B56]/15 bg-white px-4 text-sm font-normal outline-none transition focus:border-[#F4A51C] focus:ring-2 focus:ring-[#F4A51C]/20" /></label></div><div className="mt-6 flex flex-col gap-3 border-t border-[#D8C79E] pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs leading-5 text-[#5B6B7B]">Uma experiência digital organizada para cada papel na comunidade escolar.</p><button disabled={!!pendingRole} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#F4A51C] px-6 text-sm font-extrabold text-[#082B56] transition hover:bg-[#FFCC55] disabled:opacity-60">{pendingRole ? 'A entrar…' : `Entrar como ${ROLE_META[selectedRole].label}`} {!pendingRole && <ArrowRight className="h-4 w-4" />}</button></div></form>
    </div></main>
  </div></div>;
}
