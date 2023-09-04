import { writable } from 'svelte/store';

export function createImageUploader(cloudname: string) {
	const fileUrl = writable<string>('');
	const formData = writable<any>();
	let data: any = null;
	formData.subscribe((value) => {
		data = value;
	});

	function fileInput(node: Node) {
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

		function getFiles(e: any) {
			const file = e.target.files;
			const data = new FormData();
			data.append('file', file);
			data.append('upload_preset', 'Buildstory');
			data.append('cloud_name', cloudname);
			fileUrl.set(URL.createObjectURL(file));
			formData.set(data);
		}

		node.addEventListener('click', openFileExplorer);
		input.addEventListener('input', getFiles);

		return {
			destroy: () => {
				node.removeEventListener('click', openFileExplorer);
				input.removeEventListener('click', getFiles);
			}
		};
	}

	async function upload() {
		if (!data) return;
		try {
			const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, {
				method: 'post',
				body: data
			});

			return await response.json();
		} catch {
			throw new Error('server error: unable to upload img to cloudinary');
		}
	}

	return { fileInput, upload, fileUrl };
}
