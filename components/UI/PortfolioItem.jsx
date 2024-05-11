
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
    <div className={`${classes.portfolio__item}`} style={{ position: 'relative' }}>
  <a
    target='_blank'
    style={{ textDecoration: 'none' }}
    href={liveUrl}
    rel='noreferrer'
  >
    <>
      {ribbonText && (
        <div style={{ zIndex: 99, position: 'absolute', top: 0, left: 0 }} className='ribbon ribbon-top-left'>
          <span>{ribbonText}</span>
        </div>
      )}

      <div className='bg-transparent'>
        <div className={`${classes.portfolio__img}`}>
          <Image alt={title} src={img} width={380} height={1} style={{ maxHeight: "380px", overflow: "auto" }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ background: "transparent" }}>{title}</h3>
          <p style={{ background: "transparent" }}>{subtitle}</p>
        </div>
        <div className="pb-5"></div>
        <div
          style={{
            position: "absolute",
            bottom: "20px",                        
            background: "transparent",
            display: "flex",
            flexDirection: "row",            
            flexWrap: "wrap",
          }}
        >
          {keyword.map((item, index) => (
            <span
              className={`${classes.portfolio__keyword} my-1`}
              key={index}
              style={{ marginRight: '5px', marginBottom: '5px' }} // Add margin to separate keywords
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  </a>
</div>



  );
};

export default PortfolioItem;