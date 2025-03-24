import { Player } from "@/lib/interfaces";
import { H3, H4, P } from "../Typography";
import { Card, CardContent } from "../ui/card";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { TEAM_A, TEAM_B } from "@/lib/consts";

interface Props {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

const PlayerList = ({ players, setPlayers }: Props) => {
  if (players.length == 0) {
    return <P>No players added yet.</P>;
  }

  function assignPlayer(name: string, team?: string) {
    setPlayers(
      [...players].map((player) => {
        if (player.name == name) {
          return { ...player, team };
        }
        return player;
      }),
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {players.map((player, i) => (
        <RenderPlayer
          key={`player-{${i}}`}
          name={player.name}
          assignPlayerToTeam={assignPlayer}
        />
      ))}
    </div>
  );
};

const RenderPlayer = ({
  name,
  assignPlayerToTeam,
}: {
  name: string;
  assignPlayerToTeam: (name: string, team?: string) => void;
}) => (
  <Card className="py-2">
    <CardContent className="flex content-center justify-between">
      <P>{name}</P>
      <ToggleGroup
        type="single"
        onValueChange={(teamSelection) =>
          assignPlayerToTeam(name, teamSelection)
        }
      >
        <ToggleGroupItem value={TEAM_A}>{TEAM_A}</ToggleGroupItem>
        <ToggleGroupItem value={TEAM_B}>{TEAM_B}</ToggleGroupItem>
      </ToggleGroup>
    </CardContent>
  </Card>
);

const DisplayTeams = ({ players }: Props) => {
  const TeamPlayerList = ({ team }: { team: string }) => {
    const teamPlayers = [...players].filter((player) => player.team == team);
    if (teamPlayers.length == 0) return <span />;
    return (
      <div>
        <H4>
          {team} Players ({teamPlayers.length})
        </H4>
        <ol className="list-decimal list-inside">
          {teamPlayers.map((player, i) => {
            if (player.team == team) {
              return <li key={`${team}-${i}`}>{player.name}</li>;
            }
          })}
        </ol>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <TeamPlayerList team={TEAM_A} />
      <TeamPlayerList team={TEAM_B} />
    </div>
  );
};

export const TeamSelection = (props: Props) => (
  <>
    <H3>Team Selection</H3>
    <PlayerList {...props} />
    <DisplayTeams {...props} />
  </>
);
