import React from 'react'

const color = vcolor => {
	return getComputedStyle(document.documentElement).getPropertyValue(vcolor)
}

const _style = {
	verticalAlign: 'bottom'
}

const next_template = [
	{
		type: 'polygon',
		fill: '#00AD97',
		points:
			'14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828'
	},
	{
		type: 'path',
		fill: '#00AD97',
		d:
			'M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z    M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z'
	}
]

const svg_ = {
	folder_open: {
		viewBox: '0 0 58 58',
		contents: [
			{
				type: 'path',
				fill: '#EFCE4A',
				d:
					'M46.324,58H1.565c-1.03,0-1.779-0.978-1.51-1.973l10.166-27.871C10.405,27.474,11.024,27,11.731,27  H56.49c1.03,0,1.51,0.984,1.51,1.973L47.834,56.844C47.65,57.526,47.031,58,46.324,58z'
			},
			{
				type: 'path',
				fill: '#EBBA16',
				d: 'M50.268,18H48v9h4v-7.268C52,18.775,51.224,18,50.268,18z'
			},
			{
				type: 'path',
				fill: '#EBBA16',
				d:
					'M4,11H1.732C0.776,11,0,11.775,0,12.732V55.46c0.069,0.002,0.138,0.006,0.205,0.01L4,45.122V11z'
			},
			{
				type: 'path',
				fill: '#F4EFDC',
				d:
					'M10.221,28.156C10.405,27.474,11.024,27,11.731,27h2H48V15V0H33H10v28.761L10.221,28.156z'
			},
			{
				type: 'path',
				fill: '#CEC9AE',
				d:
					'M17,16h24c0.552,0,1-0.447,1-1s-0.448-1-1-1H17c-0.552,0-1,0.447-1,1S16.448,16,17,16z'
			},
			{
				type: 'path',
				fill: '#CEC9AE',
				d:
					'M17,9h10c0.552,0,1-0.447,1-1s-0.448-1-1-1H17c-0.552,0-1,0.447-1,1S16.448,9,17,9z'
			},
			{
				type: 'path',
				fill: '#CEC9AE',
				d:
					'M41,21H17c-0.552,0-1,0.447-1,1s0.448,1,1,1h24c0.552,0,1-0.447,1-1S41.552,21,41,21z'
			},
			{
				type: 'polygon',
				fill: '#CEC9AE',
				points: '10,28.761 10,2 7,2 7,36.986'
			},
			{
				type: 'polygon',
				fill: '#D1BF86',
				points: '7,36.986 7,4 4,4 4,45.211'
			}
		]
	},
	folder: {
		viewBox: '0 0 58 58',
		contents: [
			{
				type: 'path',
				fill: '#EFCE4A',
				d:
					'M46.324,52.5H1.565c-1.03,0-1.779-0.978-1.51-1.973l10.166-27.871  c0.184-0.682,0.803-1.156,1.51-1.156H56.49c1.03,0,1.51,0.984,1.51,1.973L47.834,51.344C47.65,52.026,47.031,52.5,46.324,52.5z'
			},
			{
				type: 'path',
				fill: '#F4EFDC',
				d:
					'M10.221,22.656c0.184-0.683,0.803-1.156,1.51-1.156H53v-7H9l-6,6v21.953L10.221,22.656z'
			},
			{
				type: 'path',
				fill: '#EBBA16',
				d:
					'M23.571,10.5L20,5.5H1.732C0.776,5.5,0,6.275,0,7.232V49.96c0.069,0.002,0.138,0.006,0.205,0.01  L3,42.349V20.5l2-2v-8H23.571z'
			},
			{
				type: 'polygon',
				fill: '#D1BF86',
				points: '5,10.5 5,18.5 9,14.5 51,14.5 51,10.5'
			},
			{
				type: 'polygon',
				fill: '#CEC9AE',
				points: '9,20.5 9,14.5 3,20.5'
			}
		]
	},
	chevron_right: {
		viewBox: '0 0  49.656  49.656',
		style: {
			width: 10,
			marginRight: 5,
			verticalAlign: 'baseline'
		},
		contents: [...next_template]
	},
	chevron_down: {
		viewBox: '0 0  49.656  49.656',
		style: {
			width: 10,
			marginRight: 5,
			verticalAlign: 'baseline',
			transform: 'rotate(90deg)'
		},
		contents: [...next_template]
	},
	close: {
		viewBox: '0 0 512 512',
		style: {
			width: 14,
			verticalAlign: 'baseline'
		},
		contents: [
			{
				type: 'path',
				fill: '#f44336',
				d:
					'm453.332031 0h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm0 0'
			},
			{
				type: 'path',
				fill: '#fafafa',
				d:
					'm350.273438 320.105469c8.339843 8.34375 8.339843 21.847656 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.320313-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.847656 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.320313 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"'
			}
		]
	},
	file_txt: {
		viewBox: '0 0 56 56',
		style: {
			width: 18
		},
		contents: [
			{
				type: 'path',
				fill: '#E9E9E0',
				d:
					'M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074   c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z'
			},
			{
				type: 'polygon',
				fill: '#D9D7CA',
				point: '37.5,0.151 37.5,12 49.349,12'
			},
			{
				type: 'path',
				fill: '#95A5A5',
				d:
					'M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z'
			},
			{
				type: 'path',
				fill: '#FFFFFF',
				d:
					'M21.867,42.924v1.121h-3.008V53h-1.654v-8.955h-3.008v-1.121H21.867z'
			},
			{
				type: 'path',
				fill: '#FFFFFF',
				d:
					'M28.443,48.105L31,53h-1.9l-1.6-3.801h-0.137L25.641,53h-1.9l2.557-4.895l-2.721-5.182h1.873    l1.777,4.102h0.137l1.928-4.102h1.873L28.443,48.105z'
			},
			{
				type: 'path',
				fill: '#FFFFFF',
				d:
					'M40.529,42.924v1.121h-3.008V53h-1.654v-8.955h-3.008v-1.121H40.529z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M18.5,13h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h6c0.553,0,1,0.448,1,1S19.053,13,18.5,13z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M21.5,18h-9c-0.553,0-1-0.448-1-1s0.447-1,1-1h9c0.553,0,1,0.448,1,1S22.053,18,21.5,18z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M25.5,18c-0.26,0-0.521-0.11-0.71-0.29c-0.181-0.19-0.29-0.44-0.29-0.71s0.109-0.52,0.3-0.71   c0.36-0.37,1.04-0.37,1.41,0c0.18,0.19,0.29,0.45,0.29,0.71c0,0.26-0.11,0.52-0.29,0.71C26.02,17.89,25.76,18,25.5,18z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M37.5,18h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S38.053,18,37.5,18z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M12.5,33c-0.26,0-0.521-0.11-0.71-0.29c-0.181-0.19-0.29-0.45-0.29-0.71   c0-0.26,0.109-0.52,0.29-0.71c0.37-0.37,1.05-0.37,1.42,0.01c0.18,0.18,0.29,0.44,0.29,0.7c0,0.26-0.11,0.52-0.29,0.71   C13.02,32.89,12.76,33,12.5,33z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M24.5,33h-8c-0.553,0-1-0.448-1-1s0.447-1,1-1h8c0.553,0,1,0.448,1,1S25.053,33,24.5,33z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M43.5,18h-2c-0.553,0-1-0.448-1-1s0.447-1,1-1h2c0.553,0,1,0.448,1,1S44.053,18,43.5,18z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M34.5,23h-22c-0.553,0-1-0.448-1-1s0.447-1,1-1h22c0.553,0,1,0.448,1,1S35.053,23,34.5,23z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M43.5,23h-6c-0.553,0-1-0.448-1-1s0.447-1,1-1h6c0.553,0,1,0.448,1,1S44.053,23,43.5,23z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M16.5,28h-4c-0.553,0-1-0.448-1-1s0.447-1,1-1h4c0.553,0,1,0.448,1,1S17.053,28,16.5,28z'
			},
			{
				type: 'path',
				fill: '#C8BDB8',
				d:
					'M30.5,28h-10c-0.553,0-1-0.448-1-1s0.447-1,1-1h10c0.553,0,1,0.448,1,1S31.053,28,30.5,28z'
			}
		]
	},
	file_img: {
		viewBox: '0 0 56 56',
		style: {
			width: 18
		},
		contents: [
			{
				type: 'path',
				fill: '#E9E9E0',
				d:
					'M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074   c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z'
			},
			{
				type: 'polygon',
				fill: '#D9D7CA',
				points: '37.5,0.151 37.5,12 49.349,12'
			},
			{
				type: 'path',
				fill: '#659C35',
				d:
					'M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z'
			},
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M17.385,53h-1.641V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205    c0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306    c0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656    s-0.921,0.232-1.449,0.232h-1.217V53z M17.385,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103    c0.196-0.068,0.376-0.18,0.54-0.335c0.164-0.155,0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032    c0-0.164-0.023-0.354-0.068-0.567c-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492    c-0.255-0.132-0.593-0.198-1.012-0.198H17.385z'
			},
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M31.316,42.924V53h-1.668l-3.951-6.945V53h-1.668V42.924h1.668l3.951,6.945v-6.945H31.316z'
			},
			{
				type: 'circle',
				fill: '#F3D55B',
				cx: '18.931',
				cy: '14.431',
				r: '4.569'
			},
			{
				type: 'polygon',
				fill: '#88C057',
				points:
					'6.5,39 17.5,39 49.5,39 49.5,28 39.5,18.5 29,30 23.517,24.517'
			}
		]
	},
	minimize: {
		viewBox: '0 0 512 512',
		style: {
			cursor: 'pointer'
		},
		contents: [
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M208,288H16c-8.832,0-16,7.168-16,16v32c0,8.832,7.168,16,16,16h98.752l-90.176,90.176   c-6.24,6.24-6.24,16.384,0,22.624L47.2,487.424c6.24,6.24,16.384,6.24,22.624,0L160,397.248V496c0,8.832,7.168,16,16,16h32   c8.832,0,16-7.168,16-16V304C224,295.168,216.832,288,208,288z'
			},
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M496,288H304c-8.832,0-16,7.168-16,16v192c0,8.832,7.168,16,16,16h32c8.832,0,16-7.168,16-16   v-98.752l90.176,90.176c6.24,6.24,16.384,6.24,22.624,0l22.624-22.624c6.24-6.24,6.24-16.384,0-22.624L397.248,352H496   c8.832,0,16-7.168,16-16v-32C512,295.168,504.832,288,496,288z'
			},
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M208,0h-32c-8.832,0-16,7.168-16,16v98.752L69.824,24.576c-6.24-6.24-16.384-6.24-22.624,0   L24.576,47.2c-6.24,6.24-6.24,16.384,0,22.624L114.752,160H16c-8.832,0-16,7.168-16,16v32c0,8.832,7.168,16,16,16h192   c8.832,0,16-7.168,16-16V16C224,7.168,216.832,0,208,0z'
			},
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M496,160h-98.752l90.176-90.176c6.24-6.24,6.24-16.384,0-22.624L464.8,24.576   c-6.24-6.24-16.384-6.24-22.624,0L352,114.752V16c0-8.832-7.168-16-16-16h-32c-8.832,0-16,7.168-16,16v192c0,8.832,7.168,16,16,16   h192c8.832,0,16-7.168,16-16v-32C512,167.168,504.832,160,496,160z'
			}
		]
	},
	expand: {
		viewBox: '0 0 512 512',
		style: {
			cursor: 'pointer'
		},
		contents: [
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M208,448h-98.752l90.176-90.176c6.24-6.24,6.24-16.384,0-22.624L176.8,312.576   c-6.24-6.24-16.384-6.24-22.624,0L64,402.752V304c0-8.832-7.168-16-16-16H16c-8.832,0-16,7.168-16,16v192c0,8.832,7.168,16,16,16   h192c8.832,0,16-7.168,16-16v-32C224,455.168,216.832,448,208,448z'
			},
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M496,0H304c-8.832,0-16,7.168-16,16v32c0,8.832,7.168,16,16,16h98.752l-90.176,90.176   c-6.24,6.24-6.24,16.384,0,22.624l22.624,22.624c6.24,6.24,16.384,6.24,22.624,0L448,109.248V208c0,8.832,7.168,16,16,16h32   c8.832,0,16-7.168,16-16V16C512,7.168,504.832,0,496,0z'
			},
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M496,288h-32c-8.832,0-16,7.168-16,16v98.752l-90.176-90.176c-6.24-6.24-16.384-6.24-22.624,0   L312.576,335.2c-6.24,6.24-6.24,16.384,0,22.624L402.752,448H304c-8.832,0-16,7.168-16,16v32c0,8.832,7.168,16,16,16h192   c8.832,0,16-7.168,16-16V304C512,295.168,504.832,288,496,288z'
			},
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M208,0H16C7.168,0,0,7.168,0,16v192c0,8.832,7.168,16,16,16h32c8.832,0,16-7.168,16-16v-98.752   l90.176,90.176c6.24,6.24,16.384,6.24,22.624,0l22.624-22.624c6.24-6.24,6.24-16.384,0-22.624L109.248,64H208   c8.832,0,16-7.168,16-16V16C224,7.168,216.832,0,208,0z'
			}
		]
	},
	resize: {
		viewBox: '0 0 512 512',
		contents: [
			{
				type: 'path',
				fill: '#ffffff',
				d:
					'M288,16v32c0,8.832,7.168,16,16,16h98.752L64,402.752V304c0-8.832-7.168-16-16-16H16  c-8.832,0-16,7.168-16,16v192c0,8.832,7.168,16,16,16h192c8.832,0,16-7.168,16-16v-32c0-8.832-7.168-16-16-16h-98.752L448,109.248  V208c0,8.832,7.168,16,16,16h32c8.832,0,16-7.168,16-16V16c0-8.832-7.168-16-16-16H304C295.168,0,288,7.168,288,16z'
			}
		]
	},
	lang_th: {
		viewBox: '0 0 512 512',
		style: {
			marginRight: 5,
			marginTop: 2,
			transform: 'scale(1.25)',
			transformOrigin: 'top left'
		},
		contents: [
			{
				type: 'path',
				fill: '#c03a2b',
				d:
					'm512 17.65625v35.308594h-512v-35.308594c.0273438-9.742188 7.914062-17.6289062 17.65625-17.65625h476.6875c9.742188.0273438 17.628906 7.917969 17.65625 17.65625zm0 0'
			},
			{
				type: 'path',
				fill: '#c03a2b',
				d:
					'm512 300.136719v35.3125c-.027344 9.738281-7.914062 17.625-17.65625 17.652343h-476.6875c-9.742188-.027343-17.6289062-7.914062-17.65625-17.652343v-35.308594h512zm0 0'
			},
			{
				type: 'path',
				fill: '#e6e7e8',
				d: 'm0 52.964844h512v247.171875h-512zm0 0'
			},
			{
				type: 'path',
				fill: '#285680',
				d: 'm0 114.757812h512v123.585938h-512zm0 0'
			}
		]
	},
	lang_en: {
		viewBox: '0 0 512 512',
		style: {
			marginRight: 5,
			marginTop: 2,
			transform: 'scale(1.25)',
			transformOrigin: 'top left'
		},
		contents: [
			{
				type: 'path',
				fill: '#285680',
				d:
					'm512 17.660156v317.792969c.027344 2.113281-.363281 4.214844-1.148438 6.179687-2.351562 6.210938-7.96875 10.601563-14.566406 11.386719-.640625.074219-1.292968.105469-1.941406.085938h-476.6875c-.648438.019531-1.296875-.011719-1.941406-.085938-6.597656-.785156-12.210938-5.175781-14.566406-11.386719-.785157-1.964843-1.1757818-4.066406-1.148438-6.179687v-317.792969c-.0273438-2.113281.363281-4.214844 1.148438-6.179687 2.355468-6.210938 7.96875-10.601563 14.566406-11.386719.644531-.0742188 1.292968-.1054688 1.941406-.0859375h476.6875c.648438-.0195313 1.300781.0117187 1.941406.0859375 6.597656.785156 12.214844 5.175781 14.566406 11.386719.785157 1.964843 1.175782 4.066406 1.148438 6.179687zm0 0'
			},
			{
				type: 'path',
				fill: '#ecf0f1',
				d:
					'm512 17.660156c.027344-2.113281-.363281-4.214844-1.148438-6.179687-2.351562-6.210938-7.96875-10.601563-14.566406-11.386719-.640625-.0742188-1.292968-.1054688-1.941406-.0859375h-28.953125l-156.425781 107.8710935v-107.8710935h-105.929688v107.8710935l-156.425781-107.8710935h-28.953125c-.648438-.0195313-1.296875.0117187-1.941406.0859375-6.597656.785156-12.210938 5.175781-14.566406 11.386719-.785157 1.964843-1.1757818 4.066406-1.148438 6.179687v14.476563l132.589844 91.453125h-132.58593775v105.933594h132.49999975l-132.49999975 91.453124v14.476563c-.03125005 2.113281.35937475 4.214844 1.14843775 6.179687 2.351562 6.210938 7.964844 10.601563 14.5625 11.386719.644531.074219 1.292968.105469 1.945312.085938h28.953125l156.421875-107.871094v107.871094h105.929688v-107.871094l156.425781 107.871094h28.953125c.648438.019531 1.296875-.011719 1.941406-.085938 6.597656-.785156 12.210938-5.175781 14.566406-11.386719.785157-1.964843 1.175782-4.066406 1.148438-6.179687v-14.476563l-132.589844-91.453124h132.589844v-105.933594h-132.503906l132.503906-91.453125zm0 0'
			},
			{
				type: 'path',
				fill: '#c03a2b',
				d:
					'm510.851562 341.632812c-2.351562 6.210938-7.96875 10.601563-14.566406 11.386719l-179.109375-123.496093h31.25zm0 0'
			},
			{
				type: 'path',
				fill: '#c03a2b',
				d:
					'm194.824219 123.589844h-31.25l-162.425781-112.109375c2.355468-6.210938 7.96875-10.601563 14.566406-11.386719zm0 0'
			},
			{
				type: 'path',
				fill: '#c03a2b',
				d:
					'm510.851562 11.480469-162.601562 112.109375h-30.988281l179.023437-123.496094c6.597656.785156 12.214844 5.175781 14.566406 11.386719zm0 0'
			},
			{
				type: 'path',
				fill: '#c03a2b',
				d:
					'm194.738281 229.523438-179.023437 123.496093c-6.597656-.785156-12.210938-5.175781-14.566406-11.386719l162.605468-112.109374zm0 0'
			},
			{
				type: 'path',
				fill: '#c03a2b',
				d:
					'm.00390625 158.902344h511.99609375v35.308594h-511.99609375zm0 0'
			},
			{
				type: 'path',
				fill: '#c03a2b',
				d: 'm238.34375.0078125h35.3125v353.0976565h-35.3125zm0 0'
			}
		]
	},
	bulb: {
		viewBox: '0 0 512 512',
		contents: [
			{
				type: 'path',
				fill: '#fafafa',
				d:
					'M314.667,391.467c6.4-21.333,19.2-40.533,36.267-55.467c32-26.667,52.267-67.2,52.267-112  c0-83.2-69.333-151.467-154.667-147.2C172.8,80,110.933,144,108.8,219.733C107.733,266.667,128,308.267,161.067,336  C179.2,350.933,192,370.133,198.4,391.467L314.667,391.467L314.667,391.467z'
			},
			{
				type: 'path',
				fill: '#30323d',
				d:
					'M242.133,393.6h9.6l-42.667-158.933c1.067,0,2.133,0,3.2,0c5.333,0,10.667-2.133,14.933-6.4  c2.133-2.133,4.267-3.2,7.467-3.2c3.2,0,5.333,1.067,7.467,3.2c7.467,8.533,20.267,8.533,27.733,0c2.133-2.133,4.267-3.2,7.467-3.2  c2.133,0,5.333,1.067,7.467,3.2c4.267,4.267,8.533,6.4,14.933,6.4c1.067,0,2.133,0,3.2,0l-41.6,158.933h9.6l43.733-166.4  c0-2.133,0-4.267-2.133-5.333c-2.133-1.067-4.267,0-5.333,1.067c-2.133,2.133-4.267,3.2-6.4,3.2c-3.2,0-5.333-1.067-8.533-3.2  c-4.267-4.267-8.533-6.4-13.867-6.4s-9.6,2.133-13.867,6.4s-10.667,4.267-14.933,0c-3.2-4.267-8.533-6.4-13.867-6.4l0,0  c-5.333,0-10.667,2.133-13.867,6.4c-2.133,2.133-5.333,3.2-8.533,3.2c-2.133,0-5.333-1.067-6.4-3.2  c-1.067-1.067-3.2-2.133-5.333-1.067c-2.133,1.067-3.2,3.2-2.133,5.333L242.133,393.6z'
			},
			{
				type: 'path',
				fill: '#344A5E',
				d:
					'M222.933,489.6C228.267,502.4,241.067,512,256,512c14.933,0,27.733-9.6,33.067-22.4H222.933z'
			},
			{
				type: 'path',
				fill: '#344A5E',
				d:
					'M295.467,490.667H217.6c-10.667,0-19.2-8.533-19.2-19.2V390.4h116.267v81.067   C314.667,482.133,306.133,490.667,295.467,490.667z'
			},
			{
				type: 'path',
				fill: '#415A6B',
				d:
					'M313.6,430.933H198.4c-6.4,0-11.733-5.333-11.733-11.733l0,0c0-6.4,5.333-11.733,11.733-11.733   h115.2c6.4,0,11.733,5.333,11.733,11.733l0,0C325.333,425.6,320,430.933,313.6,430.933z'
			},
			{
				type: 'path',
				fill: '#415A6B',
				d:
					'M313.6,468.267H198.4c-6.4,0-11.733-5.333-11.733-11.733l0,0c0-6.4,5.333-11.733,11.733-11.733   h115.2c6.4,0,11.733,5.333,11.733,11.733l0,0C325.333,462.933,320,468.267,313.6,468.267z'
			},
			{
				type: 'path',
				fill: '#30323d',
				d:
					'M256,0c-5.333,0-10.667,4.267-10.667,10.667v36.267c0,5.333,4.267,10.667,10.667,10.667   c6.4,0,10.667-4.267,10.667-10.667V10.667C266.667,4.267,261.333,0,256,0z'
			},
			{
				type: 'path',
				fill: '#30323d',
				d:
					'M113.067,65.067c-4.267-4.267-10.667-4.267-14.933,0s-4.267,10.667,0,14.933l25.6,25.6   c4.267,4.267,10.667,4.267,14.933,0s4.267-10.667,0-14.933L113.067,65.067z'
			},
			{
				type: 'path',
				fill: '#30323d',
				d:
					'M80,212.267H43.733c-5.333,0-10.667,4.267-10.667,10.667l0,0c0,5.333,4.267,10.667,10.667,10.667H80   c5.333,0,10.667-4.267,10.667-10.667l0,0C90.667,217.6,85.333,212.267,80,212.267z'
			},
			{
				type: 'path',
				fill: '#30323d',
				d:
					'M123.733,340.267l-25.6,25.6c-4.267,4.267-4.267,10.667,0,14.933s10.667,4.267,14.933,0l25.6-25.6   c4.267-4.267,4.267-10.667,0-14.933S128,336,123.733,340.267z'
			},
			{
				type: 'path',
				fill: '#30323d',
				d:
					'M388.267,340.267C384,336,377.6,336,373.333,340.267c-4.267,4.267-4.267,10.667,0,14.933l25.6,25.6   c4.267,4.267,10.667,4.267,14.933,0s4.267-10.667,0-14.933L388.267,340.267z'
			},
			{
				type: 'path',
				fill: '#30323d',
				d:
					'M468.267,212.267H432c-5.333,0-10.667,4.267-10.667,10.667l0,0c0,5.333,4.267,10.667,10.667,10.667   h36.267c5.333,0,10.667-4.267,10.667-10.667l0,0C478.933,217.6,474.667,212.267,468.267,212.267z'
			},
			{
				type: 'path',
				fill: '#30323d',
				d:
					'M398.933,65.067l-25.6,25.6c-4.267,4.267-4.267,10.667,0,14.933c4.267,4.267,10.667,4.267,14.933,0   l25.6-25.6c4.267-4.267,4.267-10.667,0-14.933S403.2,60.8,398.933,65.067z'
			}
		]
	}
}

const Svg = ({
	name = '',
	width = 20,
	style = {},
	expand,
	minimize,
	resize,
	setTheme,
	setLang,
	lang,
	theme
}) => {
	return typeof svg_[name] === 'undefined' ? (
		<></>
	) : (
		<svg
			onTouchStart={e => {
				if (typeof expand !== 'undefined') expand()
				if (typeof minimize !== 'undefined') minimize()
				if (typeof resize !== 'undefined') resize(e)
			}}
			onClick={() => {
				if (typeof setTheme !== 'undefined') {
					setTheme(theme === 'dark' ? 'light' : 'dark')
					console.log(theme)
				}
				if (typeof setLang !== 'undefined') setLang(lang)
			}}
			role='img'
			viewBox={svg_[name].viewBox}
			width={width}
			style={{ ..._style, ...svg_[name].style, ...style }}>
			{svg_[name].contents.map((content, idx) => (
				<content.type
					key={idx}
					fill={content.fill}
					style={content.style}
					d={content.d}
					points={content.points}
					cx={content.cx}
					cy={content.cy}
					r={content.r}
					x={content.x}
					y={content.y}
					width={content.width}
					height={content.height}
				/>
			))}
		</svg>
	)
}
export default Svg