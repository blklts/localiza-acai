'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

function maskCNPJ(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2}\.\d{3})(\d)/, '$1.$2')
    .replace(/^(\d{2}\.\d{3}\.\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
}

function validateCNPJ(cnpj: string): boolean {
  const d = cnpj.replace(/\D/g, '');
  if (d.length !== 14) return false;
  if (/^(\d)\1+$/.test(d)) return false;

  const sum = (weights: number[]) =>
    weights.reduce((acc, w, i) => acc + parseInt(d[i]) * w, 0);
  const mod = (s: number) => { const r = s % 11; return r < 2 ? 0 : 11 - r; };

  return (
    parseInt(d[12]) === mod(sum([5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2])) &&
    parseInt(d[13]) === mod(sum([6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]))
  );
}

const inputClass =
  'w-full mt-1 px-4 py-3 rounded-xl border border-accent-light bg-white text-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow';
const labelClass = 'block text-sm font-medium text-zinc-600';

export default function JunteSeANosForm() {
  const [cnpj, setCnpj] = useState('');
  const [cnpjError, setCnpjError] = useState('');
  const [nome, setNome] = useState('');
  const [arquivo, setArquivo] = useState<File | null>(null);

  function handleCnpjChange(e: ChangeEvent<HTMLInputElement>) {
    setCnpj(maskCNPJ(e.target.value));
    if (cnpjError) setCnpjError('');
  }

  function handleCnpjBlur() {
    if (cnpj.replace(/\D/g, '').length > 0 && !validateCNPJ(cnpj))
      setCnpjError('CNPJ inválido');
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateCNPJ(cnpj)) {
      setCnpjError('CNPJ inválido');
      return;
    }
    // TODO: submit to backend
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* CNPJ */}
      <div>
        <label htmlFor="cnpj" className={labelClass}>CNPJ</label>
        <input
          id="cnpj"
          type="text"
          inputMode="numeric"
          placeholder="00.000.000/0000-00"
          value={cnpj}
          onChange={handleCnpjChange}
          onBlur={handleCnpjBlur}
          className={`${inputClass} ${cnpjError ? 'border-red-400 focus:ring-red-400' : ''}`}
        />
        {cnpjError && <p className="mt-1 text-xs text-red-500">{cnpjError}</p>}
      </div>

      {/* Nome do estabelecimento */}
      <div>
        <label htmlFor="nome" className={labelClass}>Nome do estabelecimento</label>
        <input
          id="nome"
          type="text"
          placeholder="Nome do seu estabelecimento"
          value={nome}
          onChange={e => setNome(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Anexar documento */}
      <div>
        <span className={labelClass}>Anexar documento</span>
        <label
          htmlFor="documento"
          className="mt-1 flex items-center gap-3 px-4 py-3 rounded-xl border border-accent-light bg-white cursor-pointer hover:bg-zinc-50 transition-colors"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/adicionarimagem.svg" alt="" className="w-5 h-5 flex-shrink-0" style={{ filter: 'brightness(0)' }} />
          <span className="text-sm text-zinc-400 flex-1 truncate">
            {arquivo ? arquivo.name : 'Anexe sua comprovação de certificação'}
          </span>
          <span className="text-xs font-medium text-primary bg-primary-tint px-3 py-1 rounded-lg flex-shrink-0">
            Selecionar
          </span>
          <input
            id="documento"
            type="file"
            className="hidden"
            onChange={e => setArquivo(e.target.files?.[0] ?? null)}
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto md:self-start flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-hover text-white font-semibold px-8 py-3 rounded-[20px] transition-colors"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/compartilhar.svg" alt="" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)' }} />
        Enviar solicitação
      </button>
    </form>
  );
}
