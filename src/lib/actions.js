import ColorThief from 'colorthief';
export async function getColors(node, cb) {
	// if (node.tagName !== 'img') {
	// 	throw Error('Must be applied to an image');
	// }
	const ct = new ColorThief();
	let colors;

	async function getColor(e) {
		colors = await ct.getPalette(e.target);
		cb(colors);
	}

	if (node.complete) {
		colors = await ct.getPalette(node);
		cb(colors);
	} else {
		node.addEventListener('load', getColor);
	}

	return {
		destroy() {
			node.removeEventListener('load', getColor);
		}
	};
}
