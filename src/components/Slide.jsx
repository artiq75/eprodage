import { useState, useEffect, useRef } from 'react'

export function Slide({ onClose, onClick, close, incrementer }) {
  const [index, setIndex] = useState(0)
  const imgsRef = useRef(null)
  const thumbnailsRef = useRef(null)
  const imgs = useRef([])
  const thumbnails = useRef([])

  useEffect(() => {
    thumbnails.current.forEach(thumbnail => {
      thumbnail.addEventListener('click', onClick)
    });
  }, [thumbnails.current, onClick])

  useEffect(() => {
    imgs.current = imgsRef.current.querySelectorAll('img')
    thumbnails.current = thumbnailsRef.current.querySelectorAll(
      '.slide-thumbnails__img'
    )
    imgs.current[0].classList.add('current')
    thumbnails.current[0].classList.add('current')
    thumbnails.current.forEach((thumbnail, i) => {
      thumbnail.dataset.index = i
    })
  }, [])

  useEffect(() => {
    thumbnails.current.forEach((thumbnail) => {
      thumbnail.addEventListener('click', function () {
        setIndex(JSON.parse(thumbnail.dataset.index))
      })
    })
  }, [index])

  useEffect(() => {
    if (index >= imgs.current.length) {
      setIndex(0)
    }

    if (index < 0) {
      setIndex(imgs.current.length - 1)
    }

    imgs.current.forEach((img) => {
      img.classList.remove('current')
    })
    imgs.current[index]?.classList.add('current')
    thumbnails.current.forEach((thumbnail) => {
      thumbnail.classList.remove('current')
    })
    thumbnails.current[index]?.classList.add('current')
  }, [index])

  const handleNext = function () {
    setIndex((index) => index + 1)
  }

  const handleBack = function () {
    setIndex((index) => index - 1)
  }

  const handleClose = function () {
    onClose(true)
  }

  return (
    <div className="slide">
      {close && (
        <div className="slide-close" onClick={handleClose}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>{' '}
        </div>
      )}
      <div className="slide-front">
        <div className={`slide-btn next ${incrementer ? 'reveal' : ''}`} onClick={handleNext}>
          <img src="images/icon-next.svg" alt="" />
        </div>
        <div ref={imgsRef} className="slide-front__imgs">
          <img
            src="images/image-product-1.jpg"
            width={1000}
            height="auto"
            alt=""
          />
          <img
            src="images/image-product-2.jpg"
            width={1000}
            height="auto"
            alt=""
          />
          <img
            src="images/image-product-3.jpg"
            width={1000}
            height="auto"
            alt=""
          />
          <img
            src="images/image-product-4.jpg"
            width={1000}
            height="auto"
            alt=""
          />
        </div>
        <div className={`slide-btn back ${incrementer ? 'reveal' : ''}`} onClick={handleBack}>
          <img src="images/icon-previous.svg" alt="" />
        </div>
      </div>
      <div className="slide-thumbnails" ref={thumbnailsRef}>
        <div className="slide-thumbnails__img">
          <img
            src="images/image-product-1-thumbnail.jpg"
            width={176}
            height={176}
            alt=""
          />
        </div>
        <div className="slide-thumbnails__img">
          <img
            src="images/image-product-2-thumbnail.jpg"
            width={176}
            height={176}
            alt=""
          />
        </div>
        <div className="slide-thumbnails__img">
          <img
            src="images/image-product-3-thumbnail.jpg"
            width={176}
            height={176}
            alt=""
          />
        </div>
        <div className="slide-thumbnails__img">
          <img
            src="images/image-product-4-thumbnail.jpg"
            width={176}
            height={176}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
