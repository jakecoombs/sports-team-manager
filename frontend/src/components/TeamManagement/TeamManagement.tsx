"use client";

import { H2 } from "@/components/Typography";
import { Player } from "@/lib/interfaces";
import { useState } from "react";
import { Output } from "./Output";
import { PlayerSelection } from "./PlayerSelection";
import { TeamSelection } from "./TeamSelection";

export interface TeamManagementSharedProps {
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

export const TeamManagement = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const props = { players, setPlayers };

  return (
    <>
      <H2>Team Management</H2>
      <PlayerSelection {...props} />
      <TeamSelection {...props} />
      <Output {...props} />
    </>
  );
};
