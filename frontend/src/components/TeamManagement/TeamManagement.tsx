"use client";

import { H2, H3, P } from "@/components/Typography";
import { Player } from "@/lib/interfaces";
import { useState } from "react";
import { PlayerSelection } from "./PlayerSelection";
import { TeamSelection } from "./TeamSelection";

export const TeamManagement = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const props = { players, setPlayers };

  return (
    <>
      <H2>Team Management</H2>
      <PlayerSelection {...props} />
      <TeamSelection {...props} />
      <H3>Output</H3>
      <P>A message to send out for the teams.</P>
    </>
  );
};
