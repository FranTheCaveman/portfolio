
// Colour themes

export interface Theme {
    name: string;
    type: 'dark' | 'light';
    colours: Record<string,string>;
}


export const themes: Theme[] = [
	{
		"name": "kanagawa-wave",
		"type": "dark",
		"colours": {
			"bg-main": "#1a1a22",
			"bg-dark": "#15151b",
			"bg-light": "#1f1f28",
			"fg-main": "#dcd7ba",
			"black": "#16161d",
			"red1": "#d05658",
			"green1": "#76946a",
			"yellow1": "#c0a36e",
			"blue1": "#5091ad",
			"purple1": "#aa85e5",
			"teal1": "#6a9589",
			"white1": "#c8c093",
			"grey": "#3e3d47",
			"red2": "rgb(254, 118, 118)",
			"green2": "#98bb6c",
			"yellow2": "#e6c384",
			"blue2": "#7fb4ca",
			"purple2": "#bba1fd",
			"teal2": "#7aa89f",
			"white2": "#dcd7ba",
		}
	},
]