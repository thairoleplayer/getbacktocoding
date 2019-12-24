import React, { useState } from 'react'
import { useDrop, useDrag } from 'react-dnd'
import Icon from '../stuff/svg'

const File = ({ props }) => {
	const {
		files,
		setFiles,
		dropping,
		setDropping,
		idx,
		file,
		setRender,
		setExplorerActive,
		setFileActive,
		fileActive,
		explorer,
		setExplorer
	} = props
	const [{ isDragging }, drag] = useDrag({
		item: { name: idx, type: 'box' },
		begin: () => {
			setDropping(idx)
		},
		end: (item, monitor) => {
			setDropping(-1)
			const dropResult = monitor.getDropResult()
			if (item && dropResult) {
				const newFiles = [...files]
				swap(newFiles, item.name, dropResult.name)
			}
		},
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	})

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: 'box',
		drop: () => ({ name: idx }),
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	})

	const isActive = canDrop && isOver

	const opacity = isDragging ? 0.4 : 1

	const swap = (a, x, y) => {
		const temp = a[x]
		a[x] = a[y]
		a[y] = temp
		setFiles(a)
		return a
	}

	const [hover, setHover] = useState(false)

	function isMobileDevice() {
		return (
			typeof window.orientation !== 'undefined' ||
			navigator.userAgent.indexOf('IEMobile') !== -1
		)
	}
	return (
		<div
			ref={dropping === -1 || dropping === idx ? drag : drop}
			style={{ opacity }}
			className={`dragable ${
				isActive
					? 'drag-hovered'
					: fileActive === file.id
					? 'active'
					: ''
			}`}
			onMouseOver={() => (isMobileDevice() ? null : setHover(true))}
			onMouseLeave={() => (isMobileDevice() ? null : setHover(false))}
			onClick={() => {
				setRender({ current: file.render })
				setExplorerActive(file.id)
				setFileActive(file.id)
				const parentIdx = explorer.findIndex(_explorer => {
					return _explorer.id === file.parentId
				})
				if (!explorer[parentIdx].open)
					setExplorer([
						...explorer.slice(0, parentIdx),
						{
							...explorer[parentIdx],
							open: !explorer[parentIdx].open
						},
						...explorer.slice(parentIdx + 1)
					])
			}}>
			<div>
				<span style={{ whiteSpace: 'nowrap' }}>
					<Icon name={file.type} /> {file.name}
				</span>
				<span
					style={{
						marginLeft: 10,
						marginRight: 5,
						visibility:
							hover || fileActive === file.id
								? 'visible'
								: 'hidden'
					}}
					onClick={e => {
						e.stopPropagation()
						const newFiles = [...files]
						newFiles.splice(idx - newFiles.length, 1)
						if (newFiles.length === 0) {
							setFileActive(null)
							setExplorerActive(null)
						} else if (file.id === fileActive) {
							setFileActive(newFiles[newFiles.length - 1].id)
							setExplorerActive(newFiles[newFiles.length - 1].id)
							setRender({
								current: newFiles[newFiles.length - 1].render
							})
						}
						setFiles(newFiles)
					}}>
					<Icon name='close' />
				</span>
			</div>
		</div>
	)
}

export default File
