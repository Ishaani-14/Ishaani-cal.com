
import React from 'react';
import classes from '../../styles/portfolio-item.module.css';
import Image from 'next/image';
import Link from 'next/link';


const PortfolioItem = (props) => {
  const {
    title,
    img,
    liveUrl,
    keyword = [],
    subtitle,
    ribbonText = null,
  } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <a
        target='_blank'
        style={{ textDecoration: 'none'}}
        href={liveUrl}
        rel='noreferrer'  
        className={classes.portfolio__link}
      >
          {ribbonText && (
            <div style={{ zIndex: 99 }} className='ribbon ribbon-top-left'>
              <span>{ribbonText}</span>
            </div>
          )}

            <div className={`${classes.portfolio__img}`}>
              <Image alt={title} src={img} width={380} height={1} style={{maxHeight: "380px", overflow:"auto", objectFit:"cover"}}/>

            </div>
            <div className={classes.portfolio__content}>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className={classes.portfolio__keywords}>
          {keyword.map((item, index) => (
            <span
              className={`${classes.portfolio__keyword} my-1`}
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;