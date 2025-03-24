import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { H3 } from "../Typography";
import { Button } from "../ui/button";
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
      <Button type="submit">Add</Button>
    </form>
  );
};

export const PlayerSelection = (props: TeamManagementSharedProps) => (
  <>
    <H3>Add Players</H3>
    <AddPlayerInput {...props} />
  </>
);
