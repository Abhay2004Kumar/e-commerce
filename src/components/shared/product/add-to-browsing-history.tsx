'use client'

import { useEffect } from 'react'
import useBrowsingHistory from '../../../../hooks/use-browsing-history'

export default function AddToBrowsingHistory({
  id,
  category,
}: {
  id: string
  category: string
}) {
  const { addItem } = useBrowsingHistory()
  useEffect(() => {
    addItem({ id, category })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}
