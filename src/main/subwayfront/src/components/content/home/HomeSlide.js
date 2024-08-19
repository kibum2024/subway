import React, { useState, useEffect, useRef } from "react";
import * as mainImages from 'src/image/home/mainImage';
import 'src/components/content/home/HomeSlide.css';

const HomeSlide = () => {
	const [leftPosition, setLeftPosition] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = [mainImages.mainSlide01, mainImages.mainSlide02, mainImages.mainSlide03, mainImages.mainSlide04, mainImages.mainSlide05];
	const ulRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	useEffect(() => {
		//화면 width 값구하기
		const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 0;
		setLeftPosition(currentIndex * -containerWidth);
	}, [currentIndex]);

	useEffect(() => {
		if (ulRef.current) {
			ulRef.current.style.left = `${leftPosition}px`;
		}
	}, [leftPosition]);

	const handleSlidePageClick = (index) => {
		setCurrentIndex(index);
	}

	return (
		<div className="main-slide-wrap">
			<div className="main-slide" ref={containerRef}>
				<ul ref={ulRef}>
					{images.map((image, index) => {
						return (
							<li key={index} className={`slide-item ${index === currentIndex ? 'active' : ''}`}>
								<img
									src={image}
									alt={`Slide ${index}`}
									className="slide-image"
								/>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="main-slide-page">
				{images.map((image, index) => {
					return (
						<div key={index} className={`slide-item ${index === currentIndex ? 'active' : ''}`} onClick={() => handleSlidePageClick(index)}>
						</div>
					);
				})}
			</div>
			<div className="main-quick-link">
				<ul>
					<li><img src={ mainImages.storeMap } alt="store map" /><strong>매장찾기</strong></li>
					<li><img src={ mainImages.franchise } alt="franchise" /><strong>가맹신청ㆍ문의</strong></li>
				</ul>
			</div>
		</div>
	)
};

export default HomeSlide;


