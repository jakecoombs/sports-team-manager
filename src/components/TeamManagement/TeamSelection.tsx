import { TEAM_A, TEAM_B } from "@/lib/consts";
import { H3, H4 } from "../Typography";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { TeamManagementSharedProps } from "./TeamManagement";
import {Trash2} from "lucide-react";

const PlayerList = ({ players, setPlayers }: TeamManagementSharedProps) => {
  if (players.length == 0) {
    return <p>No players added yet.</p>;
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

  function removePlayerByName(name: string) {
    setPlayers([...players].filter((player) => player.name != name));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {players.map((player, i) => (
        <RenderPlayer
          key={`player-{${i}}`}
          name={player.name}
          assignPlayerToTeam={assignPlayer}
          onRemove={removePlayerByName}
        />
      ))}
    </div>
  );
};

const RenderPlayer = ({
  name,
  assignPlayerToTeam,
  onRemove,
}: {
  name: string;
  assignPlayerToTeam: (name: string, team?: string) => void;
  onRemove: (name: string) => void;
}) => (
  <Card className="py-2">
    <CardContent className="flex content-center justify-between px-4">
      <p className="content-center font-semibold">{name}</p>
      <div className="flex content-center">
        <ToggleGroup
          type="single"
          onValueChange={(teamSelection) =>
            assignPlayerToTeam(name, teamSelection)
          }
        >
          <ToggleGroupItem value={TEAM_A}>{TEAM_A}</ToggleGroupItem>
          <ToggleGroupItem value={TEAM_B}>{TEAM_B}</ToggleGroupItem>
        </ToggleGroup>
        <Button
          size="icon"
          variant="destructive"
          onClick={() => onRemove(name)}
        >
          <Trash2 />
        </Button>
      </div>
    </CardContent>
  </Card>
);

const DisplayTeams = ({ players }: TeamManagementSharedProps) => {
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

export const TeamSelection = (props: TeamManagementSharedProps) => (
  <>
    <H3>Available Players ({props.players.length})</H3>
    <PlayerList {...props} />
    <DisplayTeams {...props} />
  </>
);
