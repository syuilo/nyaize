export default (text: string) =>
	text
		.replace(/な/g, 'にゃ')
		.replace(/ナ/g, 'ニャ')
		.replace(/にゃでにゃで/g, 'なでなで')
		.replace(/ニャデニャデ/g, 'ナデナデ');
