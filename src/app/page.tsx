"use client"
import React from 'react'
import { Grafico1 } from './grafico1'
import { Grafico2 } from './grafico2'
import { Grafico3 } from './grafico3'

export default function Page (): React.ReactElement {
  return(
    <main className='flex'>
    <Grafico1 />
    <Grafico2 />
    <Grafico3 />
    </main>
  )
}
