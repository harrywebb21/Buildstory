export function blendTarget(colors: any, target: any) {
	const color1 = `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`;
	const color2 = `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`;
	target.style.setProperty('background-image', `linear-gradient(${color1}, ${color2})`);
}
