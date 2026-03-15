import React from 'react'
import { TICKER_ITEMS } from '../constants'

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track ticker-l">
        {items.map((t, i) => <span key={i} className="ticker-item">{t}</span>)}
      </div>
    </div>
  )
}
