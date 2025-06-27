import { TEAM_A, TEAM_B } from "@/lib/consts";
import { Player } from "@/lib/interfaces";
import { toast } from "sonner";
import { H3 } from "../Typography";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { TeamManagementSharedProps } from "./TeamManagement";
import { shuffleArray } from "@/lib/utils";

function generateShuffledTeamLineups(players: Player[]): string {
  const teams = [TEAM_A, TEAM_B];

  const lineups: string[] = teams.map((team) => {
    const teamPlayers = players
      .filter((player) => player.team == team)
      .map((player) => player.name);
    return `${team}\n${shuffleArray(teamPlayers).join(", ")}`;
  });

  return lineups.join("\n\n");
}

export const Output = (props: TeamManagementSharedProps) => {
  const outputText = generateShuffledTeamLineups(props.players);

  function copyOutputToClipboard() {
    navigator.clipboard.writeText(outputText);
    toast("Copied to clipboard.");
  }
  
  return (
    <>
      <H3>Output</H3>
      <Alert>
        <AlertDescription className="whitespace-pre-line">
          {outputText}
        </AlertDescription>
      </Alert>
      <Button className="my-4" onClick={copyOutputToClipboard}>Copy Text</Button>
    </>
  );
};
