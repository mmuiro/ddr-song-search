interface Difficulty {
	stepstype: string; // replace with enum?
	description: string;
	difficulty: string; // replace with enum
	credit?: string;
	meter: number;
}

interface Song {
	title: string;
	subtitle: string | undefined;
	artist: string;
	difficulties: Difficulty[];
}

interface PackData {
	[pack: string]: Song[];
}

export type { Difficulty, Song, PackData };
