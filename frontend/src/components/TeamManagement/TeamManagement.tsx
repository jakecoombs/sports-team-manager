"use client";

import { H2, H3, P } from "@/components/Typography";
import { Player } from "@/lib/interfaces";
import { useState } from "react";
import { PlayerSelection } from "./PlayerSelection";

export const TeamManagement = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  return (
    <>
      <H2>Team Management</H2>
      <PlayerSelection players={players} setPlayers={setPlayers} />
      <H3>Team Selection</H3>
      <P>Assign players to teams.</P>
      <H3>Output</H3>
      <P>A message to send out for the teams.</P>
    </>
  );
};
