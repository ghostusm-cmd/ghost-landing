const ITEMS = [
  'GHOST IN THE MACHINE',
  'CODE',
  'SYSTEMS',
  'DEEP DIVES',
  'BUILDING IN THE DARK',
  'SHIPPING IN SILENCE',
]

function Row() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className={i % 2 ? 'outline' : ''}>
          {item} <i>✦</i>
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  )
}
