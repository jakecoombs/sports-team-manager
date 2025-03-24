import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { H3, P } from "../Typography";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { TeamManagementSharedProps } from "./TeamManagement";

const AddPlayerInput = ({ setPlayers, players }: TeamManagementSharedProps) => {
  const [playerName, setPlayerName] = useState("");

  const handleAddPlayer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = playerName.trim();
    if (trimmedName !== "") {
      if (
        players.some(
          (player) => player.name.toLowerCase() === trimmedName.toLowerCase(),
        )
      ) {
        toast(`${trimmedName} is already in list of players.`);
        return;
      }
      setPlayers([...players, { name: trimmedName }]);
      setPlayerName("");
    }
  };

  return (
    <form
      className="flex w-full max-w-sm items-center space-x-2"
      onSubmit={handleAddPlayer}
    >
      <Input
        type="text"
        placeholder="Player Name"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <Button type="button">Add</Button>
    </form>
  );
};

const PlayerList = ({ players, setPlayers }: TeamManagementSharedProps) => {
  if (players.length == 0) {
    return <P>No players added yet.</P>;
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
          onRemove={removePlayerByName}
        />
      ))}
    </div>
  );
};

const RenderPlayer = ({
  name,
  onRemove,
}: {
  name: string;
  onRemove: (name: string) => void;
}) => (
  <Card className="py-2">
    <CardContent className="flex content-center justify-between">
      <P>{name}</P>
      <Button
        type="button"
        variant="destructive"
        onClick={() => onRemove(name)}
      >
        X
      </Button>
    </CardContent>
  </Card>
);

export const PlayerSelection = (props: TeamManagementSharedProps) => (
  <>
    <H3>Available Players ({props.players.length})</H3>
    <AddPlayerInput {...props} />
    <PlayerList {...props} />
  </>
);
