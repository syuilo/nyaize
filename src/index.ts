export default (text: string) =>
	text
		.replace(/な/g, 'にゃ')
		.replace(/ニャ/g, 'にゃ')
		.replace(/にゃでにゃで/g, 'なでなで')
		.replace(/ニャデニャデ/g, 'ナデナデ');
