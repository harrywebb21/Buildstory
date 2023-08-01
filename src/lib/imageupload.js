import { writable } from 'svelte/store';

export const files = writable({ urls: [], formData: null });

let file;

files.subscribe((value) => {
	file = value;
});

const cloudname = 'dpjqff1dh';
export const fileInput = (node) => {
	const input = document.createElement('input');
	input.setAttribute('type', 'file');
	input.setAttribute('accept', 'image/*');
	input.setAttribute('type', 'file');
	input.setAttribute('multiple', '');
	input.setAttribute('hidden', '');
	input.style.display = 'none';

	function openFileExplorer() {
		input.click();
	}

	function getFiles(e) {
		const inputFiles = e.target.files;
		const formData = new FormData();
		formData.append('file', inputFiles);
		formData.append('upload_preset', 'Buildstory');
		formData.append('cloud_name', cloudname);

		console.log(inputFiles);

		// files.set({ urls: inputFiles.files.map((file) => URL.createObjectURL(file)), formData });
	}

	node.addEventListener('click', openFileExplorer);
	input.addEventListener('input', getFiles);

	return {
		destroy: () => {
			node.removeEventListener('click', openFileExplorer);
			input.removeEventListener('click', getFiles);
		}
	};
};

export const upload = async () => {
	if (!file?.formData) return;
	try {
		const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, {
			method: 'post',
			body: file.formData
		});

		return await response.json();
	} catch {
		throw new Error('server error: unable to upload img to cloudinary');
	}
};
