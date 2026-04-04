-- CRM marketing extension for targeted ads and retargeting workflows.
alter table public.customers
  add column if not exists country text,
  add column if not exists product_interest text,
  add column if not exists status text not null default 'new',
  add column if not exists source text,
  add column if not exists tags text[] not null default '{}'::text[];

-- Ensure status values stay within supported CRM states.
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'customers_status_check'
  ) then
    alter table public.customers
      add constraint customers_status_check
      check (status in ('new', 'contacted', 'converted'));
  end if;
end
$$;

-- Ensure source values match attribution channels used by dashboard filters.
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'customers_source_check'
  ) then
    alter table public.customers
      add constraint customers_source_check
      check (source in ('landing_page', 'instagram', 'ads') or source is null);
  end if;
end
$$;
