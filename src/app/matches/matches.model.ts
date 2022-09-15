import { Player } from "../players/player.model";

export class Match {
    public name: string;
    public firstPlayer: Player;
    public secondPlayer: Player;

    constructor(name: string, firstPlayer: Player, secondPlayer: Player) {
        this.name = name;
        this.firstPlayer = firstPlayer;
        this.secondPlayer = secondPlayer;
    }
}