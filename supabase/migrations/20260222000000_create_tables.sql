-- Team members table
create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  bio text not null,
  avatar_url text,
  linkedin_url text,
  twitter_url text,
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.team_members enable row level security;

-- Public read access
create policy "Team members are viewable by everyone"
  on public.team_members for select
  using (true);

-- Waitlist table
create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  role text,
  created_at timestamptz not null default now(),
  constraint waitlist_email_unique unique (email)
);

-- Enable RLS
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (for the signup form)
create policy "Anyone can join the waitlist"
  on public.waitlist for insert
  with check (true);

-- Seed team members
insert into public.team_members (name, role, bio, display_order) values
  ('Aditya Sharma', 'CEO & Co-Founder', 'Ex-Google Brain. 10+ years in AI research and large-scale systems.', 1),
  ('Priya Nair', 'CTO & Co-Founder', 'Former ML lead at Microsoft Research India. Transformer architecture specialist.', 2),
  ('Rahul Verma', 'Head of Research', 'PhD NLP, IIT Bombay. Published 30+ papers on memory-augmented networks.', 3),
  ('Sneha Reddy', 'Head of Engineering', 'Ex-Amazon. Built distributed inference systems serving 100M+ users.', 4),
  ('Arjun Patel', 'Lead ML Engineer', 'Ex-DeepMind. Specialized in efficient training and model optimization.', 5),
  ('Meera Iyer', 'Head of Product', 'Ex-Notion. Passionate about making AI accessible to every Indian.', 6);
