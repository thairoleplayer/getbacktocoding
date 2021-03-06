import React, { useState, useContext } from 'react'
import { useDrop, useDrag } from 'react-dnd'
import SVG from '../stuff/svg'
import { AppContext } from '../App'

const File = ({ props }) => {
	const { idx, file, dropping, setDropping } = props

	const {
		files,
		setFiles,
		setRender,
		setExplorerActive,
		setFileActive,
		fileActive,
		explorer,
		setExplorer,
		isMobileDevice
	} = useContext(AppContext)

	const [{ isDragging }, drag] = useDrag({
		item: { name: idx, type: 'box' },
		begin: () => {
			setDropping(idx)
			activeFileHandle()
		},
		end: (item, monitor) => {
			setDropping(-1)
			const dropResult = monitor.getDropResult()
			if (item && dropResult) {
				const newFiles = [...files]
				setFiles(swap(newFiles, item.name, dropResult.name))
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

	const opacity = isDragging ? 0.3 : 1

	const swap = (arr, i, j) => {
		const temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
		return arr
	}

	const [hover, setHover] = useState(false)

	const activeFileHandle = () => {
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
	}

	const deleteFileHandle = e => {
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
			onClick={() => activeFileHandle()}>
			<div>
				<span style={{ whiteSpace: 'nowrap' }}>
					<SVG name={file.type} /> {file.name}
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
					onClick={e => deleteFileHandle(e)}>
					<SVG name='close' />
				</span>
			</div>
		</div>
	)
}

export default File
