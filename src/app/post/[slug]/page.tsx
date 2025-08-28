

import React from 'react'

type Props = {
  params: {
    slug: string
  }
}
function PostSlugPage({params}: Props) {

  const {slug} = params
  return (
    <div>PostSlugPage: {slug}</div>
  )
}

export default PostSlugPage