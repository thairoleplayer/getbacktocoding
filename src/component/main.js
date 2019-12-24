import React, { useRef, useState, useEffect } from 'react'

function Main({ props }) {
	const { occupation, setOccupation } = props
	const i = useRef(0)
	const j = useRef(0)
	const increasing = useRef(true)
	const occupations = [
		{ name: 'fullstack(overflow) developer', color: '#e06c75' },
		{ name: 'memer', color: '#c678dd' },
		{ name: 'weeb', color: '#61afef' },
		{ name: 'stand user', color: '#e5c07b' },
		{ name: 'google master', color: '#d19a66' }
	]

	const [visible, setVisible] = useState(true)
	const occupationTimer = 50
	const occupationAwaitLoop = 40
	const cursorTimer = 500

	const occupationRef = useRef('')
	const occupationInteval = useRef()
	const cursorInteval = useRef()

	const occupationLifeCycle = async () => {
		if (increasing.current) {
			occupationRef.current = occupations[i.current].name[j.current]
				? occupationRef.current + occupations[i.current].name[j.current]
				: occupationRef.current
			j.current++
			setOccupation(occupationRef.current)
			if (
				j.current ===
				occupations[i.current].name.length + occupationAwaitLoop
			) {
				j.current = occupations[i.current].name.length
				increasing.current = false
			}
		} else {
			occupationRef.current = occupationRef.current.slice(0, -1)
			j.current--
			setOccupation(occupationRef.current)
			if (j.current === 0) {
				i.current =
					i.current === occupations.length - 1 ? 0 : i.current + 1
				increasing.current = true
			}
		}
	}

	const cursorLifeCycle = () => setVisible(!visible)

	useEffect(() => {
		occupationInteval.current = setInterval(
			occupationLifeCycle,
			occupationTimer
		)
		cursorInteval.current = setInterval(cursorLifeCycle, cursorTimer)
		return () => {
			clearInterval(occupationInteval.current)
			clearInterval(cursorInteval.current)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible])
	return (
		<>
			<div>
				{`Hi, my name is `}
				<span style={{ color: occupations[i.current].color }}>
					Benefit Lumberjack
				</span>
			</div>
			<br />
			<div>
				{`I am `}
				<span style={{ color: occupations[i.current].color }}>
					{occupation}
				</span>
				<span
					style={{
						visibility: visible ? 'visible' : 'hidden'
					}}
					className='cursor'
				/>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div>TODO : STYLE SCROLLBAR STYLE</div>
		</>
	)
}

export default Main
