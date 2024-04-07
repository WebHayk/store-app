
type RoundType = "top" | "bottom";

export class Helpers {
    static isNull = <T>(value: T) => value === null;

    static calculatePercentage = (
        mainNumber: number,
        entryNumber: number,
        round: RoundType = "bottom"
    ) => {

        const value = (mainNumber * entryNumber) / 100;

        if (round === "top") {
            return Math.round(value);
        }

        return Math.floor(value);
    }
}
