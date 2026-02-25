import { createClient } from "@/utils/supabase/server";
import TeamRow from "./team-row";
import AnimateOnScroll from "./animate-on-scroll";

export default async function Team() {
  const supabase = await createClient();

  // 1. Fetch Categories (Gracefully handle if table doesn't exist yet)
  const { data: categories } = await supabase
    .from("team_categories")
    .select("*")
    .order("display_order", { ascending: true })
    .catch(() => ({ data: [] })); 

  // 2. Fetch Members
  const { data: members } = await supabase
    .from("team_members")
    .select("*")
    .order("display_order", { ascending: true });

  const safeCategories = categories ?? [];
  const safeMembers = members ?? [];

  // Group members by category ID
  const membersByCategory = safeCategories.map(category => ({
    categoryName: category.name,
    members: safeMembers.filter(m => m.category_id === category.id)
  })).filter(group => group.members.length > 0); 

  // Fallback: If you haven't run the SQL migration yet, group everyone under "Leadership"
  if (membersByCategory.length === 0 && safeMembers.length > 0) {
    membersByCategory.push({
      categoryName: "Leadership",
      members: safeMembers
    });
  }

  return (
    <section className="relative overflow-hidden py-28 sm:py-36 w-full">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-2 absolute -right-[5%] top-[20%] h-[400px] w-[400px] rounded-full bg-teal-100/20 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full overflow-hidden">
        <AnimateOnScroll>
          <div className="mx-auto mb-20 max-w-2xl text-center px-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">Our People</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-zinc-900 sm:text-5xl">
              Built by engineers who believe in India&apos;s AI future
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Render a sliding row for each Category */}
        {membersByCategory.map((group, index) => (
          <AnimateOnScroll key={index} delay={`delay-${(index % 3 + 1) * 100}`}>
            <TeamRow 
              categoryName={group.categoryName} 
              members={group.members} 
            />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
