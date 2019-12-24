import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import TouchBackend from 'react-dnd-touch-backend'

ReactDOM.render(
	<DndProvider
		backend={
			typeof window.orientation !== 'undefined' ||
			navigator.userAgent.indexOf('IEMobile') !== -1
				? TouchBackend
				: Backend
		}>
		<App />
	</DndProvider>,
	document.getElementById('root')
)
