'use client'
import React, { useState, useEffect } from 'react'

const ChangeWithTime = (array: any[], time = 4000) => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		let intervalId = setInterval(() => {
			setIndex((i) => (i + 1) % array.length)
		}, time)

		return () => clearInterval(intervalId)
	}, [array, time])

	return <>{index}</>
}

export default ChangeWithTime
