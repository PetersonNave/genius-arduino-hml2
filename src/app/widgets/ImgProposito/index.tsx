'use client'
import Image from 'next/image'
import React from 'react'
import ChangeWithTime from '../ChangeWithTime'
import styles from './style.module.scss'

function ImgProposito({ imgs }:{imgs: any}) {
	const currentImg = ChangeWithTime(imgs).props.children
	const normalizedCurrentImage = currentImg + 1
	return (
		<div className={`${styles.box_img}`}>
			<h3>({normalizedCurrentImage}/{imgs.length}) - {imgs[currentImg].title}</h3>
			<div className={styles.img}>
				{imgs.map((img: { src: any; alt: any; title: any; width: any; height: any }, index: any) => (
					<img
						src={`${img.src}`}
						alt={img.alt}
						title={img.title}
						height={"100%"}
						
						loading="lazy"
						key={index}
						className={currentImg === index ? styles.abled : styles.disabled}
						 />
				))}
			</div>
		</div>
	)
}

export default ImgProposito
