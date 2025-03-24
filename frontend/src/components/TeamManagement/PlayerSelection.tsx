import { Player } from "@/lib/interfaces";
import { FormEvent, useState } from "react";
import { H3, P } from "../Typography";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface Props {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

const AddPlayerInput = ({ setPlayers, players }: Props) => {
  const [playerName, setPlayerName] = useState("");

  const handleAddPlayer = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (playerName.trim() !== "") {
      setPlayers([...players, { name: playerName }]);
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

const PlayerList = ({ players }: Props) => {
  if (players.length == 0) {
    return <P>No players added yet.</P>;
  }
  return players.map((player, i) => <P key={`player-${i}`}>{player.name}</P>);
};

export const PlayerSelection = (props: Props) => (
  <>
    <H3>Players</H3>
    <AddPlayerInput {...props} />
    <PlayerList {...props} />
  </>
);
