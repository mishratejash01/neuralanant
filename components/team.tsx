import { createClient } from "@/utils/supabase/server";
import TeamRow from "./team-row";
import AnimateOnScroll from "./animate-on-scroll";

interface TeamCategory {
  id: string;
  name: string;
  display_order: number;
}

interface TeamMember {
  id: string;
  category_id: string | null;
  name: string;
  role: string;
  bio: string;
  avatar_url: string | null;
  linkedin_url: string | null;
  location: string;
  department: string;
}

export default async function Team() {
  const supabase = await createClient();

  const { data: categoriesData } = await supabase
    .from("team_categories")
    .select("*")
    .order("display_order", { ascending: true });

  const { data: membersData } = await supabase
    .from("team_members")
    .select("*")
    .order("display_order", { ascending: true });

  const safeCategories = (categoriesData as TeamCategory[]) || [];
  const safeMembers = (membersData as TeamMember[]) || [];

  // Group members and enforce "Our leadership" title
  const membersByCategory = safeCategories.map(category => {
    // Override "Founders" to "Our leadership"
    const displayTitle = category.name.toLowerCase() === "founders" ? "Our leadership" : category.name;
    
    return {
      categoryName: displayTitle,
      members: safeMembers.filter(m => m.category_id === category.id)
    };
  }).filter(group => group.members.length > 0); 

  // Fallback if no categories exist yet
  if (membersByCategory.length === 0 && safeMembers.length > 0) {
    membersByCategory.push({
      categoryName: "Our leadership",
      members: safeMembers
    });
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 w-full">
      <div className="relative z-10 w-full overflow-hidden">
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
