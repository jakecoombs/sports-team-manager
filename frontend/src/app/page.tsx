import TeamManagement from "@/components/TeamManagement";
import { H1 } from "@/components/Typography";
import { CLUB_NAME } from "@/lib/consts";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <main className="py-4">
        <H1>{CLUB_NAME}</H1>
        <TeamManagement />
      </main>
    </div>
  );
};

export default HomePage;
