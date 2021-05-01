import { cloneElement, ReactElement } from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shoulMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shoulMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isLinkActive = false

  if (shoulMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isLinkActive = true
  }

  if (
    !shoulMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isLinkActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isLinkActive ? 'pink.400' : 'gray.50' })}
    </Link>
  )
}
