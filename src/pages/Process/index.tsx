import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Circle from 'react-circle'

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`

const CircleContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default function Process() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        prev += 10

        if (prev >= 100) {
          clearInterval(timer)
        }

        return prev
      })
    }, 1000)
  }, [])

  return (
    <Wrapper>
      <Circle
        progress={counter}
        responsive
        showPercentage={false}
        progressColor="#ecedf0"
        bgColor="rgb(76, 154, 255)"
      />

      <CircleContent>{counter}</CircleContent>
    </Wrapper>
  )
}
