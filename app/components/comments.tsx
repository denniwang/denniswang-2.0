'use client'

import Giscus from '@giscus/react'


export function Comments() {
  return (
    <Giscus
      id="comments"
      repo="denniwang/denniswang-2.0"
      repoId="R_kgDOOqspfA"  // Get from giscus.app
      category="General"
      categoryId="DIC_kwDOOqspfM4C1A_m"  // Get from giscus.app
      mapping="pathname"
      reactionsEnabled="1"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  )
}
