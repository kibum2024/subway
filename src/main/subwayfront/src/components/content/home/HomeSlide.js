import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import * as mainImages from 'src/image/home/mainImage';
import 'src/components/content/home/HomeSlide.css';

const HomeSlide = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = [mainImages.mainSlide01, mainImages.mainSlide02, mainImages.mainSlide03, mainImages.mainSlide04, mainImages.mainSlide05];
	const navigate = useNavigate();

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(intervalId);
	}, [images.length]);

	const handleSlidePageClick = (index) => {
		setCurrentIndex(index);
	}

	const handleStoreMapClick = () => {
		navigate("/story/storefind");
	}


	return (
		<div className="main-slide-wrap">
			<div className="main-slide">
				<ul>
					{images.map((image, index) => {
						return (
							<li key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
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
					<li onClick={handleStoreMapClick} ><img src={ mainImages.storeMap } alt="store map"/><strong>매장찾기</strong></li>
					<li><img src={ mainImages.franchise } alt="franchise" /><strong>가맹신청ㆍ문의</strong></li>
				</ul>
			</div>
		</div>
	)
};

export default HomeSlide;


