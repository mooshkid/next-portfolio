import React from 'react'

export default function page({ params }: {
  params: { id: string }
}) {
  return (
    <div>page id is {params.id}</div>
  )
}
