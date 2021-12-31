import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro'
import Circle from 'react-circle'

// const Wrapper = styled.div`
//   width: 200px;
//   height: 200px;
//   position: relative;
// `

const Wrapper = styled.div<{ width: number | undefined }>`
  /* border: 2px solid red; */
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ width }) => (width ? `${width}px` : '188px')};
  width: ${({ width }) => (width ? `${width}px` : '188px')};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
`

const CircleContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 24px;
`

const Button = styled.div`
  background-color: #266ad1;
  padding: 4px 15px;
  color: white;
  border-radius: 10px;
  width: fit-content;
  cursor: pointer;
`

/**
 * https://github.com/zzarcon/react-circle
 * A progress of the ring
 */

export default function Process() {
  const [counter, setCounter] = useState(0)
  const [width, setWidth] = useState<number | undefined>(undefined)

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const instance = wrapperRef.current

    if (!instance) return

    const width = instance.clientWidth

    setWidth(width)
  }, [counter])

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter((prev) => {
  //       prev += 10

  //       if (prev >= 100) {
  //         clearInterval(timer)
  //       }

  //       return prev
  //     })
  //   }, 1000)
  // }, [])

  return (
    <>
      <Button
        onClick={() =>
          setCounter((prev) => {
            prev += 10
            return prev
          })
        }
      >
        增加
      </Button>

      <Wrapper width={width}>
        <Circle
          progress={counter}
          responsive
          showPercentage={false}
          progressColor="#ecedf0"
          bgColor="rgb(76, 154, 255)"
        />

        <CircleContent ref={wrapperRef}>{counter}</CircleContent>
      </Wrapper>
    </>
  )
}
