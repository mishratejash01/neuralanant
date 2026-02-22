-- Add member_type column to team_members
alter table public.team_members
  add column member_type text not null default 'founder';

-- Update existing team members
update public.team_members set member_type = 'founder';

-- Advisory board table
create table public.advisory_board (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  affiliation text,
  bio text not null,
  avatar_url text,
  linkedin_url text,
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Enable RLS
alter table public.advisory_board enable row level security;

-- Public read access
create policy "Advisory board members are viewable by everyone"
  on public.advisory_board for select
  using (true);

-- Seed advisory board
insert into public.advisory_board (name, role, affiliation, bio, display_order) values
  ('Prof. Raghavan Subramaniam', 'Chief Advisor', 'IIT Madras', 'Former Dean of Engineering at IIT Madras. 35+ years in computational linguistics and neural architectures. Advises on research direction and academic partnerships.', 1),
  ('Dr. Ananya Krishnan', 'AI Ethics Advisor', 'IISc Bangalore', 'Leading researcher in responsible AI at the Indian Institute of Science. Ensures Anant''s memory systems respect privacy, consent, and fairness principles.', 2),
  ('Vikram Mehta', 'Industry Advisor', 'Ex-VP Google India', 'Two decades of experience scaling AI products across emerging markets. Advises on go-to-market strategy and enterprise adoption for the Indian ecosystem.', 3),
  ('Dr. Sanjay Iyer', 'Research Advisor', 'Stanford AI Lab', 'Published 50+ papers on memory-augmented neural networks. Bridges cutting-edge research from Stanford HAI with Anant''s persistent memory architecture.', 4),
  ('Kavitha Rajan', 'Strategy Advisor', 'Founding Partner, Blume Ventures', 'Early-stage investor who backed 40+ deep-tech startups. Guides Neural AI on fundraising strategy, board governance, and scaling from 0 to 1.', 5);

-- Job openings table
create table public.job_openings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  department text not null,
  location text not null,
  type text not null default 'Full-time',
  description text not null,
  requirements text[] not null default '{}',
  is_active boolean not null default true,
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.job_openings enable row level security;

create policy "Job openings are viewable by everyone"
  on public.job_openings for select
  using (true);

-- Job applications table
create table public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.job_openings(id),
  name text not null,
  email text not null,
  phone text,
  linkedin_url text,
  resume_url text,
  cover_letter text,
  created_at timestamptz not null default now()
);

alter table public.job_applications enable row level security;

create policy "Anyone can submit a job application"
  on public.job_applications for insert
  with check (true);

-- Seed job openings
insert into public.job_openings (title, department, location, type, description, requirements, display_order) values
  (
    'Senior ML Engineer',
    'Research',
    'Chennai / Remote',
    'Full-time',
    'Work on the core memory-augmented transformer architecture powering Anant 1.0. You will design and implement novel attention mechanisms, optimize training pipelines, and push the boundaries of persistent memory in LLMs.',
    ARRAY['5+ years ML engineering experience', 'Deep expertise in transformer architectures', 'Experience with distributed training (PyTorch/JAX)', 'Published research in NLP or memory networks (preferred)', 'Strong Python and C++ skills'],
    1
  ),
  (
    'Full-Stack Engineer',
    'Engineering',
    'Chennai / Remote',
    'Full-time',
    'Build the platform that brings Anant to millions. You will own features end-to-end — from the Next.js frontend to Supabase backend, API design, and real-time infrastructure.',
    ARRAY['3+ years full-stack experience', 'Proficiency in TypeScript, React, and Next.js', 'Experience with PostgreSQL and serverless architecture', 'Eye for clean UI/UX design', 'Startup mindset — comfortable with ambiguity'],
    2
  ),
  (
    'AI Research Intern',
    'Research',
    'Chennai (On-site)',
    'Internship',
    'Join our research team to explore novel approaches to memory encoding, compression, and retrieval in large language models. Ideal for PhD students or final-year undergraduates passionate about NLP.',
    ARRAY['Currently pursuing MS/PhD in CS, AI, or related field', 'Strong fundamentals in deep learning and NLP', 'Familiarity with PyTorch or JAX', 'Published work or strong project portfolio'],
    3
  ),
  (
    'DevOps / Infrastructure Engineer',
    'Engineering',
    'Chennai / Remote',
    'Full-time',
    'Design and manage the cloud infrastructure that trains and serves Anant at scale. You will work with GPU clusters, Kubernetes, CI/CD pipelines, and monitoring systems to ensure reliability and performance.',
    ARRAY['3+ years in DevOps or SRE roles', 'Experience with Kubernetes, Docker, and Terraform', 'Familiarity with GPU cloud providers (AWS, GCP)', 'Strong Linux and networking fundamentals', 'Monitoring and observability experience (Prometheus, Grafana)'],
    4
  ),
  (
    'Product Designer',
    'Design',
    'Chennai / Remote',
    'Full-time',
    'Shape the experience of interacting with a memory-first AI. You will design intuitive interfaces for conversation, memory management, and personalization — making complex AI capabilities feel simple.',
    ARRAY['4+ years product design experience', 'Strong portfolio showing end-to-end design work', 'Proficiency in Figma', 'Experience designing AI or developer tools (preferred)', 'Understanding of design systems and accessibility'],
    5
  );
