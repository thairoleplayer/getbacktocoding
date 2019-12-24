import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import Item from './component/item'
import Main from './component/main'
import File from './component/file'
import SVG from './stuff/svg'
import DarkTheme from './theme/dark'
import LightTheme from './theme/light'
import TH from './locale/th'
import EN from './locale/en'

function App() {
	const [line, setLine] = useState(0)

	const explorerMinWidth = 180
	const [explorerWidth, setExplorerWidth] = useState(
		window.innerWidth <= 480 ? 0 : explorerMinWidth
	)
	const [occupation, setOccupation] = useState('')

	const [explorer, setExplorer] = useState([
		{
			id: '0',
			name: 'main',
			type: 'folder',
			open: true,
			items: [
				{
					parentId: '0',
					id: '00',
					name: 'indexxxxxxxxxxxxxd.txt',
					type: 'file_txt',
					render: Main,
					dragging: false
				},
				{
					parentId: '0',
					id: '01',
					name: 'ashe.txt',
					type: 'file_txt',
					render: Test,
					dragging: false
				}
			]
		},
		{
			id: '1',
			name: 'image',
			type: 'folder',
			open: false,
			items: [
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				},
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Test2,
					dragging: false
				}
			]
		}
	])
	const [files, setFiles] = useState([])

	const [explorerActive, setExplorerActive] = useState()
	const [fileActive, setFileActive] = useState()

	const [dropping, setDropping] = useState(-1)

	const startResize = e => {
		document.documentElement.style.cursor = 'w-resize'

		window.addEventListener('mousemove', Resize, false)
		window.addEventListener('mouseup', stopResize, false)

		e.target.addEventListener('touchmove', Resize, false)
		e.target.addEventListener('touchend', stopResize, false)
	}

	const Resize = e => {
		const currentX = isMobileDevice()
			? e.touches
				? e.touches[0].clientX - 12
				: e.clientX
			: e.clientX
		if (
			currentX >= explorerMinWidth &&
			currentX <= window.innerWidth * 0.75
		)
			setExplorerWidth(currentX)
		if (currentX < explorerMinWidth / 2) setExplorerWidth(0)
	}

	const stopResize = e => {
		document.body.style.cursor = 'unset'

		window.removeEventListener('mousemove', Resize, false)
		window.removeEventListener('mouseup', stopResize, false)

		window.removeEventListener('touchmove', Resize)
		window.removeEventListener('touchend', stopResize, false)
	}

	const [Render, setRender] = useState()

	useEffect(() => {
		if (textEditor.current) {
			setLine(textEditor.current.childElementCount)
		}
	}, [fileActive])

	const textEditor = useRef()
	const lineEditor = useRef()

	window.onresize = () => {
		document.body.style.setProperty(
			'--vh',
			`${window.innerHeight * 0.01}px`
		)
	}

	useEffect(() => {
		if (window.innerWidth <= 480) {
			setExplorerWidth(0)
		}
		document.body.style.setProperty(
			'--vh',
			`${window.innerHeight * 0.01}px`
		)
	}, [])

	const [theme, setTheme] = useState('dark')
	useEffect(() => {
		const _theme = theme === 'dark' ? DarkTheme : LightTheme
		Object.keys(_theme).forEach(key => {
			document.documentElement.style.setProperty(key, _theme[key])
		})
	}, [theme])

	const [lang, setLang] = useState(EN)

	function isMobileDevice() {
		return (
			typeof window.orientation !== 'undefined' ||
			navigator.userAgent.indexOf('IEMobile') !== -1
		)
	}

	return (
		<div
			className='container'
			style={{
				gridTemplateColumns: `${explorerWidth}px ${
					isMobileDevice() ? '0' : '5'
				}px auto`
			}}>
			<div className='header'>
				<img
					style={{ height: 26, marginTop: 20, marginLeft: 10 }}
					src='https://cdn.betterttv.net/emote/5d3e250a6d68672adc3fbff7/3x'
					alt='forsencd'
				/>
				<div style={{ marginTop: 16, marginLeft: 8 }}> . o O </div>
				<div style={{ marginLeft: 6, marginTop: 14 }}>(</div>
				<img
					style={{ height: 26, marginTop: 6, marginLeft: 6 }}
					src='https://cdn.betterttv.net/emote/5803757f3d506fea7ee35267/3x'
					alt='feelsokayman'
				/>
				<div style={{ marginLeft: 0, marginTop: 12 }}>
					<span role='img' aria-label='wanna'>
						👉👌❓)
					</span>
				</div>
			</div>
			<div className='sub-header'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						minWidth: explorerWidth,
						marginLeft: explorerWidth === 0 ? -explorerMinWidth : 0
					}}>
					<div style={{ marginLeft: 18 }}>EXPLORER</div>
				</div>
				<div
					className='editor-sub-header'
					style={{
						display: 'flex',
						overflowX: 'auto',
						marginLeft: explorerWidth === 0 ? 90 : 0
					}}>
					{files.length === 0
						? null
						: files.map((file, idx) => {
								return (
									<File
										props={{
											files,
											setFiles,
											idx,
											dropping,
											setDropping,
											file,
											setRender,
											explorer,
											setExplorer,
											setExplorerActive,
											fileActive,
											setFileActive
										}}
										key={idx}
									/>
								)
						  })}
				</div>
			</div>
			<div
				className='explorer'
				style={{
					marginLeft: explorerWidth === 0 ? -explorerMinWidth : 0
				}}>
				{explorer.map((item, idx) => (
					<div className='parent' key={idx}>
						<div
							className='folder-line'
							style={{
								marginBottom: !item.open ? -3 : 12
							}}
						/>
						<div>
							<Item
								props={{
									explorer,
									setExplorer,
									explorerActive,
									setExplorerActive,
									item,
									idx,
									explorerWidth
								}}
							/>
							{!item.open
								? null
								: !item.items
								? null
								: item.items.map((_item, _idx) => (
										<Item
											key={_idx}
											props={{
												files,
												setFiles,
												explorer,
												setExplorer,
												explorerActive,
												setExplorerActive,
												setRender,
												item: _item,
												idx,
												_idx,
												setFileActive,
												explorerWidth
											}}
										/>
								  ))}
						</div>
					</div>
				))}
			</div>
			<div
				className='resizer'
				onMouseDown={startResize}
				onDoubleClick={() =>
					setExplorerWidth(explorerWidth === 0 ? explorerMinWidth : 0)
				}>
				{!isMobileDevice() ? null : (
					<div
						style={{
							marginBottom: -60
						}}>
						{explorerWidth === 0 ? (
							<SVG
								name='expand'
								expand={() =>
									setExplorerWidth(explorerMinWidth)
								}
							/>
						) : (
							<>
								<SVG
									name='minimize'
									minimize={() => setExplorerWidth(0)}
								/>
								<SVG name='resize' resize={startResize} />
							</>
						)}
					</div>
				)}
			</div>
			<div className='editor'>
				{files.length === 0 ? (
					<div className='nothing'>{lang.hello} :)</div>
				) : (
					<>
						<div
							className='line'
							ref={lineEditor}
							onScroll={() =>
								(textEditor.current.scrollTop =
									lineEditor.current.scrollTop)
							}>
							{[...Array(Math.floor(line)).keys()].map(idx => (
								<div key={idx}>{idx + 1}</div>
							))}
						</div>
						<div
							className='textEditor'
							ref={textEditor}
							onScroll={() =>
								(lineEditor.current.scrollTop =
									textEditor.current.scrollTop)
							}>
							<Render.current
								props={{ occupation, setOccupation }}
							/>
						</div>
					</>
				)}
			</div>
			<div className='footer'>
				<div className='config'>
					<SVG name='bulb' setTheme={setTheme} theme={theme} />
				</div>
				<div className='config'>
					<SVG name='lang_th' setLang={setLang} lang={TH} />
					<SVG name='lang_en' setLang={setLang} lang={EN} />
				</div>
			</div>
		</div>
	)
}

function Test() {
	return (
		<>
			<br />
			<br />
			<br />
			<div>ทดสอบๆ 1</div>
			<div>
				ๅ/-ๅ/ๅ/ถตข-ุฟวาไนบยาแมผปยนผปิผทปฟย์๋ษฤศฆ็โษศฤฆโ็ณ"๐ธ็ฑญว 1
			</div>
			<br />
			<div>⣿⠄⡇⢸⣟⠄⠁⢸⡽⠖⠛⠈⡉⣉⠉⠋⣁⢘⠉⢉⠛⡿⢿⣿⣿⣿⣿⣿⣿⣿</div>
			<div>⣷⣶⣷⣤⠄⣠⠖⠁⠄⠂⠁⠄⠄⠉⠄⠄⠎⠄⠠⠎⢐⠄⢑⣛⠻⣿⣿⣿⣿⣿</div>
			<div>⣿⣿⣿⠓⠨⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠐⠅⠄⠉⠄⠗⠆⣸⣿⣿⣿⣿⣿</div>
			<div>⣿⣿⣿⡣⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣤⣦⠄⠄⠄⠄⠄⠄⠄⡀⡙⣿⣿⣿⣿</div>
			<div>⣿⣿⡛⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠔⠿⡿⠿⠒⠄⠠⢤⡀⡀⠄⠁⠄⢻⣿⣿⣿</div>
			<div>⣿⣿⠄⠄⠄⠄⠄⠄⣠⡖⠄⠁⠁⠄⠄⠄⠄⠄⠄⠄⣽⠟⡖⠄⠄⠄⣼⣿⣿⣿</div>
			<div>⣿⣿⠄⠄⠄⠄⠄⠄⢠⣠⣀⠄⠄⠄⠄⢀⣾⣧⠄⠂⠸⣈⡏⠄⠄⠄⣿⣿⣿⣿</div>
			<div>⣿⣿⡞⠄⠄⠄⠄⠄⢸⣿⣶⣶⣶⣶⣶⡿⢻⡿⣻⣶⣿⣿⡇⠄⠄⠄⣿⣿⣿⣿</div>
			<div>⣿⣿⡷⡂⠄⠄⠁⠄⠸⣿⣿⣿⣿⣿⠟⠛⠉⠉⠙⠛⢿⣿⡇⠄⠄⢀⣿⣿⣿⣿</div>
			<div>⣶⣶⠃⠄⠄⠄⠄⠄⠄⣾⣿⣿⡿⠁⣀⣀⣤⣤⣤⣄⢈⣿⡇⠄⠄⢸⣿⣿⣿⣿</div>
			<div>⣿⣯⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣷⣶⣿⣿⣥⣬⣿⣿⣟⣿⠃⠄⠨⠺⢿⣿⣿⣿</div>
			<div>⠱⠂⠄⠄⠄⠄⠄⠄⠄⣬⣸⡝⠿⢿⣿⡿⣿⠻⠟⠻⢫⡁⠄⠄⠄⡐⣾⣿⣿⣿</div>
			<div>⡜⠄⠄⠄⠄⠄⠆⡐⡇⢿⣽⣻⣷⣦⣧⡀⡀⠄⠄⣴⣺⡇⠄⠁⠄⢣⣿⣿⣿⣿</div>
			<div>⠡⠱⠄⠄⠡⠄⢠⣷⠆⢸⣿⣿⣿⣿⣿⣿⣷⣿⣾⣿⣿⡇⠄⠄⠠⠁⠿⣿⣿⣿</div>
			<div>⢀⣲⣧⣷⣿⢂⣄⡉⠄⠘⠿⣿⣿⣿⡟⣻⣯⠿⠟⠋⠉⢰⢦⠄⠊⢾⣷⣮⣽⣛</div>
		</>
	)
}

function Test2() {
	return (
		<>
			<br />
			<br />
			<br />
			<div>TEST 2</div>
			<br />
			<div>⣿⠄⡇⢸⣟⠄⠁⢸⡽⠖⠛⠈⡉⣉⠉⠋⣁⢘⠉⢉⠛⡿⢿⣿⣿⣿⣿⣿⣿⣿</div>
			<div>⣷⣶⣷⣤⠄⣠⠖⠁⠄⠂⠁⠄⠄⠉⠄⠄⠎⠄⠠⠎⢐⠄⢑⣛⠻⣿⣿⣿⣿⣿</div>
			<div>⣿⣿⣿⠓⠨⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠐⠅⠄⠉⠄⠗⠆⣸⣿⣿⣿⣿⣿</div>
			<div>⣿⣿⣿⡣⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢰⣤⣦⠄⠄⠄⠄⠄⠄⠄⡀⡙⣿⣿⣿⣿</div>
			<div>⣿⣿⡛⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠔⠿⡿⠿⠒⠄⠠⢤⡀⡀⠄⠁⠄⢻⣿⣿⣿</div>
			<div>⣿⣿⠄⠄⠄⠄⠄⠄⣠⡖⠄⠁⠁⠄⠄⠄⠄⠄⠄⠄⣽⠟⡖⠄⠄⠄⣼⣿⣿⣿</div>
			<div>⣿⣿⠄⠄⠄⠄⠄⠄⢠⣠⣀⠄⠄⠄⠄⢀⣾⣧⠄⠂⠸⣈⡏⠄⠄⠄⣿⣿⣿⣿</div>
			<div>⣿⣿⡞⠄⠄⠄⠄⠄⢸⣿⣶⣶⣶⣶⣶⡿⢻⡿⣻⣶⣿⣿⡇⠄⠄⠄⣿⣿⣿⣿</div>
			<div>⣿⣿⡷⡂⠄⠄⠁⠄⠸⣿⣿⣿⣿⣿⠟⠛⠉⠉⠙⠛⢿⣿⡇⠄⠄⢀⣿⣿⣿⣿</div>
			<div>⣶⣶⠃⠄⠄⠄⠄⠄⠄⣾⣿⣿⡿⠁⣀⣀⣤⣤⣤⣄⢈⣿⡇⠄⠄⢸⣿⣿⣿⣿</div>
			<div>⣿⣯⠄⠄⠄⠄⠄⠄⠄⢻⣿⣿⣷⣶⣿⣿⣥⣬⣿⣿⣟⣿⠃⠄⠨⠺⢿⣿⣿⣿</div>
			<div>⠱⠂⠄⠄⠄⠄⠄⠄⠄⣬⣸⡝⠿⢿⣿⡿⣿⠻⠟⠻⢫⡁⠄⠄⠄⡐⣾⣿⣿⣿</div>
			<div>⡜⠄⠄⠄⠄⠄⠆⡐⡇⢿⣽⣻⣷⣦⣧⡀⡀⠄⠄⣴⣺⡇⠄⠁⠄⢣⣿⣿⣿⣿</div>
			<div>⠡⠱⠄⠄⠡⠄⢠⣷⠆⢸⣿⣿⣿⣿⣿⣿⣷⣿⣾⣿⣿⡇⠄⠄⠠⠁⠿⣿⣿⣿</div>
			<div>⢀⣲⣧⣷⣿⢂⣄⡉⠄⠘⠿⣿⣿⣿⡟⣻⣯⠿⠟⠋⠉⢰⢦⠄⠊⢾⣷⣮⣽⣛</div>
		</>
	)
}

export default App
