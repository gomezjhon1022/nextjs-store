import styles from './Description.module.sass'
import Image from "next/image"
import { PLACEHOLDER_IMAGE } from './blurImage'

export const Description = () => {
  return (
    <section className={styles.Description}>
      <div className={styles.Description__imageContainer}>
        <Image
          src="/images/description.jpeg" alt="products marketplace"
          fill
          placeholder='blur'
          blurDataURL={PLACEHOLDER_IMAGE}
        />
      </div>
      <h2 className={styles.Description__text}>Make tomorrow happen today</h2>
      <p>Digital Destiny Store: Explore the latest in cutting-edge gadgets and gear. Embrace innovation, stay at the forefront of technology, and redefine your digital experience with us</p>
    </section>
  )
}