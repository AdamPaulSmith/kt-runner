import { useEffect, useState } from 'react';

type KillTeam = {
  id: number;
  name: string;
  slug: string;
};

const teamSlugs = ['angels-of-death', 'battleclade'];

const Create = () => {
  const [killTeams, setKillTeams] = useState<KillTeam[]>([]);
  useEffect(() => {
    const fetchKillTeams = async () => {
      const killTeams: KillTeam[] = [];
      for (const slug of teamSlugs) {
        try {
          const response = await fetch(`/kill-teams/${slug}/manifest.json`);
          if (!response.ok) {
            console.error(
              `Failed to get manifest for ${slug}: ${response.status} ${response.statusText}`
            );
            continue;
          }
          const data = await response.json();
          console.log(data);
          killTeams.push({
            id: data.id,
            name: data.name,
            slug: data.slug,
          });
        } catch (error) {
          console.error(`Error loading manifest for ${slug}`, error);
        }
      }
      setKillTeams(killTeams);
    };
    void fetchKillTeams();
  }, []);

  return (
    <div>
      <h1>Create</h1>
      <ul>
        {killTeams.map((killTeam) => (
          <li key={killTeam.id}>{killTeam.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Create;
