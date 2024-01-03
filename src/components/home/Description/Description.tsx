"use client"
import { useState } from 'react'
import styles from './Description.module.sass'
import Image from "next/image"
import { PLACEHOLDER_IMAGE } from './blurImage'
import classNames from 'classnames/bind'

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);
  const cx = classNames.bind(styles);
  const buttonStyles = cx('Description__button', {
    'Description__button--border':hasBorder,
  });
  
  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg" 
            alt="products marketplace"
            fill
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Make tomorrow happen today</h2>
        <p>Digital Destiny Store: Explore the latest in cutting-edge gadgets and gear. Embrace innovation, stay at the forefront of technology, and redefine your digital experience with us</p>
      </div>
    </section>
  )
}